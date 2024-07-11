import PropTypes from 'prop-types';
import img from "/Venues/venue.jpg"
import VenueTemplate from '../Components/VenueTemplate';
export function Venue() {
    let venueInfo = {
        image: img,
        button: {
            link: "/gallery"
        },
        venueType: "Venue",
        location: {
            placeLine1: "Hilton London Heathrow Airport,",
            placeLine2: "Terminal-4,Hounslow TW6 3AF,United Kingdom",
            phone: "Phone: +44 (0) 208759 7755",
            email: "Email: franky.rodrigues@hilton.com"
        },
        description: `OXBO Kitchen serves breakfast. OXBO Cafe offers tempting snacks any time, and OXBO Bar provides casual drinking and dining. Each outlet has a distinct menu and responsibly sourced dishes.`
    }

    return (
        <div>
            <VenueTemplate venueInfo={venueInfo} />
            
        </div>
    );
}
VenueTemplate.propTypes = {
    venueInfo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        button: PropTypes.object.isRequired,
        link: PropTypes.string.isRequired,
        venueType: PropTypes.string.isRequired,
        location: PropTypes.shape({
            placeLine1: PropTypes.string.isRequired,
            placeLine2: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};


export default Venue
