// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.fetchDetails()
  }

  fetchDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  renderContainer = () => {
    const {currencyData} = this.state
    return (
      <div className="crypto-currency-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="coins-card-container">
          <div className="header">
            <p className="heading">Coin Type</p>
            <div className="currency-names-container">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </div>
          <ul className="currency-data-container">
            {currencyData.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="crypto-currency-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderContainer()
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
