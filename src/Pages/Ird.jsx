
import React from 'react';
import VenueTemplate from '../Components/VenueTemplate';
import img from "/Venues/ird.jpg"

function Ird() {
    let irdInfo = {
        image: img,
        button: {
            link: "/gallery"
        },
        venueType: "OXBO IRD",
        location: {
            placeLine1: "Hilton London Heathrow Airport,",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom,",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `Take advantage of our extensive and varied 24/7 room service menu.
                      If you would like a dish that is not on our menu,
                      just ask and we will do our best to provide it.`
    }
    return (
        <div>
            <VenueTemplate venueInfo={irdInfo} />
        </div>
    );
}

export default Ird
