import detectBrowser from './helpers/detectBrowser'

const browser = detectBrowser()
let library = { default: () => alert('STICKY SCROLL: BROWSER NOT SUPPORTED') }

if (browser === 'macos-chrome') library = require('./lib/macos/chrome')

export default element => library.default(element)
