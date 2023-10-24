import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Đăng ký một hàm nghe sự kiện trạng thái đăng nhập thay đổi
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // Người dùng đã đăng nhập
        setUser(authUser);
      } else {
        // Người dùng đã đăng xuất
        setUser(null);
      }
    });

    return () => {
      // Hủy đăng ký sự kiện khi unmount component
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      // Đăng xuất thành công
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Xin chào, {user.email}</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
