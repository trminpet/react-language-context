# react-language-context

  

> Simple library to support multilingualism in react applications using react context.

  

[![NPM](https://img.shields.io/npm/v/react-language-context.svg)](https://www.npmjs.com/package/react-language-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

  

## Install
```bash
npm install --save react-language-context
```
## Info
Library is using react [context](https://reactjs.org/docs/context.html) for keeping language information in application.

## Get started

 1. Install this package
 2. See section **LanguageProvider**
 3. See section **LanguageConsumer**
 4. You should be able to use this library :)

## Components
This library contains three components. `LanguageProvider`, `LanguageConsumer` and `LanguageContext`. Mostly you need to use **LanguageProvider** and **LanguageConsumer** for multilang support. 

#### LanguageProvider
Component LanguageProvider should be placed in "app or top" component - component where you will keep language settings. State of the top component should be expanded with following - lang and defaultLang. This state property could be simply changed with setState function. It is up to you how you implement the language change.

|PROPS           |TYPE                           |INFO                         |
|----------------|-------------------------------|-----------------------------|
|lang                  |`string`             | current language of application - "es"|
|defaultLang           |`string`             |default language of application - "en" |
|useDefaultLangInstead |`bool`               |`true` default language is used when translation is missing for current language, `false` nothing is shown if translation is missing for current language|

*Example of usage*
```jsx
export  default  class  App  extends  Component {
 
 constructor(props) {
  super(props);
  this.state = { lang:  "es", defaultLang:  "en" };
  this._changeLang = this._changeLang.bind(this);
 }
 
 _changeLang(lang) {
  this.setState({ lang });
 }

 render() {
  return (
   <div>
    <LanguageProvider
     lang={this.state.lang}
     defaultLang={this.state.defaultLang}
     useDefaultLangInstead ={false}
     >
     //example components
     <Header/>
     <Body/>
     <Footer/>  
   </LanguageProvider>
  </div>);
 }
}
```

#### LanguageConsumer
Component LanguageConsumer is used as the shown text. 
|PROPS           |TYPE                           |INFO                         |
|----------------|-------------------------------|-----------------------------|
|text            |`object`                       | simple object with keys - values, where key is language and value is text itself|
|replacer            |`object`                   | simple object with keys - values, where key is regex which you want to replace with value |

*Example of prop text*
```jsx
{
 en:"Hello world!",
 es:"Hola Mundo!",
 cs:"Ahoj světe!"
}
```

*Example of prop replacer*
```jsx
{
 en:"Hello $1",
 es:"Hola $1",
 cs:"Ahoj $1"
}
```

*Example of usage*
```jsx
const Texts = {
 header:{
  en:"Header in english",
  es:"Encabezado en español",
  cs:"Hlavička v češtině"
 },
 body:{
  en:"Body in english",
  es:"Contenido en español",
  cs:"Obsah v češtině"
 }
}

<h1>
<LanguageConsumer  text={Texts.header}  />
</h1>

<p>
<LanguageConsumer  text={Texts.body}  />
</p>

<h2>
<LanguageConsumer text={Texts.dynamicHeader}  replacer={{$1: this.state.name}}/>
</h2>
```

#### LanguageContext
LanguageContext is used in both components LanguageProvider and LanguageConsumer. Most of the time you don't need to use it directly. But sometimes you can have some specific situation. So you can use it as react context and from it you can get 'Consumer'.  With this you are able to do pretty much everything. This should be used for components which require string and not component inside them. For example - `<option>` tag. In context you will find properties from Provider - lang, defaultLang, useDefaultLangInstead.

*Example of usage*
 ```jsx
<select>
 <LanguageContext.Consumer>
  {({ lang, defaultLang, useDefaultLangInstead }) =>
   Object.keys(Texts.select).map(key  => (
    <option  key={key}  value={key}>{Texts.select[key]}</option>
  ))}
 </LanguageContext.Consumer>
</select>
```

## Example
```jsx
import  React, { Component } from  "react";
import { LanguageProvider, LanguageConsumer,LanguageContext } from  "react-language-context";
import { Texts } from  "./texts";

export  default  class  App  extends  Component {
 
 constructor(props) {
  super(props);
  this.state = { lang: "en", defaultLang: "en", name: "Jar Jar" };
  this._handleChange = this._handleChange.bind(this);
  this._handleChangeName = this._handleChangeName.bind(this);
 }
 
 _handleChange(event) {
  this.setState({ lang:  event.target.value });
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
    <select  value={this.state.lang}  onChange={this._handleChange}>
     <LanguageContext.Consumer>
      {({ lang }) =>
      Object.keys(Texts.select[lang]).map(key  => (
       <option  key={lang+key}  value={key}>{Texts.select[lang][key]}</option>
      ))}
     </LanguageContext.Consumer>
    </select>
    <h1>
     <LanguageConsumer  text={Texts.header}  />
    </h1>
    <label>
     Name: <input type="text" value={this.state.name} onChange={this._handleChangeName} />
    </label>
     <h2>
      <LanguageConsumer text={Texts.dynamicHeader}  replacer={{$1: this.state.name}}/>
     </h2>
    <p>
     <LanguageConsumer  text={Texts.body}  />
    </p>
   </LanguageProvider>
  </div>
  );
  }
}

```
## FAQ

 1. I see [object Object] instead of valid text -> please see section **LanguageContext**

## Release notes
01.01.2020 - 1.0.0 - first release
04.01.2020 - 1.1.0 - adds props `replacer` for component **LanguageConsumer**. This prop is used for dynamic translations. See **LanguageConsumer** for more info.


  

## License

  

MIT © [](https://github.com/)