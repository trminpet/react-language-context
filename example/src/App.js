import React, { Component } from "react";

import {
  LanguageProvider,
  LanguageConsumer,
  LanguageContext
} from "react-language-context";

import { Texts } from "./texts";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: "en", defaultLang: "en", name: "Jar Jar" };

    this._handleChange = this._handleChange.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
  }

  _handleChange(event) {
    this.setState({ lang: event.target.value });
  }

  _handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <LanguageProvider
          lang={this.state.lang}
          defaultLang={this.state.defaultLang}
        >
          <select value={this.state.lang} onChange={this._handleChange}>
            <LanguageContext.Consumer>
              {({ lang }) =>
                Object.keys(Texts.select[lang]).map(key => (
                  <option key={lang+key} value={key}>{Texts.select[lang][key]}</option>
                ))
              }
            </LanguageContext.Consumer>
          </select>

          <h1>
            <LanguageConsumer text={Texts.header} />
          </h1>
       
          <label>
          Name:
          <input type="text" value={this.state.name} onChange={this._handleChangeName} />
        </label>
        <h2>
          <LanguageConsumer text={Texts.dynamicHeader}  replacer={{$1: this.state.name}}/>
          </h2>
          <p>
            <LanguageConsumer text={Texts.body} />
          </p>
        </LanguageProvider>
      </div>
    );
  }
}
