import React from "react";
import Person_with_umbrella from "../images/person_with_umbrella.jpg"
import Beach_puff from "../images/beach_puff.jpg"
import Market_discharge from "../images/market_discharge.jpg"
import Person_wiht_travel_pillow from "../images/person_wiht_travel_pillow.jpg"
import Umbrella from "../images/umbrella.png"
import Puff from "../images/puff.png"
import Cart from "../images/cart.png"
import Nap from "../images/nap.png"
import "../scss/containers/_products.scss";


const Products = () => {

    return (

        <React.Fragment>

           <div className="products">

                <div className="pufi-image-with-button">                
                    <img src={Person_with_umbrella} alt="Persona con paraguas"></img>
                    <button>S H O P</button>
                </div>

                <div className="pufi-info">
                    <img src={Umbrella} alt="Paraguas"></img>
                    <h3>Pufi RAIN</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button>» VER MÁS</button>
                </div>

                <div className="pufi-info">
                    <img src={Puff} alt="Pufi Puff"></img>
                    <h3>Pufi PUFF</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button>» VER MÁS</button>
                </div>   

                <div className="pufi-image">   
                    <img src={Beach_puff} alt="Persona descansando en un puff"></img>
                </div>

                <div className="pufi-image">     
                    <img src={Market_discharge} alt="Familia bajando las compras del coche"></img>
                </div>

                <div className="pufi-info"> 
                    <img src={Cart} alt="Pufi Puff"></img>
                    <h3>Pufi PUFF</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button>» VER MÁS</button>
                </div>

                <div className="pufi-info">
                    <img src={Nap} alt="Pufi Puff"></img>
                    <h3>Pufi PUFF</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button>» VER MÁS</button>         
                </div>
                
                <div className="pufi-image">
                    <img src={Person_wiht_travel_pillow} alt="Persona durmiendo con una almohada de viaje"></img>
                </div>
            
           </div>

        </React.Fragment>

    );
}

export default Products;
