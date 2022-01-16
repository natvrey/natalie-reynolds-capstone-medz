import React from "react";
import $ from "jquery";
import { v4 as uuid } from "uuid";
import "./dialer.scss";
import { Device, PreflightTest } from "twilio-client";
// import { Device } from "@twilio/voice-sdk";

// import { w3cwebsocket as W3CWebSocket } from "websocket";

// const client = new W3CWebSocket("ws:localhost:3000/ws");
// const client = new W3CWebSocket("wss://275e-64-180-38-199.ngrok.io/ws");

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
        <li key={uuid()}>
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
      <div className="input-group-btn">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          +<span className="country-code">{self.props.countryCode}</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <ul className="dropdown-menu">{CountryOptions}</ul>
      </div>
    );
  }
}

class LogBox extends React.Component {
  render() {
    return (
      <div>
        <div className="log">{this.props.text}</div>
        <p>{this.props.smallText}</p>
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
        <i
          className={
            "fa fa-fw fa-phone " +
            (this.props.onPhone ? "fa-close" : "fa-phone")
          }
        ></i>
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
        <i
          className={
            "fa fa-fw fa-microphone " +
            (this.props.muted ? "fa-microphone-slash" : "fa-microphone")
          }
        ></i>
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

class DialerApp extends React.Component {
  state = {
    muted: false,
    log: "Connecting...",
    onPhone: false,
    countryCode: "1",
    currentNumber: "",
    isValidNumber: false,
    countries: [
      { name: "United States", cc: "1", code: "us" },
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

    $.getJSON("http://localhost:5050/token")

      .done(function (data) {
        Device.setup(data.token);
        console.log("Token", data.token);
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
      <div id="dialer">
        <div id="dial-form" className="input-group input-group-sm">
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
    );
  }
}
// });

export {
  DialerApp as default,
  NumberInputText,
  CountrySelectBox,
  LogBox,
  CallButton,
  MuteButton,
  DTMFTone,
};
