import { detect } from 'detect-browser'

function detectBroswer() {
  const information = detect()

  const getOS = () => {
    const { os } = information
    switch (os) {
      case 'Mac OS':
        return 'macos'
      default:
        return undefined
    }
  }

  const getBrowser = () => {
    const { name: browser } = information
    switch (browser) {
      case 'chrome':
        return 'chrome'
      default:
        return undefined
    }
  }

  const init = () => {
    const os = getOS()
    const browser = getBrowser()
    if (browser && os) {
      console.log(`Browser: ${os}-${browser}`)
      return `${os}-${browser}`
    }
  }

  if (information && information.os) {
    return init()
  }
}

export default detectBroswer
