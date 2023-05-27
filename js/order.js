const ordersDB = [
  {
    image: "/imgs/Hamburger.jpg",
    id: 1,
    name: "Hamburger",
    customer: "Optimum Pride",
    quantity: 2,
    price: "7.98",
    description: "Mixed from bread, salah, butter and beef",
  },
  {
    image: "/imgs/Taco.jpg",
    id: 2,
    name: "Taco",
    customer: "Elena Petrova",
    quantity: 2,
    price: "5.98",
    description: "Traditional food of the Mexican",
  },
  {
    image: "/imgs/cheeseburger.jpg",
    id: 3,
    name: "Cheeseburger",
    customer: "Matthew Henderson",
    quantity: 2,
    price: "8.18",
    description: "Hamburger with topping is cheese",
  },
];

const dbOrders = localStorage.getItem("orders");

if (!dbOrders) {
  localStorage.setItem("orders", JSON.stringify(ordersDB));
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

const orders = JSON.parse(localStorage.getItem("orders"));

// View
function handleView(id) {
  const editModal = document.getElementById("modal1");
  editModal.style.display = "block";
  const orders = JSON.parse(localStorage.getItem("orders"));
  let order;
  orders.forEach((item) => {
    if (item.id == id) {
      order = item;
    }
  });
  // render vào modal
  renderModal(order);
}

// const products = JSON.parse(localStorage.getItem("products"));
// products.forEach((product, i) => {
//   if (product.id == idValue) {
//     products.splice(i, 1, newProduct);
//   }
// });
// localStorage.setItem("products", JSON.stringify(products));

// // set display none cho model
// let editModal = document.getElementById("modal1");
// editModal.style.display = "none";
// set display none cho model
let setModal = document.getElementById("modal1");
setModal.style.display = "none";
renderOrder(orders);

// Render modal
function renderModal(order) {
  const imageElement = document.querySelector("#image-view");
  const productElement = document.querySelector("#product-view");
  const nameElement = document.querySelector("#name-view");
  const customerElement = document.querySelector("#customer-view");
  const quantityElement = document.querySelector("#quantity-view");
  const priceElement = document.querySelector("#price-view");
  const descripElement = document.querySelector("#description-view");

  imageElement.src = order?.image;
  productElement.value = order?.id;
  nameElement.value = order?.name;
  customerElement.value = order?.customer;
  quantityElement.value = order?.quantity;
  priceElement.value = order?.price;
  descripElement.value = order?.description;
}
// Logout
function handleLogout() {
  localStorage.removeItem("adminLogin");
  window.location = "login.html";
}
function renderOrder(data) {
  // B1. Xác định element sẽ thay đổi
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((order, index) => {
    contentTbody += `
      <tr>
        <td><img src="${order.image}"/></td>
        <td>${index + 1}</td>
        <td>${order.name}</td>
        <td>${order.customer}</td>
        <td>${order.quantity}</td>
        <td>$${order.price}</td>
        <td>${order.description}</td>
        <td><button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="handleView  (${
          order.id
        })">View</button></td>
      </tr>
      `;
  });
  tbodyElement.innerHTML = contentTbody;
}

let editModal = document.getElementById("modal1");
// Close the modal(view)
let span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
  editModal.style.display = "none";
};

function btnSearch() {
  let searchValue = document.querySelector("#search").value;
  const orders = JSON.parse(localStorage.getItem("orders")) ?? [];
  const listOrder = orders.filter((order) => {
    return Object.values(order.name)
      .join("")
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });
  renderOrder(listOrder);
}
