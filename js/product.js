const productsDB = [
  {
    id: 1,
    Image: "/imgs/Hamburger.jpg",
    name: "Hamburger",
    price: "3.99",
    quantity: 50,
  },
  {
    id: 2,
    Image: "/imgs/fried-chicken.jpeg",
    name: "Fried Chicken",
    price: "4.99",
    quantity: 50,
  },
  {
    id: 3,
    Image: "/imgs/cheeseburger.jpg",
    name: "Cheeseburger",
    price: "4.09",
    quantity: 50,
  },
];

const dbProducts = localStorage.getItem("products");

if (!dbProducts) {
  localStorage.setItem("products", JSON.stringify(productsDB));
}

// Menu toggle
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".navigator");
let main = document.querySelector(".main");

toggle.onclick = function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
};
const adminLogin = JSON.parse(localStorage.getItem("adminLogin"));

const products = JSON.parse(localStorage.getItem("products"));
// Render sản phẩm
renderProduct(products);

// Xử lý log out
function handleLogout() {
  localStorage.removeItem("adminLogin");
  window.location = "login.html";
}

// Xử lý Edit
function handleEdit(id) {
  const editModal = document.getElementById("modal1");
  editModal.style.display = "block";
  const products = JSON.parse(localStorage.getItem("products"));
  let product;
  products.forEach((item) => {
    if (item.id == id) {
      product = item;
    }
  });
  // render vào modal
  renderModal(product);
}

// Render modal
function renderModal(product) {
  const productElement = document.querySelector("#product-edit");
  const imgElement = document.querySelector("#image-edit");
  const nameElement = document.querySelector("#name-edit");
  const priceElement = document.querySelector("#price-edit");
  const quantityElement = document.querySelector("#quantity-edit");

  productElement.value = product?.id;
  imgElement.value = product?.Image;
  nameElement.value = product?.name;
  priceElement.value = product?.price;
  quantityElement.value = product?.quantity;
}

// Xử lý Update
function handleUpdate() {
  const idValue = document.querySelector("#product-edit").value;
  const imgValue = document.querySelector("#image-edit").value;
  const nameValue = document.querySelector("#name-edit").value;
  const priceValue = Number(document.querySelector("#price-edit").value);
  const quantityValue = Number(document.querySelector("#quantity-edit").value);

  const newProduct = {
    id: idValue,
    Image: imgValue,
    name: nameValue,
    price: priceValue,
    quantity: quantityValue,
  };

  // Lấy dữ liệu từ local về
  const products = JSON.parse(localStorage.getItem("products"));
  products.forEach((product, i) => {
    if (product.id == idValue) {
      products.splice(i, 1, newProduct);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));

  // set display none cho model
  let editModal = document.getElementById("modal1");
  editModal.style.display = "none";

  renderProduct(products);
}

// handle Delete
function handleDelete(id) {
  const isDelete = confirm("Delete it ?");
  // Nếu người dùng từ chối xóa thì kết thúc function
  if (!isDelete) {
    return;
  }
  const products = JSON.parse(localStorage.getItem("products"));
  products.forEach((product, i) => {
    if (product.id == id) {
      products.splice(i, 1);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);
}

// handle Add
function handleAddProduct() {
  const imgValue = document.querySelector("#image-add").value;
  const nameValue = document.querySelector("#name-add").value;
  const priceValue = Number(document.querySelector("#price-add").value);
  const quantityValue = Number(document.querySelector("#quantity-add").value);
  const products = JSON.parse(localStorage.getItem("products"));
  const newProdouct = {
    id: Number(products[products.length - 1]?.id) + 1,
    Image: imgValue,
    name: nameValue,
    price: priceValue,
    quantity: quantityValue,
  };

  // Lấy dữ liệu từ local về

  products.push(newProdouct);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);
}

// Render Product
function renderProduct(data) {
  // B1. Xác định element sẽ thay đổi
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((product, index) => {
    contentTbody += `
  <tr>
    <td>${index + 1}</td>
    <td><img src="${product.Image}"/></td>
    <td>${product.name}</td>
    <td>$${product.price}</td>
    <td>${product.quantity}</td>
    <td><button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="handleEdit(${
      product.id
    })">Edit</button><button class="btn btn-danger" onclick="handleDelete(${
      product.id
    })">Delete</button></td>
  </tr>
  `;
  });
  tbodyElement.innerHTML = contentTbody;
}

// Get modal
let modal = document.getElementById("modal");
let editModal = document.getElementById("modal1");

// Button open the modal
let btn = document.getElementById("btn1");

// Close the modal(add)
let span = document.getElementsByClassName("close")[0];

// Click the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Click the (x), close the modal (add)
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal(update)
let span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
  editModal.style.display = "none";
};

// Click anywhere outside modal, close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// search by  name
function btnSearch(value) {
  const resultFilter = [];
  const productsDB = JSON.parse(localStorage.getItem("products")) ?? [];
  for (let i = 0; i < productsDB.length; i++) {
    const user = productsDB[i];
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      resultFilter.push(user);
    }
  }
  renderProduct(resultFilter);
}
