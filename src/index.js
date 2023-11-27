// Complete react inline Styling and conditional styling
import React from "react";
import { createRoot } from "react-dom/client";

var customStyles = {
    color : "red"
};

function App() { 

    let today = new Date();
    let t = today.getHours();
    let greet;
    if(t>=0 && t<=12) greet="Good Morning";
    else if(t>=12 && t<=18) {greet="Good Afternoon"; customStyles.color="green";}
    else if(t>=18 && t<=23) {greet="Good Night"; customStyles.color="blue";}
    return <div>
        <h1 className="greetHeading" style={customStyles}>{greet}</h1>
    </div>
};

var root = createRoot(document.getElementById("root"));
root.render(<App />);

// complete JSX elements and React styling
// import React from "react";
// import { createRoot } from 'react-dom/client';

// function App() {
//     let name = "John";
//     let date = new Date().getDate();
//     let month = new Date().getMonth();
//     let year = new Date().getFullYear();
//     return <div>
//             <h1 className="heading">Hello {name}</h1>
//             <p>Its {date}/{month}/{year}</p>
//            </div>;
// }

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(<App />);
