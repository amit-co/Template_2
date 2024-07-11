import VenueTemplate from "../Components/VenueTemplate";
import img from "/Venues/restaurant.jpg"

function Restaurant() {
    let restaurantInfo = {
        image: img,
        button: {
            link: "/gallery/food"
        },
        venueType: "OXBO Kitchen",
        location: {
            placeLine1: "Hilton London Heathrow Airport,",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom,",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `Our restaurant offers the perfect setting for any event, whether it's a
        wedding, corporate event, or private party. With beautiful
        architecture, modern amenities, and a prime location, we provide an
        unforgettable experience for you and your guests.`
    }

    return (
        <>
            <VenueTemplate venueInfo={restaurantInfo} />
        </>
    );
}

export default Restaurant
