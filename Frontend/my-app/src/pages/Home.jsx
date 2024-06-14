import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <NewsLetter/>
        </div>
    )
}

export default Home;