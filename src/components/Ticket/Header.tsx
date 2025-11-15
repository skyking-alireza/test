import ArrowRight from "../../assets/Arrow - Right 2 1.svg"
import {Link} from "react-router-dom";
const Header = () => {
  return<div className={"bg-white px-5 flex items-center justify-between py-3.5 gap-x-3.5"}>
      <Link  className={"text-[#434349] px-5 py-3 border border-[#DADADD] rounded-[18px]"} to={"/support"} >
          بستن تیکت
      </Link>
      <div className={"flex gap-x-3 items-center justify-between"}>
          <div className={"text-end"}>
              <p>مشکل در سایت</p>
              <p className={"text-[#10A5E7] text-sm font-medium mt-0.5"}>در انتظار پاسخ</p>
          </div>
          <img src={ArrowRight} alt="arrow" />
      </div>
  </div>
}
export default Header;