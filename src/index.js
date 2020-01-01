// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import BadgeNew from "./pages/BadgeNew";

// const name = "Eloi";
// const element = React.createElement("h1", {}, `Hola, me llamo ${name}`);
// const jsx = <h1>Hola, me llamo {2 + 2}</h1>;
// const jsx = (
//   <div>
//     <h1>Hola, me llamo {name}</h1>
//     <p>Soy ingeniero front end</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);
