const usersDB = [
  {
    id: 1,
    email: "npanhtai230201@gmail.com",
    username: "lolicon012",
    role: "User",
  },
  {
    id: 2,
    email: "lmquan06112001@gmail.com",
    username: "mqphoton",
    role: "Owner",
  },
  {
    id: 3,
    email: "avparseval01@gmail.com",
    username: "ladysupreme",
    role: "User",
  },
  {
    id: 4,
    email: "gkurfurst41@edu.ger",
    username: "greatelector",
    role: "User",
  },
];

const dbUsers = localStorage.getItem("users");

if (!dbUsers) {
  localStorage.setItem("users", JSON.stringify(usersDB));
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

const users = JSON.parse(localStorage.getItem("users"));

// Render người dùng
renderUser(users);

// Logout
function handleLogout() {
  localStorage.removeItem("adminLogin");
  window.location = "login.html";
}

// Xử lý Edit
function handleEdit(id) {
  const editModal = document.getElementById("modal1");
  editModal.style.display = "block";
  const users = JSON.parse(localStorage.getItem("users"));
  let user;
  users.forEach((item) => {
    if (item.id == id) {
      user = item;
    }
  });
  // render vào modal
  renderModal(user);
}

// Render modal
function renderModal(user) {
  const idElement = document.querySelector("#user-edit");
  const emailElement = document.querySelector("#email-edit");
  const usernameElement = document.querySelector("#username-edit");
  const roleElement = document.querySelector("#role-edit");

  idElement.value = user?.id;
  emailElement.value = user?.email;
  usernameElement.value = user?.username;
  roleElement.value = user?.role;
}

// Xử lý Update
function handleUpdate() {
  const idValue = document.querySelector("#user-edit").value;
  const emailValue = document.querySelector("#email-edit").value;
  const usernameValue = document.querySelector("#username-edit").value;
  const roleValue = document.querySelector("#role-edit").value;

  const newUser = {
    id: idValue,
    email: emailValue,
    username: usernameValue,
    role: roleValue,
  };

  // Lấy dữ liệu từ local về
  const users = JSON.parse(localStorage.getItem("users"));
  users.forEach((user, i) => {
    if (user.id == idValue) {
      users.splice(i, 1, newUser);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));

  // set display none cho model
  let editModal = document.getElementById("modal1");
  editModal.style.display = "none";

  renderUser(users);
}

// handle Delete
function handleDelete(id) {
  const isDelete = confirm("Delete it ?");
  // Nếu người dùng từ chối xóa thì kết thúc function
  if (!isDelete) {
    return;
  }
  const users = JSON.parse(localStorage.getItem("users"));
  users.forEach((user, i) => {
    if (user.id == id) {
      users.splice(i, 1);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
  renderUser(users);
}

function renderUser(data) {
  // B1. Xác định element sẽ thay đổi
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((user, index) => {
    contentTbody += `
    <tr>
      <td>${index + 1}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
      <td>${user.role}</td>
      <td><button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="handleEdit(${
        user.id
      })">Edit</button><button class="btn btn-danger" onclick="handleDelete(${
      user.id
    })">Delete</button></td>
    </tr>
    `;
  });
  tbodyElement.innerHTML = contentTbody;
}

let editModal = document.getElementById("modal1");
// Close the modal(update)
let span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
  editModal.style.display = "none";
};

function btnSearch() {
  let searchValue = document.querySelector("#search").value;
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  const listUser = users.filter((user) => {
    return Object.values(user.username)
      .join("")
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });
  renderUser(listUser);
}
