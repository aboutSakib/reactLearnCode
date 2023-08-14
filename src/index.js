import ReactDOM from "react-dom";
import App from "./App";
import TimeClass from "./TimeClass";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// // Functional Component
// function Time(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <p>{props.children}</p>
//     </div>
//   );
// }

// Rendering Functional Component
// ReactDOM.render(<Time />, document.getElementById("root"));

// Class Component
let obj = new TimeClass();

// Rendering Class Component
ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
