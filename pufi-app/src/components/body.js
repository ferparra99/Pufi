import React from "react"; 
import Products from "../containers/products";
import Social from "../containers/social";
import Subscribe from "../containers/subscribe";

export const Body = () => {

    return (

    <React.Fragment>
        <section className="body">
            <Products />
            <Social />
            <Subscribe />
        </section>
    </React.Fragment>

    );
}


export default Body;