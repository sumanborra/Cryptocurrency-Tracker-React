// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isSpinner: true}
  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoList: updatedData, isSpinner: false})
  }

  render() {
    const {cryptoList, isSpinner} = this.state
    return isSpinner ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="background-list-crypto-currency-container">
        <h1 className="heading-Cryptocurrency-tracker-text">
          Cryptocurrency Tracker
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image-cryptocurreny"
        />
        <div className="container-crypto-list-currency">
          <div className="table-header">
            <p className="coin-type-text">Coin Type</p>
            <div className="usd-euro-container">
              <p className="coin-type-text euro-margin">USD</p>
              <p className="coin-type-text euro-margin">EURO</p>
            </div>
          </div>
          <ul className="list-container">
            {cryptoList.map(each => (
              <CryptocurrencyItem cryptoList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
