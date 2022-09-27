import React from "react";
import "../scss/containers/_subscribe.scss";

const Subscribe = () => {
    
    return (

        <React.Fragment>

            <div className="email-subscribe">
                <h3>NEWSLETTER</h3>
                <h4>SUSCRIBETE</h4>
                <p>Y enterate de todas las novedades</p>
                
                <form onSubmit="handleSubmit">
                    <fieldset className="form">
                        <input id="email" name="email" type="email" placeholder="Ingresa tu email"></input>
                        <button type="submit" disabled="state.submitting">
                            <img src="https://i.imgur.com/xdT2poi.png" alt="icon"></img>
                        </button>
                    </fieldset>
                </form>
            </div>
            
        </React.Fragment>

    );
}

export default Subscribe;