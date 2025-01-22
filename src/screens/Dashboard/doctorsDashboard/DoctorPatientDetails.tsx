import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";

const DoctorPatientDetails = (props) => {
    const patient = props.patient;

    console.log(patient);

    return (
        <div className="flex flex-col">
            {/* Patient details */}
            <div className="flex justify-evenly items-center flex-col md:flex-row px-8 py-2 gap-4">
                <div className="relative">
                    <img 
                        src={patient.pic} 
                        className="w-36 h-36 lg:w-52 lg:h-52 object-cover rounded-xl" 
                    />
                    <div className="absolute bottom-2 w-full text-xl flex  justify-between items-center py-1 text-gray-950 font-bold px-4 bg-opacity-50 backdrop-blur-sm">
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                            <LuPhoneCall />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                            <MdOutlineMessage />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly gap-1 text-xl text-gray-800 font-bold">
                    <div className="max-w-60 text-lg bg-gray-300 p-2 rounded-lg">
                        <h1>{patient.name}</h1>
                        <h2>Age: {patient.age}</h2>
                        <h2>Gender: {patient.gender}</h2>
                    </div>
                    {/* Detailed diagnosis */}
                    <div className="max-w-60 text-lg bg-gray-300 p-3 rounded-lg">
                        <h1 className="text-xl font-semibold text-gray-800">Detailed Diagnosis</h1>
                        <p className="text-sm text-gray-600">{patient.detailedDisease}</p>
                    </div>
                </div>
            </div>

            {/* Test & treatment section */}
            <div className="relative flex gap-4 justify-evenly  flex-col lg:flex-row px-8 py-4">
                {/* Test */}
                <div className="flex flex-col items-center gap-2 min-w-40  p-2 h-30 bg-gray-300 rounded-xl">
                    <h1 className="text-lg font-semibold text-gray-800 ">Test</h1>
                    {patient.tests.map((test) => (
                        <div 
                            key={test}
                            className="bg-gray-200 flex justify-center items-center px-2 py-1 rounded-full w-fit text-xs gap-2"
                        >
                            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                            <h1 className="text-gray-800">{test}</h1>
                        </div>
                    ))}
                </div>

                {/* Treatment */}
                <div className="flex flex-col items-center gap-2 min-w-40  p-2 max-h-30 bg-gray-300 rounded-xl">
                    <h1 className="text-lg font-semibold text-gray-800">Treatment</h1>
                    {patient.treatments.map((treatment) => (
                        <div 
                            key={treatment}
                            className="bg-gray-200 flex justify-center items-center px-2 py-1 rounded-full w-fit text-xs gap-2"
                        >
                            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                            <h1 className="text-gray-800">{treatment}</h1>
                        </div>
                    ))}
                </div>

                {/* next visit */}
                <div className="flex flex-col items-center gap-2 min-w-40  p-2 bg-gray-300 rounded-xl">
                    <h1 className="text-lg font-semibold text-gray-800">Next Visit</h1>
                        <div 
                            className="bg-gray-200 flex justify-center items-center px-2 py-1 rounded-full w-fit text-sm gap-2"
                        >
                            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                            <h1 className="text-gray-800">{patient.date}</h1>
                        </div>
                        <div 
                            className="bg-gray-200 flex justify-center items-center px-2 py-1 rounded-full w-fit text-sm gap-2"
                        >
                            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                            <h1 className="text-gray-800">{patient.form}</h1>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPatientDetails;
