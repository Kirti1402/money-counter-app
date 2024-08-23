const currencies = {
  USD: { name: "US Dollar", symbol: "$" },
  EUR: { name: "Euro", symbol: "€" },
  JPY: { name: "Japanese Yen", symbol: "¥" },
  KRW: { name: "South Korean Won", symbol: "₩" },
  INR: { name: "Indian Rupee", symbol: "₹" },
  THB: { name: "Thai Baht", symbol: "฿" },
  IDR: { name: "Indonesian Rupiah", symbol: "Rp" },
  MYR: { name: "Malaysian Ringgit", symbol: "RM" },
  KWD: { name: "Kuwaiti Dinar", symbol: "د.ك" },
  VND: { name: "Vietnamese Dong", symbol: "₫" },
};

let inputCurrency = document.getElementById("input-currency");
let dynamicDropdown = document.getElementById("dynamic-dropdown");
let dynamicDropdownUl = document.getElementById("dynamic-dropdown-ul");
let cardContainer = document.getElementsByClassName("card-container");

let setCurrency;
let setSymbol;

const currenciesInputHandler = (event) => {
  dynamicDropdownUl.innerHTML = "";
  event.preventDefault();
  let dynamicDropdownList = [];
  let currencyInputValue = event.target.value.toLocaleLowerCase();
  const isEmptyString = /^$/;
  dynamicDropdown.style.display = "block";
  if (/^\s*$/.test(currencyInputValue)) {
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
    const li = document.createElement("li");
    li.classList.add("dropdown-item");
    const div1 = document.createElement("div");
    div1.classList.add("dropdown-item-div1");
    div1.textContent = "Curriency not found";
    li.appendChild(div1);
    dynamicDropdownUl.appendChild(li);
  } else {
    dynamicDropdownList.forEach((item, index) => {
      Object.keys(item).forEach((key) => {
        const currency = item[key];
        const li = document.createElement("li");
        li.classList.add("dropdown-item");

        const div1 = document.createElement("div");
        div1.classList.add("dropdown-item-div1");

        const span1 = document.createElement("span");
        span1.classList.add("span1");
        span1.textContent = key;

        const span2 = document.createElement("span");
        span2.classList.add("span2");
        span2.textContent = currency.symbol;

        div1.appendChild(span1);
        div1.appendChild(span2);

        const div2 = document.createElement("div");
        div2.classList.add("dropdown-item-div2");
        div2.textContent = currency.name;
        // div2.style.alignSelf = "flex-end";

        li.appendChild(div1);
        li.appendChild(div2);
        dynamicDropdownUl.appendChild(li);
        li.addEventListener("click", () => {
          selectItem(li);
        });
      });
    });
  }

  dynamicDropdown.appendChild(dynamicDropdownUl);
};

const selectItem = (li) => {
  const setCurrency = li.querySelector(".span1").textContent;
  const setSymbol = li.querySelector(".span2").textContent;
  inputCurrency.value = setCurrency + setSymbol;
  dynamicDropdown.style.display = "none";
};

inputCurrency.addEventListener("input", currenciesInputHandler);
