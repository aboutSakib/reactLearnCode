// import React, { useState } from "react";

// function Counter() {
//   const [items, setItems] = useState([]);

//   const addItem = () => {
//     const newItem = {
//       id: items.length,
//       value: Math.random() * 10 + 1,
//     };
//     setItems([...items, newItem]);
//   };

//   return (
//     <div>
//       <button onClick={addItem}>add item</button>
//       {items.map((item) => (
//         <p key={item.id}>
//           {item.id}----{item.value}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default Counter;

// API USE USEREFFECTR
import React, { useEffect, useState } from "react";

function Counter() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json()) // Corrected this line
      .then((data) => {
        setUser(data);
      });
  }, []); // Pass an empty array as the second argument to useEffect

  return (
    <div>
      {user.map((userData) => (
        <p>{userData.name}</p>
      ))}
      {/* {user.map((userData) => (
        <p>{userData.name}</p>
      ))} */}
    </div>
  );
}

export default Counter;
