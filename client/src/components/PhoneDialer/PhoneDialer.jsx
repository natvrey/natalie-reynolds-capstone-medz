import React from "react";
import $ from "jquery";
import { v4 as uuid } from "uuid";
import "./PhoneDialer.scss";
import { Device } from "twilio-client";
import phoneIcon from "../../assets/images/phone.svg";
import micOnIcon from "../../assets/images/mic-on.svg";
import micMutedIcon from "../../assets/images/mic-muted.svg";

document.title = "Call";

class NumberInputText extends React.Component {
  render() {
    return (
      <div className="input-group input-group-sm">
        <input
          type="tel"
          className="form-control"
          placeholder="555-666-7777"
          value={this.props.currentNumber}
          onChange={this.props.handleOnChange}
        />
      </div>
    );
  }
}

class CountrySelectBox extends React.Component {
  render() {
    var self = this;

    var CountryOptions = self.props.countries.map(function (country) {
      var flagClass = "flag flag-" + country.code;

      return (
        <li className="dialer__country-list" key={uuid()}>
          <a href="#" onClick={() => self.props.handleOnChange(country.cc)}>
            <div className={flagClass}></div>
            <span>
              {" "}
              {country.name} (+{country.cc})
            </span>
          </a>
        </li>
      );
    });

    return (
      <>
        <div className="input-group-btn">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            +<span className="country-code">{self.props.countryCode}</span>
          </button>

          <ul className="dropdown-menu">{CountryOptions}</ul>
        </div>
      </>
    );
  }
}

class LogBox extends React.Component {
  render() {
    return (
      <div>
        <div className="log">{this.props.text}</div>
        <p className="dialer__paragraphs">{this.props.smallText}</p>
      </div>
    );
  }
}

class CallButton extends React.Component {
  render() {
    return (
      <button
        className={
          "btn btn-circle btn-success " +
          (this.props.onPhone ? "btn-danger" : "btn-success")
        }
        onClick={this.props.handleOnClick}
        disabled={this.props.disabled}
      >
        <img className="phone-icon" src={phoneIcon} alt="phone icon" />
      </button>
    );
  }
}

class MuteButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-circle btn-default"
        onClick={this.props.handleOnClick}
      >
        <img
          className="mic"
          src={this.props.muted ? micMutedIcon : micOnIcon}
          alt="mic icon"
        ></img>
      </button>
    );
  }
}

class DTMFTone extends React.Component {
  // Handle numeric buttons
  sendDigit(digit) {
    Device.activeConnection().sendDigits(digit);
  }

  render() {
    return (
      <div className="keys">
        <div className="key-row">
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("1")}
          >
            1
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("2")}
          >
            2<span>A B C</span>
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("3")}
          >
            3<span>D E F</span>
          </button>
        </div>
        <div className="key-row">
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("4")}
          >
            4<span>G H I</span>
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("5")}
          >
            5<span>J K L</span>
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("6")}
          >
            6<span>M N O</span>
          </button>
        </div>
        <div className="key-row">
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("7")}
          >
            7<span>P Q R S</span>
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("8")}
          >
            8<span>T U V</span>
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("9")}
          >
            9<span>W X Y Z</span>
          </button>
        </div>
        <div className="key-row">
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("*")}
          >
            *
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("0")}
          >
            0
          </button>
          <button
            className="btn btn-circle btn-default"
            onClick={() => this.sendDigit("#")}
          >
            #
          </button>
        </div>
      </div>
    );
  }
}

class PhoneDialer extends React.Component {
  state = {
    muted: false,
    log: "Waiting for you to start a call...",
    onPhone: false,
    countryCode: "1",
    currentNumber: "",
    isValidNumber: false,
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

  // Initialize after component creation
  componentDidMount() {
    var self = this;

    // Fetch Twilio capability token from our Node.js server

    $.getJSON("http://localhost:8083/token")

      .done(function (data) {
        Device.setup(data.token);
        // console.log("Token", data.token);
      })
      .fail(function (err) {
        console.log(err);
        self.setState({ log: "Could not fetch token, see console.log" });
      });

    // Configure event handlers for Twilio Device

    Device.disconnect(function () {
      self.setState({
        onPhone: false,
        log: "Call ended.",
      });
    });

    Device.ready(function () {
      self.log = "Connected";
    });
  }

  // Handle country code selection

  handleChangeCountryCode = (countryCode) => {
    this.setState({ countryCode: countryCode });
  };

  // Handle number input
  handleChangeNumber = (e) => {
    this.setState({
      currentNumber: e.target.value,
      isValidNumber: /^([0-9]|#|\*)+$/.test(
        e.target.value.replace(/[-()\s]/g, "")
      ),
    });
  };

  // Handle muting
  handleToggleMute = () => {
    var muted = !this.state.muted;

    this.setState({ muted: muted });
    Device.activeConnection().mute(muted);
  };

  // Make an outbound call with the current number,
  // or hang up the current call
  handleToggleCall = () => {
    if (!this.state.onPhone) {
      this.setState({
        muted: false,
        onPhone: true,
      });
      // make outbound call with current number
      var n =
        "+" +
        this.state.countryCode +
        this.state.currentNumber.replace(/\D/g, "");
      Device.connect({ number: n });

      this.setState({ log: "Calling " + n });
    } else {
      // hang up call in progress
      Device.disconnectAll();
    }
  };

  render() {
    var self = this;

    return (
      <>
        <article className="dialer__contents-container">
          <section className="dialer__contents-one">
            <h1 className="dialer__heading"> How to use this phone</h1>
            <p className="dialer__text">
              <b>1)</b> Select the country you wish to call by clicking on it's
              name.
            </p>
            <p className="dialer__text">
              {" "}
              This will ensure that the phone adds the correct{" "}
              <b>country code</b> to the number you dial.
            </p>
            <p className="dialer__text">
              {" "}
              *Country codes determine the country of a phone number. For
              example,
              <b>+1 is the country code of USA</b>.
            </p>
            <p className="dialer__text">
              <b>2)</b> Type or paste the number you want to call in the white
              field below.
            </p>
            <p className="dialer__text">
              <b>3)</b> Click the <b>green</b> button.
            </p>
            <p className="dialer__text">
              <b>4)</b> Once you've started a call, a mute button & number pad
              will appear. Use these only if you need to.
            </p>
            <p className="dialer__text">
              <b>5)</b> To end a call, click the <b>red</b> button.
            </p>
          </section>
          <section className="dialer__contents-two">
            <div id="dialer">
              <div
                id="dial-form"
                className="input-group input-group-sm form-container"
              >
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

              <div className="controls">
                <CallButton
                  handleOnClick={this.handleToggleCall}
                  disabled={!this.state.isValidNumber}
                  onPhone={this.state.onPhone}
                />

                {this.state.onPhone ? (
                  <MuteButton
                    handleOnClick={this.handleToggleMute}
                    muted={this.state.muted}
                  />
                ) : null}
              </div>

              {this.state.onPhone ? <DTMFTone /> : null}

              <LogBox text={this.state.log} />
            </div>
          </section>
        </article>
      </>
    );
  }
}

export {
  PhoneDialer as default,
  NumberInputText,
  CountrySelectBox,
  LogBox,
  CallButton,
  MuteButton,
  DTMFTone,
};
