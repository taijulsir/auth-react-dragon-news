
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#D72050] text-white">Breaking</button>
            <Marquee pauseOnHover= {true} speed={100} >
                <Link className="mr-3" to='/'>Match Highlights: Germany vs Spain — as it happened</Link>
                <Link className="mr-3" to='/'>Match Highlights: Germany vs Spain — as it happened</Link>
                <Link className="mr-3" to='/'>Match Highlights: Germany vs Spain — as it happened</Link>
                <Link className="mr-3" to='/'>Match Highlights: Germany vs Spain — as it happened</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;