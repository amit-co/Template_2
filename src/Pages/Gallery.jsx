import { galleryImages } from "../utils/galleryImages";
import Template from '../Components/Template';


export default function gallery() {
    return (
        <>
            <div>
                <Template images={galleryImages} Heading={"GALLERY"} />
            </div>
            
        </>
    );
}