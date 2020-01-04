import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LanguageContext } from './language-context'

export default class LanguageConsumer extends Component {
  static propTypes = {
    text: PropTypes.object,
    replacer: PropTypes.object
  };

  static defaultProps = {
    replacer: {}
  };

  _getText(lang, defaultLang, useDefaultLangInstead) {
    const { text } = this.props
    return text[lang] || (useDefaultLangInstead ? text[defaultLang] : '')
  }

  _getReplacedText(lang, defaultLang, useDefaultLangInstead) {
    const { replacer } = this.props
    let text = this._getText(lang, defaultLang, useDefaultLangInstead)

    Object.keys(replacer).forEach((key) => {
      text = text.replace(key.toString(), replacer[key])
    })

    return text
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {({ lang, defaultLang, useDefaultLangInstead }) =>
          this._getReplacedText(lang, defaultLang, useDefaultLangInstead)
        }
      </LanguageContext.Consumer>
    );
  }
}
