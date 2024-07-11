import React, { useState } from 'react';
import { foodImages } from "../utils/foodImages";
import Template from '../Components/Template';
import { Quote } from "../Components/Quote"

export default function Food() {
    return (
        <>
            <Template images={foodImages} Heading={"Food"} />
            <Quote />
        </>
    )
}
