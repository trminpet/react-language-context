import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LanguageContext } from './language-context'

export default class LanguageConsumer extends Component {
  static propTypes = {
    text: PropTypes.object
  };

  _getText(lang, defaultLang, useDefaultLangInstead) {
    const { text } = this.props
    return text[lang] || (useDefaultLangInstead ? text[defaultLang] : '')
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {({ lang, defaultLang, useDefaultLangInstead }) =>
          this._getText(lang, defaultLang, useDefaultLangInstead)
        }
      </LanguageContext.Consumer>
    )
  }
}
