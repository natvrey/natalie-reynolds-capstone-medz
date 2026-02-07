import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { v4 as uuid } from "uuid";
import "./PhoneDialer.scss";
import { Device } from "@twilio/voice-sdk";
import phoneIcon from "../../assets/images/phone.svg";
import micOnIcon from "../../assets/images/mic-on.svg";
import micMutedIcon from "../../assets/images/mic-muted.svg";

document.title = "Call";

// Flag image URL (flagcdn.com) – works everywhere; emoji often shows as letters on Windows
const flagImageUrl = (code) =>
  code && code.length === 2
    ? `https://flagcdn.com/24x18/${code.toLowerCase()}.png`
    : null;

class NumberInputText extends React.Component {
  render() {
    return (
      <input
        type="tel"
        className="voice-dialer__number-input"
        placeholder="1223 456 7889"
        value={this.props.currentNumber}
        onChange={this.props.handleOnChange}
      />
    );
  }
}

class CountrySelectBox extends React.Component {
  state = { open: false };

  render() {
    const self = this;
    const current = self.props.countries.find((c) => c.cc === self.props.countryCode) || self.props.countries[0];

    const countryOptions = self.props.countries.map((country) => (
      <li className="voice-dialer__country-item" key={uuid()}>
        <button
          type="button"
          className="voice-dialer__country-option"
          onClick={() => {
            self.props.handleOnChange(country.cc);
            self.setState({ open: false });
          }}
        >
          {flagImageUrl(country.code) && (
            <img
              src={flagImageUrl(country.code)}
              alt=""
              className="voice-dialer__flag-img"
            />
          )}
          <span>{country.name} (+{country.cc})</span>
        </button>
      </li>
    ));

    return (
      <div className="voice-dialer__country-wrap">
        <button
          type="button"
          className="voice-dialer__country-trigger"
          onClick={() => this.setState({ open: !this.state.open })}
          aria-expanded={this.state.open}
        >
          {flagImageUrl(current.code) && (
            <img
              src={flagImageUrl(current.code)}
              alt=""
              className="voice-dialer__flag-img"
            />
          )}
          <span className="voice-dialer__chevron">▼</span>
        </button>
        {this.state.open && (
          <ul className="voice-dialer__country-list">{countryOptions}</ul>
        )}
      </div>
    );
  }
}

class CallButton extends React.Component {
  render() {
    const { onPhone, disabled, handleOnClick } = this.props;
    return (
      <button
        type="button"
        className={`voice-dialer__call-btn ${onPhone ? "voice-dialer__call-btn--hangup" : ""}`}
        onClick={handleOnClick}
        disabled={disabled}
        aria-label={onPhone ? "Hang up" : "Call"}
      >
        <img className="voice-dialer__call-btn-icon" src={phoneIcon} alt="" />
      </button>
    );
  }
}

class MuteButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="voice-dialer__mute-btn"
        onClick={this.props.handleOnClick}
        aria-label={this.props.muted ? "Unmute" : "Mute"}
      >
        <img
          className="voice-dialer__mute-icon"
          src={this.props.muted ? micMutedIcon : micOnIcon}
          alt=""
        />
        <span>Mute</span>
      </button>
    );
  }
}

class DTMFTone extends React.Component {
  sendDigit(digit) {
    const activeCall = this.props.activeCall;
    if (this.props.onPhone && activeCall) {
      activeCall.sendDigits(digit);
    } else if (this.props.onDigit) {
      this.props.onDigit(digit);
    }
  }

