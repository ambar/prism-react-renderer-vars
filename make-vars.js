const fs = require('fs')
const JSON5 = require('json5')
const {themes} = require('prism-react-renderer')

const colorProps = [
  //
  'color',
  'backgroundColor',
]

const clone = (obj) => JSON.parse(JSON.stringify(obj))

const makePrismVarProps = (theme) => {
  const prefix = `xPrism`
  const newTheme = clone(theme)
  const {plain, styles} = newTheme
  const varProps = {}
  colorProps.forEach((prop) => {
    if (plain[prop]) {
      const varProp = `--${prefix}-${prop}`
      varProps[varProp] = plain[prop]
      plain[prop] = `var(${varProp}, ${plain[prop]})`
    }
  })
  styles.forEach(({types, languages, style}) => {
    // types/languages 含义是多个共享一个颜色，因此只需要随意取一个即可
    const infix = [types[0], languages?.[0]].filter(Boolean).join('-')
    colorProps.forEach((prop) => {
      if (style[prop]) {
        const varProp = `--${prefix}-${infix}-${prop}`
        varProps[varProp] = style[prop]
        style[prop] = `var(${varProp}, ${style[prop]})`
      }
    })
  })
  return [newTheme, varProps]
}

const makePrismThemePair = (lightTheme, darkTheme) => {
  const [lightTheme2, lightVarProps] = makePrismVarProps(lightTheme)
  const [darkTheme2, darkVarProps] = makePrismVarProps(darkTheme)
  const css = `
:root {
${Object.entries(lightVarProps)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join('\n')}
}

:root[data-theme="dark"] {
${Object.entries(darkVarProps)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join('\n')}
}
`.trim()
  return [lightTheme2, darkTheme2, css]
}

const configs = [
  ['vs', themes.vsLight, themes.vsDark],
  ['duotone', themes.duotoneLight, themes.duotoneDark],
  ['jettwave', themes.jettwaveLight, themes.jettwaveDark],
  ['nightOwl', themes.nightOwlLight, themes.nightOwl],
]

for (const [name, lightTheme, darkTheme] of configs) {
  console.info(`generating ${name} theme`)
  const [light, dark, css] = makePrismThemePair(lightTheme, darkTheme)
  fs.writeFileSync(
    `themes/${name}.js`,
    `
exports.light = ${JSON5.stringify(light, null, 2)}

exports.dark = ${JSON5.stringify(dark, null, 2)}
`.trim()
  )
  fs.writeFileSync(`themes/${name}.css`, css)
}
