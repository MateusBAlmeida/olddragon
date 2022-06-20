import App from 'next/app'
import './styles/body.css'
const theme = {
  colors: {
    primary: '#000',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <Component {...pageProps} />
    )
  }
}