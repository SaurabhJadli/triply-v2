import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../components/Header';

export default function CurrencyConverter() {

  const [currFirst, setCurrFirst] = useState('INR');
  const [currSecond, setCurrSecond] = useState('KRW');
  const [worthFirst, setWorthFirst] = useState(1);
  const [worthSecond, setWorthSecond] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(null);

  
  const swapCurrencies = () => {
    setCurrFirst(currSecond);
    setCurrSecond(currFirst);
    setWorthFirst(worthSecond);
  };

  useEffect(() => {
  const convert = async () => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/16947c81da979880bacde4f5/latest/${currFirst}`);
    const data = await response.json();
    const rate = data.conversion_rates[currSecond];
    setExchangeRate(rate);
    setWorthSecond((worthFirst * rate).toFixed(5));
  };

  
    convert();
  }, [currFirst, currSecond, worthFirst]);


  return (
	<div>
		<Header />
    <div className='position-absolute top-50 start-50 translate-middle'>
      <h1>Currency Converter</h1><br />
      <div className="main-box">
        <div className="second-box">
          <div className='curr-conv'>
            <div className="currency">
              <select className="form-select m-2 curr-select"
                id="curr-first"
                value={currFirst}
                onChange={(e) => setCurrFirst(e.target.value)}
              >
                {/* Currency options */}
                <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
              </select>
              <input className="form-control" 
                type="number"
                id="worth-first"
                value={worthFirst}
                onChange={(e) => setWorthFirst(e.target.value)}
              />
            </div>

            <div className="swap-grid">
             
              <button id="swap-curr" onClick={swapCurrencies} type="button" className="btn btn-success m-md-4 rounded-circle border border-success">
              Swap
              </button>
            </div>

            <div className="currency">
              <select className="form-select m-2 curr-select"
                id="curr-second"
                value={currSecond}
                onChange={(e) => setCurrSecond(e.target.value)}
              >
                {/* Currency options */}
                <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
              </select>

              <label>Converted Amount: </label>
              <input className="form-control" 
                type="number"
                id="worth-second"
                value={worthSecond}
                readOnly
              />

<div className="exchange-rate-container">
                <div className="exchange-rate text-success">
                  {exchangeRate && `1 ${currFirst} = ${exchangeRate} ${currSecond}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

	</div>
  );
};

