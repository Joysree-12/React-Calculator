import styles from "./App.module.css";
import Button1 from "./components/Button1";
function App(){
  return (<>
  <center><div className={styles.calculator}>
    <input className={styles.input}type="text"></input>
    <Button1></Button1>
  </div>
  </center>
  
  </>
  );
}
export default App;









// import React from "react";
// import "./style.css";
// function App() {
//   return (<>
//   <center class="container">
//     <h1>To-Do-List</h1>
//     <div class="text-center">
//       <div class="row">
//         <div class="col-6">
//           <input type="text" placeholder="Enter Todo here"></input>
//         </div>
//         <div class="col-4"><input type="date"></input></div>
//         <div class="col-2">
//           <button type="button" class="btn btn-success btn1">Add</button></div>
//       </div>
//       <div class="items">
//       <div class="row">
//         <div class="col-6">
//           Buy Milk
//         </div>
//         <div class="col-4">
//           4/10/2023</div>
//         <div class="col-2">
//           <button type="button" class="btn btn-danger btn1">delete</button></div>
//       </div>
//       <div class="row">
//         <div class="col-6">
//           Go to college
//         </div>
//         <div class="col-4">
//           4/10/2023</div>
//         <div class="col-2">
//           <button type="button" class="btn btn-danger btn1">delete</button></div>
//       </div>
//       </div>
//     </div>
//     </center>
//     </>
//   );
// }

//     export default App;
