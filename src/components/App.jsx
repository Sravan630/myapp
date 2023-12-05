import React from "react";

function App() {
    
    const [time , setTime] = React.useState(new Date().toLocaleTimeString('en-IT', { hour12: false }));
    function updateTime() { 
        setTime(new Date().toLocaleTimeString('en-IT', { hour12: false }));
    }

    setInterval(updateTime, 1000);
    return (
      <div className="container">
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
      </div>
    );
  }

// function App() {

//     const [count, setCount] = React.useState(0);

//     function increase() {
//         setCount(count + 1);
//     }

//     function decrease() {
//         setCount(count - 1);
//     }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>- </button>
//     </div>
//   );
// }

// import Card from "./Card";
// import contacts from "../contacts";
// import Heading from "./Heading";
// import Avatar from "./Avatar";

//  function createCard(contact) {
//     return <Card 
//             key={contact.id}
//             name={contact.name}
//             imgsrc={contact.imgURL}
//             tel={contact.phone}
//             email={contact.email}
//             uid={contact.id}
//     />;
//  }

// function App() {
//     return <div>
//         <Heading className="heading" />
//         <Avatar imgsrc={"https://picsum.photos/300"} />

//         {contacts.map(createCard)}


//         {/* <Card 
//             name={contacts[0].name}
//             imgsrc={contacts[0].imgURL}
//             tel={contacts[0].phone}
//             email={contacts[0].email}
//         />
//         <Card 
//             name={contacts[1].name}
//             imgsrc={contacts[1].imgURL}
//             tel={contacts[1].phone}
//             email={contacts[1].email}
//         />
//         <Card 
//             name={contacts[2].name}
//             imgsrc={contacts[2].imgURL}
//             tel={contacts[2].phone}
//             email={contacts[2].email}
//         /> */}
//     </div>;
// }

export default App;

// function App() { 
//     let customStyles = {
//         color : "red"
//     };

//     let today = new Date();
//     let t = today.getHours();
//     let greet;
//     if(t>=0 && t<=12) greet="Good Morning";
//     else if(t>=12 && t<=18) {greet="Good Afternoon"; customStyles.color="green";}
//     else if(t>=18 && t<=23) {greet="Good Night"; customStyles.color="blue";}
//     return <div>
//         <h1 className="greetHeading" style={customStyles}>{greet}</h1>
//     </div>
// };

// export default App;

// import Heading from "./Heading";
// import List from "./List";

// function App() {
//     return <div>
//         <Heading/>
//         <List/>
//         </div>;
// }

// export default App;

