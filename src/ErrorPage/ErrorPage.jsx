import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[600px] text-center flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-semibold" >No Data Found</h1>
            <Link className="btn btn-primary mt-5" to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;