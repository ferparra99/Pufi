import React from "react"; 
import Products from "../containers/products";
import Subscribe from "../containers/subscribe";

export const Body = () => {

    return (

    <React.Fragment>
        <section className="body">
            <Products />
            <Subscribe />
        </section>
    </React.Fragment>

    );
}


export default Body;