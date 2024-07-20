import { team } from "../utils/TeamInfo";
import back from "/buttons/Group 146.png";
import img0 from "/teamImages/img0.jpeg";
import imgB from "/New/bgn.png";
import { useNavigate } from 'react-router-dom';

export default function Team() {
    const navigate = useNavigate();
    // Separate the first team member from the rest
    const [firstMember, ...restOfTeam] = team;

    return (
        <>
            <div className="bg-repeat pb-10 pt-28" style={{ backgroundImage: `url(${imgB})` }}>
                <div className="flex flex-row mr-10">
                    <button
                        className="self-start mt-10 ml-10"
                        onClick={() => navigate('/')}
                    >
                        <img src={back} alt="backward" className="w-10 h-10 object-contain" />
                    </button>
                    <h1 className="font-bold tracking-widest text-customBrown3 text-6xl mb-2 mt-10 mx-auto">TEAMS</h1>
                </div>

                {/* Centered first team member */}
                <div className="w-full flex justify-center mt-10">
                    <div className="bg-no-repeat bg-cover cursor-pointer w-[90vw] md:w-[40vw] lg:w-[20vw] h-72 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ backgroundImage: `url(${img0})` }}>
                    </div>
                </div>

                {/* Remaining team members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mx-auto p-5">
                    {restOfTeam.map((value, index) => (
                        <div key={index + 1} className="bg-no-repeat bg-cover cursor-pointer w-[90vw] md:w-[40vw] lg:w-[20vw] h-72 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ backgroundImage: `url(${value.imageUrl})` }}>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button
                        
                        className="text-customBlack2 text-lg mt-5  tracking-widest rounded-lg w-fit px-10 py-4 font-semibold bg-customSalmon "
                    >
                        Load More
                    </button>
                </div>
            </div>
        </>
    );
}
