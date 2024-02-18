// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoList} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = cryptoList
  return (
    <li className="list-item">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo-image" />
        <p className="currencyName-text">{currencyName}</p>
      </div>
      <div className="logo-name-container">
        <p className="currencyName-text currency-margin">{usdValue}</p>
        <p className="currencyName-text currency-margin">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
