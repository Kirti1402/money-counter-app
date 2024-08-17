const currencies = {
    "USD": { name: "US Dollar", symbol: "$" },
    "EUR": { name: "Euro", symbol: "€" },
    "JPY": { name: "Japanese Yen", symbol: "¥" },
    "GBP": { name: "British Pound Sterling", symbol: "£" },
    "AUD": { name: "Australian Dollar", symbol: "$" },
    "CAD": { name: "Canadian Dollar", symbol: "$" },
    "CHF": { name: "Swiss Franc", symbol: "CHF" },
    "CNY": { name: "Chinese Yuan", symbol: "¥" },
    "SEK": { name: "Swedish Krona", symbol: "kr" },
    "NZD": { name: "New Zealand Dollar", symbol: "$" },
    "MXN": { name: "Mexican Peso", symbol: "$" },
    "SGD": { name: "Singapore Dollar", symbol: "$" },
    "HKD": { name: "Hong Kong Dollar", symbol: "$" },
    "NOK": { name: "Norwegian Krone", symbol: "kr" },
    "KRW": { name: "South Korean Won", symbol: "₩" },
    "TRY": { name: "Turkish Lira", symbol: "₺" },
    "RUB": { name: "Russian Ruble", symbol: "₽" },
    "INR": { name: "Indian Rupee", symbol: "₹" },
    "BRL": { name: "Brazilian Real", symbol: "R$" },
    "ZAR": { name: "South African Rand", symbol: "R" },
    "DKK": { name: "Danish Krone", symbol: "kr" },
    "PLN": { name: "Polish Zloty", symbol: "zł" },
    "THB": { name: "Thai Baht", symbol: "฿" },
    "IDR": { name: "Indonesian Rupiah", symbol: "Rp" },
    "HUF": { name: "Hungarian Forint", symbol: "Ft" },
    "CZK": { name: "Czech Koruna", symbol: "Kč" },
    "ILS": { name: "Israeli New Shekel", symbol: "₪" },
    "CLP": { name: "Chilean Peso", symbol: "$" },
    "PHP": { name: "Philippine Peso", symbol: "₱" },
    "AED": { name: "United Arab Emirates Dirham", symbol: "د.إ" },
    "COP": { name: "Colombian Peso", symbol: "$" },
    "SAR": { name: "Saudi Riyal", symbol: "ر.س" },
    "MYR": { name: "Malaysian Ringgit", symbol: "RM" },
    "RON": { name: "Romanian Leu", symbol: "lei" },
    "RSD": { name: "Serbian Dinar", symbol: "дин" },
    "ARS": { name: "Argentine Peso", symbol: "$" },
    "UAH": { name: "Ukrainian Hryvnia", symbol: "₴" },
    "BHD": { name: "Bahraini Dinar", symbol: "د.ب" },
    "DOP": { name: "Dominican Peso", symbol: "$" },
    "JMD": { name: "Jamaican Dollar", symbol: "$" },
    "KWD": { name: "Kuwaiti Dinar", symbol: "د.ك" },
    "MUR": { name: "Mauritian Rupee", symbol: "₨" },
    "PEN": { name: "Peruvian Nuevo Sol", symbol: "S/." },
    "QAR": { name: "Qatari Riyal", symbol: "ر.ق" },
    "TZS": { name: "Tanzanian Shilling", symbol: "Sh" },
    "VND": { name: "Vietnamese Dong", symbol: "₫" },
    "XOF": { name: "West African CFA Franc", symbol: "Fr" },
    "XAF": { name: "Central African CFA Franc", symbol: "Fr" }
};

let inputCurrency = document.getElementById("input-currency");

const currenciesInputHandler = (event) =>{
    event.preventDefault();
    let currencyInputValue = event.target.value;
    let errorMessage = (/^\s*$/.test(currencyInputValue))? "Please Enter Currency" :null
    if(errorMessage == null){
        Object.keys(currencies).forEach(key => {
            if(key.includes(currencyInputValue) || currencies[key].symbol.includes(currencyInputValue)){
                console.log(`Key: ${key}, Name: ${currencies[key].name}, Symbol: ${currencies[key].symbol}`);
            }
            
        });
    }
    

}

inputCurrency.addEventListener("input", currenciesInputHandler);