  render() {
    const rows = [
      [
        ["1", ""],
        ["2", "A B C"],
        ["3", "D E F"],
      ],
      [
        ["4", "G H I"],
        ["5", "J K L"],
        ["6", "M N O"],
      ],
      [
        ["7", "P Q R S"],
        ["8", "T U V"],
        ["9", "W X Y Z"],
      ],
      [
        ["*", ""],
        ["0", "+"],
        ["#", ""],
      ],
    ];

    return (
      <div className="voice-dialer__keypad">
        {rows.map((row, ri) => (
          <div className="voice-dialer__keypad-row" key={ri}>
            {row.map(([digit, sub], di) => (
              <button
                type="button"
                key={di}
                className="voice-dialer__keypad-key"
                onClick={() => this.sendDigit(digit)}
              >
                <span className="voice-dialer__keypad-digit">{digit}</span>
                {sub && <span className="voice-dialer__keypad-sub">{sub}</span>}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

class PhoneDialer extends React.Component {
  state = {
    muted: false,
    log: "Ready to call",
    onPhone: false,
    countryCode: "1",
    currentNumber: "",
    isValidNumber: false,
    instructionsCollapsed: true,
    device: null,
    activeCall: null,
    countries: [
      { name: "USA/CA/CARIB", cc: "1", code: "us" },
      { name: "Great Britain", cc: "44", code: "gb" },
      { name: "Colombia", cc: "57", code: "co" },
      { name: "Ecuador", cc: "593", code: "ec" },
      { name: "Estonia", cc: "372", code: "ee" },
      { name: "Germany", cc: "49", code: "de" },
      { name: "Hong Kong", cc: "852", code: "hk" },
      { name: "Ireland", cc: "353", code: "ie" },
      { name: "Singapore", cc: "65", code: "sg" },
      { name: "Spain", cc: "34", code: "es" },
      { name: "Brazil", cc: "55", code: "br" },
    ],
  };

  componentDidMount() {
    const self = this;
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
    $.getJSON(`${apiUrl}/token`)
      .done((data) => {
        const device = new Device(data.token);
        device.on("error", (err) => {
          self.setState({ log: "Error: " + (err.message || "See console.") });
        });
        device
          .register()
          .then(() => {
            self.setState({ device, log: "Ready to call" });
          })
          .catch((err) => {
            self.setState({ log: "Error: " + (err.message || "Registration failed.") });
          });
      })
      .fail((jqXHR) => {
        const msg =
          jqXHR.responseJSON?.error ||
          jqXHR.statusText ||
          "Could not fetch token. Check server and .env.";
        self.setState({ log: msg });
      });
  }

  componentWillUnmount() {
    const device = this.state.device;
    if (device) {
      device.unregister().catch(() => {});
      device.destroy();
    }
  }

  handleChangeCountryCode = (countryCode) => this.setState({ countryCode });

  handleChangeNumber = (e) => {
    const v = e.target.value;
    this.setState({
      currentNumber: v,
      isValidNumber: v.replace(/\D/g, "").length >= 10,
    });
  };

  handleKeypadDigit = (digit) => {
    this.setState((s) => {
      const next = s.currentNumber + digit;
      return {
        currentNumber: next,
        isValidNumber: next.replace(/\D/g, "").length >= 10,
      };
    });
  };

  handleToggleMute = () => {
    const muted = !this.state.muted;
    this.setState({ muted });
    const activeCall = this.state.activeCall;
    if (activeCall) activeCall.mute(muted);
  };

  handleToggleCall = () => {
    const device = this.state.device;
    if (!device) return;
    if (!this.state.onPhone) {
      const n = "+" + this.state.countryCode + this.state.currentNumber.replace(/\D/g, "");
      this.setState({ muted: false, onPhone: true, log: "Calling " + n });
      device
        .connect({ params: { number: n } })
        .then((call) => {
          this.setState({ activeCall: call });
          call.on("disconnect", () => {
            this.setState({ onPhone: false, activeCall: null, log: "Call ended." });
          });
        })
        .catch((err) => {
          this.setState({
            onPhone: false,
            log: "Error: " + (err.message || "Call failed."),
          });
        });
    } else {
      device.disconnectAll();
      this.setState({ onPhone: false, activeCall: null, log: "Call ended." });
    }
  };

  render() {
    const { log, onPhone, instructionsCollapsed } = this.state;

    return (
      <article className="voice-dialer">
        <section className="voice-dialer__instructions">
          <button
            type="button"
            className="voice-dialer__instructions-header"
            onClick={() => this.setState({ instructionsCollapsed: !instructionsCollapsed })}
            aria-expanded={!instructionsCollapsed}
          >
            <h2 className="voice-dialer__instructions-title">Voice / Phone Dialer</h2>
            <span className="voice-dialer__instructions-chevron">{instructionsCollapsed ? "▼" : "▲"}</span>
          </button>
          {!instructionsCollapsed && (
            <div className="voice-dialer__instructions-body">
              <ol className="voice-dialer__instructions-list">
                <li>Select the country you wish to call (adds the correct country code).</li>
                <li>Type or paste the number in the field, or use the keypad.</li>
                <li>Tap the call button to start the call.</li>
                <li>Use Mute and the keypad during a call if needed. Tap the red button to end the call.</li>
              </ol>
              <p className="voice-dialer__instructions-note">
                This demo uses a Twilio trial account; calls may be limited to certain numbers once balance is low.
              </p>
            </div>
          )}
        </section>

        <section className="voice-dialer__phone">
          <div className="voice-dialer__status">{log}</div>

          <div className="voice-dialer__form">
            <CountrySelectBox
              countries={this.state.countries}
              countryCode={this.state.countryCode}
              handleOnChange={this.handleChangeCountryCode}
            />
            <NumberInputText
              currentNumber={this.state.currentNumber}
              handleOnChange={this.handleChangeNumber}
            />
          </div>

          <div className="voice-dialer__call-wrap">
<CallButton
                  handleOnClick={this.handleToggleCall}
                  disabled={(!this.state.isValidNumber && !onPhone) || !this.state.device}
                  onPhone={onPhone}
                />
          </div>

          <DTMFTone onPhone={onPhone} activeCall={this.state.activeCall} onDigit={this.handleKeypadDigit} />

          <div className="voice-dialer__actions">
            {onPhone && (
              <MuteButton handleOnClick={this.handleToggleMute} muted={this.state.muted} />
            )}
            {/* <Link to="/" className="voice-dialer__back-btn">
              Back to Home
            </Link> */}
          </div>
        </section>
      </article>
    );
  }
}

export {
  PhoneDialer as default,
  NumberInputText,
  CountrySelectBox,
  CallButton,
  MuteButton,
  DTMFTone,
};
