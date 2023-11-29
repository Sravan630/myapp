import Card from "./Card";
import contacts from "../contacts";

function App() {
    return <div>
        <heading className="heading">React Props</heading>
        <Card 
            name={contacts[0].name}
            imgsrc={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />
        <Card 
            name={contacts[1].name}
            imgsrc={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />
        <Card 
            name={contacts[2].name}
            imgsrc={contacts[2].imgURL}
            tel={contacts[2].phone}
            email={contacts[2].email}
        />
    </div>;
}

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

