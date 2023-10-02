import newsPaperLogo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center my-12 space-x-4 ">
            <img className=" mx-auto" src={newsPaperLogo} alt="" />
            <p className=" text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#706F6F] ">{moment().format("dddd, MMMM D, YYYY ")} </p>

        </div>
    );
};

export default Header;