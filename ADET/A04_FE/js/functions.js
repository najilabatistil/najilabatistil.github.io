var productsContainer = document.getElementById("productsContainer");
var receiptContainer = document.getElementById("receiptContainer");
var receiptList = [];

function loadCategories(){
  var categoriesContainer = document.getElementById("categoriesContainer");

  products.forEach((product, index) => {
    categoriesContainer.innerHTML += `
      <div class="card category-button mx-1 p-3" onclick="loadProducts('`+ index +`'); setActive(this);">
        <img src="img/icons/`+ product.image +`" class="icon-img">
        <h5 class="regular-text mt-1 mb-0">`+ product.category +`</h5>
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

function loadAllProducts() {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    var folder = product.category.toLowerCase();

    product.items.forEach(item => {
      productsContainer.innerHTML += createProductCard(folder, item);
    });
  });
}

function loadProducts(categoryIndex) {
  productsContainer.innerHTML = "";
  var folder = products[categoryIndex].category.toLowerCase();

  products[categoryIndex].items.forEach(item => {
    productsContainer.innerHTML += createProductCard(folder, item);
  });
}

function createProductCard(folder, item) {
  var status = (item.isAvailable) ? '' : 'unavailable';

  return `
  <div class="col-6 col-md-4 col-lg-3 my-2">
    <div class="card product `+ status +` h-100">
      <img src="img/`+ folder +`/`+ item.image +`" class="card-img-top">
      <div class="card-body d-flex flex-column text-center">
        <h6 class="card-title regular-text">`+ item.name +`</h6>
        <div class="mt-auto">
        `+ createButtons(item) +`
        <div>
      </div>
    </div>
  </div>
  `
}

function createButtons(item) {
  var buttons = "";

  if (!item.isAvailable) {
    buttons = `
      <p class="text-danger">Unavailable.</p>
    `;
  } else if (item.sizes) {
    item.sizes.forEach(size => {
      buttons += `
        <button type="button" class="btn btn-dark regular-text h6" onclick="addToReceipt(`+ size.price +`, '`+ item.code + '-' + size.code +`')">
          `+ size.code +`
        </button>
      `;
    });
  } else {
    buttons = `
      <button type="button" class="btn btn-dark regular-text" onclick="addToReceipt('`+ item.price +`', '`+ item.code +`')">
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

function addToReceipt(price, code) {
  var itemExist = document.getElementById(code);

  if (itemExist) {
    addQty(code);
  } else {
    isEmpty(false);
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
    isEmpty(true);
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

function isEmpty(hasNoItems) {
  var emptyMessage = document.getElementById("emptyMessage");
  emptyMessage.style.display = (hasNoItems) ? "block" : "none";
}

loadCategories();
loadAllProducts();
isEmpty(true);