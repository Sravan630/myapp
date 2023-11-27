import React from "react";
import { createRoot } from 'react-dom/client';

function App() {
    let name = "John";
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    return <div>
            <h1 className="heading">Hello {name}</h1>
            <p>Its {date}/{month}/{year}</p>
           </div>;
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
