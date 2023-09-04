// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="currency-item-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
