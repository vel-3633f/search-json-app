import { useEffect, useRef, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<User[]>([]);
  const ref = useRef<HTMLInputElement>(null!);

  const handleChange = () => {
    console.log(users, searchQuery, ref.current.value);

    if (!ref.current) {
      setSearchQuery(users);
      return; // ref.current が null の場合、何もせずに終了
    }
    //フィルタリング機能
    setSearchQuery(
      users.filter((user) => {
        return user.name.toLowerCase().includes(ref.current.value);
      })
    );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setSearchQuery(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" ref={ref} onChange={() => handleChange()} />
        <div className="content">
          {searchQuery.map((user) => (
            <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
