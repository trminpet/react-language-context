import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LanguageContext } from './language-context'

export default class LanguageProvider extends Component {
  static propTypes = {
    lang: PropTypes.string,
    defaultLang: PropTypes.string,
    useDefaultLangInstead: PropTypes.bool,
    children: PropTypes.any
  }

  _getLanguageProperties() {
    const { lang, defaultLang, useDefaultLangInstead } = this.props

    return { lang, defaultLang, useDefaultLangInstead }
  }

  render() {
    const {
      children
    } = this.props

    return (
      <LanguageContext.Provider value={this._getLanguageProperties()}>
        {children}
      </LanguageContext.Provider>
    )
  }
}