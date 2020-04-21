import React, { useState, useEffect } from "react";

export default function CurrencyDropDown() {
    const [currency, setCurrency] = useState('CHF');
    // const listItems = currencies.map((item) => <option key={item} value={item}>{item}</option>);

    
    const handleCurrencyChange = (event) => {
        const value = event.target.value;
        setCurrency(value);
        console.log('current currency', value);
    }

    const handleCurrencySubmit = (event) => {
        event.preventDefault();
    }
    
    useEffect(() => {
        document.title = `Price in${currency}`;
    });


    return (
        <form onSubmit={handleCurrencySubmit}>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value='CHF'>CHF</option>
                <option value='EUR'>EUR</option>
                <option value='USD'>USD</option>
            </select>
        </form>
    );
  }