import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  console.log(users);
  return (
    <div className="App">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" />
        <div className="content">
          {users.map((user) => (
            <div className="box">
              <h3>ユーザー名</h3>
              <hr />
              <p>メールアドレス</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
