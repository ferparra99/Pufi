import React from "react"; 
import "../scss/_header.scss";


const Header = () => {

    return (
        <React.Fragment>
            <div class="viewHome">
                <img className="image" src="https://i.imgur.com/PeRpRaV.jpg" alt="relax"></img>
                <div className="logo">
                    <h1>Pufi</h1>
                </div>
                <div className="options">
                    <a href="#"><img src="https://i.imgur.com/vhCKnNZ.png" alt="puff"></img><p>PUFI PUFF</p></a>                 
                    <a href="#"><img src="https://i.imgur.com/Lh1vfW8.png" alt="umbrella"></img><p>PUFI RAIN</p></a>
                    <a href="#"><img src="https://i.imgur.com/8rIRBgM.png" alt="bag"></img><p>PUFI CART</p></a>
                    <a href="#"><img src="https://i.imgur.com/piVWHTq.png" alt="cushion"></img><p>PUFI NAP</p></a>   
                </div>
                <div className="count">
                    <div>MI CUENTA ▼ | MI COMPRA</div>
                </div>      
            </div>
            <div className="center">
                <h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
                <button>SHOP</button>
            </div> 
        </React.Fragment>
    );
}
export default Header;

