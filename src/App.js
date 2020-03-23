import React from 'react';
import logo from './logo.svg';
import './App.css';

// let point = prompt(Number);
// if (point >= 80) {
//   alert(`Your point = ${point} and your Grade = A`)
// }else if(point >= 70 && point <= 79) {
//   alert(`Your point = ${point} and your Grade = B`)
// }else if(point >= 60 && point <= 69) {
//   alert(`Your point = ${point} and your Grade = C`)
// }else if(point >= 50 && point <= 59) {
//   alert(`Your point = ${point} and your Grade = D`) 
// }else if(point < 50) {
//   alert(`Your point = ${point} and your Grade = F`)
// }


// let point = prompt(Number("Please insert your point"));
// let grade;
// function gradeCalculator() {
  
 

//   if (point >= 80) {
//     grade = "A"  
//   }else if (point >= 70 && point <= 79) {
//     grade = "B"
//   }else if (point >= 60 && point <= 69) {
//     grade = "C"
//   }else if (point >= 50 && point <= 59) {
//     grade = "D"
//   }else {  
//     grade = "F"
//   }
  
// } 

//let arr = ["a","b","c","d","e"];
//{ arr.map(item => (<li> {item} </li>))}



 



function App() {
let arr = [];
let point = prompt(Number("Please insert number"))
  if (point >= 80) {
        grade = "A"  
      }else if (point >= 70 && point <= 79) {
        grade = "B"
      }else if (point >= 60 && point <= 69) {
        grade = "C"
      }else if (point >= 50 && point <= 59) {
        grade = "D"
      }else {  
        grade = "F"
      }
        
}

  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          HELLO WORLD
          <br></br>
          {point}
        </p>

       

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HELLO WORLD
        </a> */}
      {/* </header> */}
    </div>
  );


export default App;
