import Arrow from "../../assets/Arrow.svg"
import {Link} from "react-router-dom";
const Header = () => {
    return <Link to={"/"} className={"flex items-center px-4 py-9 gap-x-2 justify-end bg-white"}>
        <p className={"text-lg text-[#434349]"}>کیف پول</p>
        <img src={Arrow} alt="Arrow" />
    </Link>
}
export default Header