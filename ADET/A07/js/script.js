var fromSelect = document.getElementById("fromSelect");
var toSelect = document.getElementById("toSelect");
var fromInput = document.getElementById("fromAmount");
var toInput = document.getElementById("toAmount");
var conversionRate = document.getElementById("conversionRate");
var lastUpdated = document.getElementById("lastUpdated");
var loadingSpinner = document.getElementById("loadingSpinner");

// Fetch and load currency dropdowns
fetch(
  'https://api.frankfurter.dev/v1/currencies'
)
  .then(response => response.json())
  .then(currency => {
    loadCurrencies(currency, 'fromSelect');
    loadCurrencies(currency, 'toSelect');
    getParams();
  });

function loadCurrencies(currency, selectId) {
  var select = document.getElementById(selectId);

  for (const key in currency) {
    var option = document.createElement('option');
    option.value = key;
    option.innerHTML = `${key} - ${currency[key]}`;
    select.appendChild(option);
  }
}

// Perform conversion
function convert() {
  var fromCurrency = fromSelect.value;
  var toCurrency = toSelect.value;
  var fromAmount = fromInput.value;

  if (!fromCurrency || !toCurrency) {
    alert("Please select both currencies.");
    return;
  }

  if (fromCurrency == toCurrency) {
    alert("Please select different currencies.");
    return;
  }

  if (!fromAmount) {
    alert("Please input an amount.");
    return;
  }

  conversionRate.style.display = "none";
  loadingSpinner.style.display = "block";

  fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .then(currency => {
      var convertedAmount = (fromAmount * currency.rates[toCurrency]).toFixed(3);
      toAmount.value = convertedAmount;

      conversionRate.innerHTML = `1 ${fromCurrency} = ${currency.rates[toCurrency]} ${toCurrency}`;
      conversionRate.style.display = "block";

      lastUpdated.innerHTML = `Last updated ${currency.date} 16:00 CET`;
      lastUpdated.style.display = "block";

      loadingSpinner.style.display = "none";
    })
    .catch((error) => {
      console.log(error)
    });
}

function swapCurrencies() {
  var currentFrom = fromSelect.value;
  var currentTo = toSelect.value;
  fromSelect.value = currentTo;
  toSelect.value = currentFrom;

  convert();
}

// Set selected currencies
function setConversion(fromCurrency, toCurrency) {
  if (fromCurrency && toCurrency) {
    fromSelect.value = fromCurrency;
    toSelect.value = toCurrency;
    fromInput.value = 1;
    convert();
  } else {
    fromSelect.value = "";
    toSelect.value = "";
    fromInput.value = 1;
  }
}

function getParams() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  var from = null;
  var to = null;

  if (urlParams.has("from") && urlParams.has("to")) {
    from = urlParams.get("from");
    to = urlParams.get("to");
  }

  setConversion(from, to);
}

// Event Listeners
fromSelect.addEventListener('change', function () {
  if (fromSelect.value && toSelect.value) {
    convert();
  }
});

toSelect.addEventListener('change', function () {
  if (fromSelect.value && toSelect.value) {
    convert();
  }
});

fromInput.addEventListener('input', function () {
  if (fromSelect.value && toSelect.value) {
    convert();
  }
});

fromInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    convert();
  }
});

fetchCurrencies();