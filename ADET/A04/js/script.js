var productsContainer = document.getElementById("productsContainer");
var receiptContainer = document.getElementById("receiptContainer");
var categories = [];
var products = [];
var categoryProducts = [];
var receiptList = [];

// Fetch Data
const getAllCategories = async () => {
  fetch(
    'http://localhost/najilabatistil.github.io/ADET/A06/categories.php'
  )
    .then(response => response.json())
    .then(data => {
      categories = data;
      loadCategories();
    });
}

const getAllProducts = async () => {
  productsContainer.innerHTML = "";

  fetch(
    'http://localhost/najilabatistil.github.io/ADET/A06/products.php'
  )
    .then(response => response.json())
    .then(data => {
      products = data;
      loadAllProducts();
    });
}

const getProducts = async (categoryID) => {
  const categoryData = {
    categoryID: categoryID
  };

  productsContainer.innerHTML = "";

  fetch(
    'http://localhost/najilabatistil.github.io/ADET/A06/products.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  })
    .then(response => response.json())
    .then(data => {
      categoryProducts = data;
      loadProducts(categoryID);
    });
}


// Category Functions
function loadCategories(){
  var categoriesContainer = document.getElementById("categoriesContainer");

  categories.forEach((category) => {
    categoriesContainer.innerHTML += `
      <div class="card category-button p-3" onclick="getProducts('`+ category.categoryID +`'); setActive(this);">
        <img src="img/icons/`+ category.image +`" class="icon-img">
        <h5 class="regular-text mt-1 mb-0">`+ category.name +`</h5>
      </div>
    `;
  });
}

function setActive(clickedButton) {
  var categoryButtons = document.getElementsByClassName("category-button");

  for (var i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].classList.remove("active");
  }

  clickedButton.classList.add("active");
}


// Products Functions
function loadAllProducts() {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    productsContainer.innerHTML += createProductCard(product);
  });
}

function loadProducts(categoryID) {
  productsContainer.innerHTML = "";

  categoryProducts.forEach(product => {
    productsContainer.innerHTML += createProductCard(product);
  });
}


// Create Elements
function createProductCard(product) {
  var status = (product.isAvailable == "true") ? '' : 'unavailable';

  return `
  <div class="col-6 col-md-4 col-lg-3 my-2">
    <div class="card product `+ status +` h-100">
      <img src="img/`+ product.image +`" class="card-img-top" alt="`+ product.name +`">
      <div class="card-body d-flex flex-column text-center">
        <h6 class="card-title regular-text">`+ product.name +`</h6>
        <div class="mt-auto">
        `+ createButtons(product) +`
        <div>
      </div>
    </div>
  </div>
  `
}

function createButtons(product) {
  var buttons = "";

  if (product.isAvailable == "false") {
    buttons = `
      <p class="text-danger">Unavailable.</p>
    `;
  } else if (product.sizes.length != 0) {
    product.sizes.forEach(size => {
      buttons += `
        <button type="button" class="btn btn-dark regular-text h6" onclick="addToReceipt(`+ size.price +`, '`+ product.code + '-' + size.code +`')">
          `+ size.code +`
        </button>
      `;
    });
  } else {
    buttons = `
      <button type="button" class="btn btn-dark regular-text" onclick="addToReceipt('`+ product.price +`', '`+ product.code +`')">
        Add
      </button>
    `;
  }

  return buttons;
}

function createReceiptItem(price, code) {
  var qty = '';
  var totalItem = '';

  for (var i = 0; i < receiptList.length; i++) {
    if (receiptList[i].code == code) {
      qty = receiptList[i].qty;
      totalItem = receiptList[i].price * receiptList[i].qty;
    }
  }

  return `
  <div class="card px-2 py-3 my-1" id="`+ code +`">
    <div class="row d-flex flex-row align-items-center">
      <div class="col-auto">
        <button type="button" class="btn" onclick="removeFromReceipt('`+ code +`')">
          <i class="bi bi-trash3-fill text-danger"></i>
        </button>
      </div>
        
      <div class="col d-flex flex-column p-0">
        <h6 class="heading mb-0">`+ code +`</h6>
        <p class="mb-0" id="`+ code +`Price">`+ totalItem +`.00</p>
      </div>

      <div class="col-auto">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-dark" onclick="subtractQty('`+ code +`')">
            -
          </button>
          
          <input class="form-control p-1" type="text" value="`+ qty +`" id="`+ code +`Qty" readonly>

          <button type="button" class="btn btn-dark" onclick="addQty('`+ code +`')">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}


// Receipt Functions
function addToReceipt(price, code) {
  var itemExist = document.getElementById(code);

  if (itemExist) {
    addQty(code);
  } else {
    showEmpty(false);
    receiptList.push({"code": code, "price": price, "qty": 1});
    receiptContainer.insertAdjacentHTML("beforeend", createReceiptItem(price, code));
    addTotal();
  }
}

function removeFromReceipt(code) {
  for (var i = 0; i < receiptList.length; i++) {
    if (receiptList[i].code == code) {
      receiptList.splice(i, 1);
      addTotal();
    }
  }

  var item = document.getElementById(code);
  item.remove();

  if (receiptList.length == 0) {
    showEmpty(true);
  }
}

function addQty(code) {
  for (var i = 0; i < receiptList.length; i++) {
    if (receiptList[i].code == code) {
      receiptList[i].qty += 1;
      updateQty(code);
      addTotal();
    }
  }
} 

function subtractQty(code) {
  for (var i = 0; i < receiptList.length; i++) {
    if (receiptList[i].code == code) {
      if (receiptList[i].qty > 1) {
        receiptList[i].qty -= 1;
        updateQty(code);
        addTotal();
      } else {
        removeFromReceipt(code);
      }
    }
  }
}

function updateQty(code) {
  var qtyContainer = document.getElementById(code + "Qty");
  var itemPrice = document.getElementById(code + "Price");

  for (var i = 0; i < receiptList.length; i++) {
    if (receiptList[i].code == code) {
      qtyContainer.value = receiptList[i].qty;
      itemPrice.innerHTML = (receiptList[i].price * receiptList[i].qty) + ".00";
    }
  }
}

function addTotal() {
  var total = 0;
  var totalContainer = document.getElementById("totalContainer");

  for (var i = 0; i < receiptList.length; i++) {
    total += (receiptList[i].price * receiptList[i].qty);
  }

  totalContainer.innerHTML = total.toFixed(2);
}

function showEmpty(hasNoItems) {
  var emptyMessage = document.getElementById("emptyMessage");
  emptyMessage.style.display = (hasNoItems) ? "block" : "none";
}

getAllCategories();
getAllProducts();
showEmpty(true);