import React from "react";
import Person_with_umbrella from "../images/person_with_umbrella.jpg"
import Beach_puff from "../images/beach_puff.jpg"
import Market_discharge from "../images/market_discharge.jpg"
import Person_wiht_travel_pillow from "../images/person_wiht_travel_pillow.jpg"
import "../scss/containers/_products.scss";


const Products = () => {

    return (

        <React.Fragment>

           <div className="products">
                <img src={Person_with_umbrella} alt="Persona con paraguas"></img>
                <img src="https://via.placeholder.com/600"></img>
                <img src="https://via.placeholder.com/600"></img>
                <img src={Beach_puff} alt="Persona descansando en un puff"></img>
                <img src={Market_discharge} alt="Familia bajando las compras del coche"></img>
                <img src="https://via.placeholder.com/600"></img>
                <img src="https://via.placeholder.com/600"></img>
                <img src={Person_wiht_travel_pillow} alt="Persona durmiendo con una almohada de viaje"></img>
           </div>

        </React.Fragment>

    );
}

export default Products;
