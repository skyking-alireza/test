import WalletSvg from "../../assets/Wallet.svg";
import Notification from "../../assets/Notification.svg";
import Menu from "../../assets/menu.svg";


const Header = () => {
    return <div className={"flex py-[22px] px-5 justify-between gap-x-4 bg-white"}>
        <div className={"flex gap-x-4"}>
            <img className={"p-4 cursor-pointer rounded-[18px] border border-[#EEEEF0]"} src={Notification} alt="Notification"/>
            <div className={'relative p-4 cursor-pointer rounded-[18px] border border-[#EEEEF0]'}>
                <span className="absolute right-3 top-3 inline-flex size-2 rounded-full bg-[#F25267]"></span>
                <img src={WalletSvg}
                     alt="Wallet"/>
            </div>

        </div>
        <img className={"p-4 cursor-pointer rounded-[18px] border border-[#EEEEF0]"} src={Menu} alt="menu"/>
    </div>

}
export default Header;