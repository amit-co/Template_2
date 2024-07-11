import React, { useState } from 'react';
import { drinkImages } from "../utils/drinkImages";
import Template from '../Components/Template';
import { Quote } from "../Components/Quote"

export default function drink() {
    return (
        <>
            <Template images={drinkImages} Heading={"Drinks"} />
            <Quote />
        </>
    )
}
