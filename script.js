const currencies = {
  USD: { name: "US Dollar", symbol: "$" },
  EUR: { name: "Euro", symbol: "€" },
  JPY: { name: "Japanese Yen", symbol: "¥" },
  GBP: { name: "British Pound Sterling", symbol: "£" },
  AUD: { name: "Australian Dollar", symbol: "$" },
  CAD: { name: "Canadian Dollar", symbol: "$" },
  CHF: { name: "Swiss Franc", symbol: "CHF" },
  CNY: { name: "Chinese Yuan", symbol: "¥" },
  SEK: { name: "Swedish Krona", symbol: "kr" },
  NZD: { name: "New Zealand Dollar", symbol: "$" },
  MXN: { name: "Mexican Peso", symbol: "$" },
  SGD: { name: "Singapore Dollar", symbol: "$" },
  HKD: { name: "Hong Kong Dollar", symbol: "$" },
  NOK: { name: "Norwegian Krone", symbol: "kr" },
  KRW: { name: "South Korean Won", symbol: "₩" },
  TRY: { name: "Turkish Lira", symbol: "₺" },
  RUB: { name: "Russian Ruble", symbol: "₽" },
  INR: { name: "Indian Rupee", symbol: "₹" },
  BRL: { name: "Brazilian Real", symbol: "R$" },
  ZAR: { name: "South African Rand", symbol: "R" },
  DKK: { name: "Danish Krone", symbol: "kr" },
  PLN: { name: "Polish Zloty", symbol: "zł" },
  THB: { name: "Thai Baht", symbol: "฿" },
  IDR: { name: "Indonesian Rupiah", symbol: "Rp" },
  HUF: { name: "Hungarian Forint", symbol: "Ft" },
  CZK: { name: "Czech Koruna", symbol: "Kč" },
  ILS: { name: "Israeli New Shekel", symbol: "₪" },
  CLP: { name: "Chilean Peso", symbol: "$" },
  PHP: { name: "Philippine Peso", symbol: "₱" },
  AED: { name: "United Arab Emirates Dirham", symbol: "د.إ" },
  COP: { name: "Colombian Peso", symbol: "$" },
  SAR: { name: "Saudi Riyal", symbol: "ر.س" },
  MYR: { name: "Malaysian Ringgit", symbol: "RM" },
  RON: { name: "Romanian Leu", symbol: "lei" },
  RSD: { name: "Serbian Dinar", symbol: "дин" },
  ARS: { name: "Argentine Peso", symbol: "$" },
  UAH: { name: "Ukrainian Hryvnia", symbol: "₴" },
  BHD: { name: "Bahraini Dinar", symbol: "د.ب" },
  DOP: { name: "Dominican Peso", symbol: "$" },
  JMD: { name: "Jamaican Dollar", symbol: "$" },
  KWD: { name: "Kuwaiti Dinar", symbol: "د.ك" },
  MUR: { name: "Mauritian Rupee", symbol: "₨" },
  PEN: { name: "Peruvian Nuevo Sol", symbol: "S/." },
  QAR: { name: "Qatari Riyal", symbol: "ر.ق" },
  TZS: { name: "Tanzanian Shilling", symbol: "Sh" },
  VND: { name: "Vietnamese Dong", symbol: "₫" },
  XOF: { name: "West African CFA Franc", symbol: "Fr" },
  XAF: { name: "Central African CFA Franc", symbol: "Fr" },
};

let inputCurrency = document.getElementById("input-currency");
let dynamicDropdown = document.getElementById("dynamic-dropdown");
let dynamicDropdownUl = document.getElementById("dynamic-dropdown-ul")

const currenciesInputHandler = (event) => {
  dynamicDropdownUl.innerHTML = '';
  event.preventDefault();
  let dynamicDropdownList = [];
  let currencyInputValue = event.target.value.toLocaleLowerCase();
  const isEmptyString = /^$/;
  console.log(dynamicDropdown.style);
  dynamicDropdown.style.display = "block";
  if (/^\s*$/.test(currencyInputValue)) {
    console.log("Please Enter Currency");
    dynamicDropdownHandler(dynamicDropdownList);
  } else {
    Object.keys(currencies).forEach((key) => {
      if (
        key.toLocaleLowerCase().includes(currencyInputValue) ||
        currencies[key].symbol.includes(currencyInputValue) ||
        currencies[key].name.toLocaleLowerCase().includes(currencyInputValue)
      ) {
        // [key]:currencies[key] is not valid inside an array literal. The spread operator (...) is used to expand or include elements from an existing array or object,
        // but it doesn't work with key-value pairs directly in this context.
        // dynamicDropdownList = [...dynamicDropdownList, [key]:currencies[key]];
        dynamicDropdownList.push({ [key]: currencies[key] });

      }
    });
  }

  if (isEmptyString.test(currencyInputValue)) {
    dynamicDropdown.style.display = "";
  }

  dynamicDropdownHandler(dynamicDropdownList);
};

const dynamicDropdownHandler = (dynamicDropdownList) => {

  if (dynamicDropdownList.length === 0) {
    console.log("no currencies found");
    const li = document.createElement("li");
      li.classList.add("dropdown-item");
      const div1 = document.createElement("div");
      div1.classList.add("dropdown-item-div1");
      div1.textContent = "Curriency not found";
      li.appendChild(div1);
      dynamicDropdownUl.appendChild(li);
    
  }else{
    dynamicDropdownList.forEach((item, index) => {
    

      console.log("item nd index",item, index);
      Object.keys(item).forEach((key) => {
  
        console.log("inside object keys",key)
        const currency = item[key];
  
        console.log(currency.name);
  
  
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
  
        const div1 = document.createElement("div");
        div1.classList.add("dropdown-item-div1");
        div1.textContent = key + " " + currency.symbol;
  
        const div2 = document.createElement("div");
        div2.classList.add("dropdown-item-div2");
        div2.textContent = currency.name;
        // div2.style.alignSelf = "flex-end";
  
        li.appendChild(div1);
        li.appendChild(div2);
        dynamicDropdownUl.appendChild(li);
  
      });
    });
  }

  dynamicDropdown.appendChild(dynamicDropdownUl);
  console.log("insideDynamicDropdownhandler", dynamicDropdownList);
};

inputCurrency.addEventListener("input", currenciesInputHandler);

