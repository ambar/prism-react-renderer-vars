# prism-react-renderer-vars

Use Prism themes with CSS vars to avoid flashing on the initial page load.

## Install

```
npm install prism-react-renderer-vars
```

## Demo

Use in Docusaurus:

```js
const {light, dark} = require('prism-react-renderer-vars/themes/vs')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  themeConfig: {
    prism: {
      theme: light,
      darkTheme: dark,
    },
  },
  clientModules: [
    require.resolve('prism-react-renderer-vars/themes/vs.css')
  ],
}
```
