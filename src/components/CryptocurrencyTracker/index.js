// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  componentDidMount() {
    this.get
  }
  render() {
    return (
      <div className="background-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
