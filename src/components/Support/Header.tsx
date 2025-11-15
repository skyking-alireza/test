import ArrowRight from "../../assets/Arrow - Right 2 1.svg"
import Notification from "../../assets/Notification.svg"
import Headphone from "../../assets/Headphone fill.svg"
import {Link} from "react-router-dom";
const Header = () => {
  return<div className={"bg-white px-5 flex items-center justify-between py-3.5 gap-x-3.5"}>
      <div className={"flex gap-x-3 items-center justify-between text-[18px] font-medium"}>
          <Link to={"/support"} >
              <div className={"relative"}>
                  <img className={"mx-auto"} src={Headphone} alt="Headphone" />
              </div>
              <p className={"text-[#10A5E7]"}>پشتیبانی</p>
          </Link>
          <Link to={"/notifications"} >
              <div className={"relative"}>
                  <div className={"bg-[#F25267] absolute p-1 leading-1.5 right-3 -top-3 rounded-full text-[9px] text-white"}>1 </div>
                  <img className={"mx-auto"} src={Notification} alt="Notification" />
              </div>
              <p className={"text-[#93949D]"}>اعلان ها</p>
          </Link>
      </div>
      <img src={ArrowRight} alt="arrow" />
  </div>
}
export default Header;