import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_ByRhu87SnWUEdXvYRjdAIPwsowEn71hOn1nzgJgM";



function Currency() {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState();

  const exchange = async () => {


    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    
  }

  return (
    <div className='currency-div'>
      <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: 'white', width: '100%', textAlign: 'center', borderRadius: '10px' }}>
        <h3 >EXCHANGE RATE APP</h3>
      </div>
      <div style={{ margin: '25px' }}>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value)
          }}
          type="number"
          className='amount' />
        <select onChange={(e) => {
          setFromCurrency(e.target.value)
        }} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '12px', marginBottom: '-8px' }} />

        <select
          onChange={(e) => {
            setToCurrency(e.target.value)
          }}
          className='to-currency-option'>
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input value={result} onChange={(e) => setResult} type="number" className='result' />

      </div>
      <div>
        <button
          onClick={exchange}
          className='exchange-button'>Convert</button>
      </div>
    </div>
  )
}

export default Currency