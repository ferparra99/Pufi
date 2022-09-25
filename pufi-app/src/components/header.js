import React from "react";
import Beach from "../images/beach.png"
import Beanbag from "../icons/bean-bag.png"
import Umbrella from "../icons/umbrella.png"
import Shopbag from "../icons/shopping-bag.png"
import Backpack from "../icons/backpack.png"
import "../scss/components/_header.scss";

const Header = () => {

    return (

        <React.Fragment>
            <section>
                <div className="gradient">
                    <img className="background" src={Beach} alt="Mujer bailando en la playa"></img>


                    <div className="header">
                        <div className="logo">
                            <h1>Pufi</h1>
                        </div>
                        <div className="menu">
                            <a href="#"><img src={Beanbag} alt="Puff" ></img><p>PUFI PUFF</p></a>
                            <span></span>
                            <a href="#"><img src={Umbrella} alt="Sombrilla"></img><p>PUFI RAIN</p></a>
                            <span></span>
                            <a href="#"><img src={Shopbag} alt="Bolsa de compras"></img><p>PUFI CART</p></a>
                            <span></span>
                            <a href="#"><img src={Backpack} alt="Mochila"></img><p>PUFI NAP</p></a>
                        </div>

                        <div className="porfile">
                            <h2>MI CUENTA</h2> <p> ^ </p> <span></span> <h2>MI COMPRA</h2>
                        </div>
                    </div>

                    <div className="center">
                        <h2>ESTÁR CÓMODO,<br></br>NUNCA FUE TAN FÁCIL.</h2>
                        <button>S H O P</button>
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default Header;

