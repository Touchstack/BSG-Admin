import NavBar from "../../components/NavBar";
import DataTable from "../../components/DataTable";
import { useState } from 'react';

const HomePage = () => {
  const [usersLength, setUsersLength] = useState(0);

  const handleUsersLengthChange = (length) => {
    setUsersLength(length);
  };

  return (
    <div className="bg-[#F1F2F2] h-screen">
      <NavBar />
      
      {/* Text Area */}
      <div className="flex flex-col mx-[6rem] md:mx-[13rem] lg:mx-[18rem] mb-5">
        <h1 className="text-[1rem] md:text-[1.5rem] lg:text-[2.6rem] font-semibold">
        {usersLength} Subscribers
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-[#70787C]">
          People that subscribed to the waitlist
        </p>
      </div>

      {/* DataTable */}
      <div className="flex items-center justify-center">
         <DataTable onUsersLengthChange={handleUsersLengthChange} />
      </div>
    </div>
  );
};

export default HomePage;
