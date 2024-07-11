
import React from 'react';
import img from "/Venues/bar.jpg"
import VenueTemplate from '../Components/VenueTemplate';


function Bar() {
    let barInfo = {
        image: img,
        button: {
            link: "/gallery/drinks"
        },
        venueType: "OXBO Bar",
        location: {
            placeLine1: "Hilton London Heathrow Airport",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom,",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `Laid back is the order of the day at our OXBO Bar
        where casual drinking and dining provide the perfect setting for some R 
        &amp; R or a casual gathering.
        Signature cocktails, bar snacks, small plates and sharing platters are all on the menu, 
        changing with the seasons to ensure that guests are constantly surprised and overjoyed. 
        Dishes can be enjoyed for one of served small plates for friends, family and colleagues to share - a great way to dine.
        Start with a bowl of complimentary popcorn while perusing the menu and make sure to ask about our guest beers,
        special spritzers and our gin map! Last food and drink order at 11:45pm.`
    }
    return (
        <>
            <VenueTemplate venueInfo={barInfo} />

        </>
    );
}

export default Bar
