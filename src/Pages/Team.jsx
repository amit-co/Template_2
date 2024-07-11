import { team } from "../utils/TeamInfo";
import { Quote } from "../Components/Quote";
import img from "/Textures/4523.png";
import img0 from "/teamImages/img0.jpeg";
import img1 from "/Textures/4525.png";

export default function Team() {
    // Separate the first team member from the rest
    const [firstMember, ...restOfTeam] = team;

    return (
        <>
            <div className="bg-repeat mt-[32vh]" style={{ backgroundImage: `url(${img1})` }}>
                <div className="w-fit mx-auto mb-3">
                    <h1 className="text-customGray tracking-widest font-bold text-center text-6xl">THE TEAM</h1>
                    
                </div>
                <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-600  to-transparent mx-16 "></div>

                {/* Centered first team member */}
                <div className="w-full flex justify-center mt-10">
                    <div className="bg-no-repeat h-72 rounded-md sm:ml-7 sm:mt-4 lg:w-[20vw] py-6 bg-cover shadow-lg" style={{ backgroundImage: `url(${ img0 })` }}>
                       
                        <div className="bg-repeat w-[44vh] h-[24vh] items-center flex flex-wrap text-customBrown ml-52 mt-28 rounded-md" style={{ backgroundImage: `url(${img})` }}>
                            <div className="mx-12">
                        <h1 className="text-center text-lg font-semibold  ">{firstMember.name}</h1>
                        <h1 className="text-center text-xl">{firstMember.designation}</h1>
                        <h1 className="text-center">{firstMember.email}</h1>
                                <h1 className="text-center">{firstMember.phoneNO}</h1>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Remaining team members */}
                <div className="grid sm:space-x-7 space-y-4 w-11/12 sm:w-11/12 mt-10 mx-auto lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                    {restOfTeam.map((value, index) => (
                        
                            <div key={index + 1} className="bg-no-repeat h-72 rounded-md sm:ml-7 sm:mt-4 lg:w-[20vw] py-6 bg-cover shadow-lg" style={{ backgroundImage: `url(${value.imageUrl})` }}>
                            
                            <div className="bg-repeat w-[44vh] h-[24vh] items-center flex flex-wrap text-customBrown ml-52 mt-28 rounded-md" style={{ backgroundImage: `url(${img})` }}>
                            <div className="mx-12">
                            <h1 className="text-center text-lg font-semibold">{value.name}</h1>
                            <h1 className="text-center text-xl">{value.designation}</h1>
                            <h1 className="text-center">{value.email}</h1>
                                <h1 className="text-center">{value.phoneNO}</h1>
                                </div>
                                </div>
                            </div>
                            
                    ))}
                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <Quote />
            </div>
        </>
    );
}
