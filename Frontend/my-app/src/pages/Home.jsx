import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Item from "../components/Item/Item";

const Home=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Item />
            <NewsLetter/>
        </div>
    )
}

export default Home;