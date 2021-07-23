import React from 'react';
import preloaderSVG from "../../assets/svg/Infinity-1.4s-200px.svg";

let Preloader = () => {
    return <div>
        <img src={preloaderSVG} alt={'Loading...'}/>
    </div>
}

export default Preloader;