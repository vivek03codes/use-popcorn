import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         size={48}
//         defaultRating={0}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie wa rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} color="#fcc419" size={48} defaultRating={1} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
