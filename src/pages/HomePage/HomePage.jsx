import Logo from "../../assets/images/favicon.png";
import DataTable from "../../components/DataTable";


const HomePage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#FFF5DB] to-[#C7D9A7] pb-[7rem] flex flex-col items-center">
        <div className="flex items-center justify-center ">
          <img src={Logo} alt="Logo" className="md:w-[150px] sm:w-[100px] w-[100px]" />
        </div>

        <DataTable />

    </div>
  )
}

export default HomePage
