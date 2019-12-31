# react-language-context

> Library for language support

[![NPM](https://img.shields.io/npm/v/react-language-context.svg)](https://www.npmjs.com/package/react-language-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-language-context
```

## Usage
Component LanguageProvider should be placed in "app or top" component - component where you will keep language settings. Top component should expand state with following - lang. This state will be simple changed be setState function. Component LanguageConsumer is for displaying the text in defined languages.


```jsx
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
    this.state = { lang: "en", defaultLang: "en" };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({ lang: event.target.value });
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
          <p>
            <LanguageConsumer text={Texts.body} />
          </p>
        </LanguageProvider>
      </div>
    );
  }
}
```

## License

MIT © [](https://github.com/)
