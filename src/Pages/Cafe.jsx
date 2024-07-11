import VenueTemplate from "../Components/VenueTemplate";
import img from "/Venues/cafe.jpg"

function Cafe() {
    let cafeInfo = {
        image: img,
        button: {
            link: "/gallery/drinks"
        },
        venueType: "OXBO Cafe",
        location: {
            placeLine1: "Hilton London Heathrow Airport",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom,",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `Tempting snacks for any time of day - 
        or take advantage of the grab and go service
        if you need something to eat or drink on the move.
        Choose from breakfast favourites,
        healthy offerings or traditional favourites cooked with responsibly sourced ingredients.
        From flatbreads to toasted sandwiches,
        from the hot dishes of the day to salads made with the freshest of ingredients,
        there is something to suit everyone. 
        We also have a daily selection of both plant based and vegetarian dishes available. 
        Last food and drink order at 11:45pm.`
    }
    return (
        <div>
            <VenueTemplate venueInfo={cafeInfo} />
        </div>
    );
}

export default Cafe



