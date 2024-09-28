import { useState } from "react";
import "../css/currency.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_dNiKiYlcJPjDfqS5RH50rOPLAC9Aj3ORkDFwUlxU";

  const exChange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const change = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(change);
  };
  return (
    <div className="currency-div">
      <div className="logo">
        <h3>Döviz Kuru Uygulaması</h3>
      </div>
      <div className="main">
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowAltCircleRight className="right-arrow" />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input value={result} type="number" className="result" />
      </div>
      <div className="change">
        <button onClick={exChange}>Çevir</button>
      </div>
    </div>
  );
};

export default Currency;
