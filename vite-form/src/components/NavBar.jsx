import { CgAdd } from "react-icons/cg"
import { GoHomeFill } from "react-icons/go"
import { AiOutlineSpotify } from "react-icons/ai"
import { IoIosSearch } from "react-icons/io"
import { Link } from "react-router"


function NavBar() {
    return (
        <div className="bg-black py-3 px-5 flex gap-8 justify-center items-center">
            <Link to={"about"} >
                <div className="bg-white rounded-[100%] h-[40px] w-[40px] border-2 active:border-green-500 flex items-center justify-center text-[30px] ">
                    <AiOutlineSpotify />
                </div></Link>

            <Link to={"/home"}><div className="bg-gray-500 rounded-[100%] h-[40px] w-[40px] flex items-center justify-center text-[30px]  ">
                <GoHomeFill />
            </div></Link>

            <div className="flex items-center justify-center bg-gray-500 py-1 pr-2 rounded-[20px] gap-1 ">
                <IoIosSearch color="white" size={"38px"} />
                <input className="bg-gray-500 px-2 pb-1 border-r-2 border-r-white border-r-solid w-[350px] h-[30px] outline-none " type="text" placeholder="What doyou want to play" />
            </div>

            <Link to={"addsong"} ><div className="flex items-center justify-center bg-gray-500 rounded-[100%] h-[40px] w-[40px] text-[38px] text-black ">
                <CgAdd />
            </div></Link>

            <div className="bg-gray-500 h-[40px] px-3 text-white flex items-center justify-center rounded-md ">
                <p>Login</p>
            </div>

        </div>
    )
}

export default NavBar
