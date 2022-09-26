import React from "react";
import logo from "../images/logo.png";
import "../scss/components/_footer.scss"; 

const Footer = () => {

    return (

        <React.Fragment>

            <section className="container">
                <div className="logo">
                    <a href="#" ><img src={logo}></img></a>
                </div>

                <span></span>

                <div className="index">
                    <a href="#"><h5>PUFI RAIN</h5></a>
                    <a href="#"><h5>PUFI PUFF</h5></a>
                    <a href="#"><h5>PUFI CART</h5></a>
                    <a href="#"><h5>PUFI NAP</h5></a>
                </div>

                <span></span>


                <div className="about">
                    <a href="#"><h5>CONTACTO</h5></a>
                    <a href="#"><h5>AYUDA</h5></a>
                    <a href="#"><h5>CÓMO COMPRAR</h5></a>
                    <a href="#"><h5>TÉRMINOS Y CONDICIONES</h5></a>
                </div>

                <span></span>

                <div className="buySecurely">
                    <a href="#"><h5>COMPRA 100% SEGURA</h5></a>
                    <a href="#"><img src="https://i.imgur.com/DPV981i.png" alt="security"></img></a>
                </div>

                <span></span>

                <div className="socialNetworks">
                    <h5>SIGUENOS EN</h5>
                    <a href="#"><img src="https://i.imgur.com/xit6Use.png" alt="facebook"></img></a>
                    <a href="#"><img src="https://i.imgur.com/fiQ3Rgi.png" alt="twitter"></img></a>
                    <a href="#"><img src="https://i.imgur.com/D2tRpGf.png" alt="instagram"></img></a>
                </div>
            </section>

            <span className="spaceFooter"></span>


            <section className="footer-bar">
                <footer id="footer">
                    <h5>&copy; PUFI Copyright 2017 - Todos los derechos reservados</h5>
                </footer>
                <img src="https://i.imgur.com/WXKVyBj.png" alt="brand"></img>
            </section>

        </React.Fragment> 

    );

}

export default Footer;