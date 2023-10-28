// import React, { useState } from "react";
// import firebase from "firebase/app";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Đăng nhập thành công, bạn có thể thực hiện các hành động sau ở đây
//     } catch (error) {
//       // Xử lý lỗi nếu có
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Đăng nhập</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Mật khẩu"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Đăng nhập</button>
//     </div>
//   );
// };

// export default Login;
