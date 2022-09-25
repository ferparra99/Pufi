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

                {/* ROW 1 
                    S: IMAGEN + BOTON "SHOP"
                    S: TEXTO SOMBRILLA
                */}

                <div className="pufi-image">
                    <img src={Person_with_umbrella}></img>
                    <button>S H O P</button>
                </div>
                
                <div className="pufi-slide">
                    <img src="https://xlshop.vteximg.com.br/arquivos/ids/192766-1000-1000/XT1SNH01U0425.jpg?v=637665337876130000" alt="Pufi Rain"></img>
                    <h3>Pufi RAIN</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button> VER MÁS</button>

                </div>

                {/* ROW 2 
                    S: TEXTO PUFF
                    S: PUFF PLAYA
                */}

                <div className="pufi-slide">
                    <img src="https://avatars.mds.yandex.net/get-mpic/4120716/img_id3258551118685313926.jpeg/orig" alt="Pufi Puff"></img>
                    <h3>Pufi PUFF</h3>
                    <span></span>
                    <p>Descripcion del producto. Este es un texto simulado</p>
                    <button> VER MÁS</button>

                </div>

                <div className="pufi-image"></div>
                    
                {/* ROW 3 */}

                
           </div>

        </React.Fragment>

           /* <img src="https://via.placeholder.com/600" alt="Pufi Buff"></img>                
            <img src={Beach_puff} alt="Persona descansando en un puff" className="slide-img"></img>
            <img src={Market_discharge} alt="Familia bajando las compras del coche"></img>
            <img src="https://via.placeholder.com/600" alt="Pufi Cart"></img>
            <img src="https://via.placeholder.com/600" alt="Pufi Nap"></img>
            <img src={Person_wiht_travel_pillow} alt="Persona durmiendo con una almohada de viaje" className="slide-img"></img>
            */
    );
}

export default Products;
