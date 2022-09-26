import React from "react";
import Aero_pillow from "../images/aero_pillow.png"
import Two_ubrellas from "../images/two_umbrellas.png"
import Market from "../images/market.png"
import Puff_beach from "../images/puff_beach.png"
import Puff_ocean from "../images/puff_ocean.png"
import Puff_holidays from "../images/puff_holidays.png"
import "../scss/containers/_social.scss";

const Social = () => {

    return(

        <React.Fragment>

            <div className="social-media">
                <h3>INSTAGRAM</h3>
                <p>#ESPUFI</p>
                <div className="collage">
                    <img src={Two_ubrellas} alt="Dos personas bajo la lluvia"></img>
                    <img src={Puff_ocean} alt="Persona descansando en un puff"></img>
                    <img src={Market} alt="Familia acomodando el mercado"></img>
                    <img src={Puff_beach} alt="Persona descansando en un puff"></img>
                    <img src={Aero_pillow} alt="Personas con almohada de viaje"></img>
                    <img src={Puff_holidays} alt="Grupo de amigos en un puff"></img>
                </div>
            </div>

        </React.Fragment>

    );
    
}
export default Social;
