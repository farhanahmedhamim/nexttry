import React from "react";

import Image from "next/image";

function Card(props) {
    return (
        <div className="future-single">
            <div className="number">
                <h3>{props.val.nub}</h3>
            </div>
            <h2>Solve customer <br /> problems in a flash</h2>
            <Image src={props.val.img} alt="" />
        </div>
    )
}


export default Card


