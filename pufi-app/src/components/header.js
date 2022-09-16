import React from "react"; 
import Beach from "../images/beach.png"
import	Beanbag from "../icons/bean-bag.png"
import	Umbrella from "../icons/umbrella.png"
import	Shopbag from "../icons/shopping-bag.png"
import	Backpack from "../icons/backpack.png"
import "../scss/components/_header.scss";



const Header = () => {

    return (

        <React.Fragment>

            <img className="background" src={Beach} alt="Mujer bailando en la playa"></img>

            <div className="header">
                <div className="logo">
                    <h1>Pufi</h1>
                </div>
                <div className="options">
                    <a href="#"><img src={Beanbag} alt="Puff" ></img><p>PUFI RAIN</p></a>           
                    <a href="#"><img src={Umbrella} alt="Sombrilla"></img><p>PUFI RAIN</p></a>
                    <a href="#"><img src={Shopbag} alt="Bolsa de compras"></img><p>PUFI RAIN</p></a>
                    <a href="#"><img src={Backpack} alt="Mochila"></img><p>PUFI RAIN</p></a>                </div>
                <div className="count">
                    <div>MI CUENTA ▼ | MI COMPRA</div>
                </div>      
            </div>
            <div className="center">
                <h2>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h2>
                <button>SHOP</button>
            </div> 

        </React.Fragment>

    );
}

export default Header;

