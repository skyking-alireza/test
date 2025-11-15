import Seen from "../../assets/seen.svg"
const Message = ({data}) => {
    if (data.sender ) {
       return<div className={"text-end w-fit"}>
           <div className={"bg-[#10A5E7] p-5 rounded-[18px] rounded-bl-[5px] flex gap-x-3 max-w-sm w-full justify-end"}>
               <p className={"text-white text-base font-medium"}>{data.content}</p>
           </div>
           <div className={"flex gap-x-1 justify-end"}>
               <p>{data.date}</p>
               <img src={Seen} alt="seen" />
           </div>
        </div>
    }
   return<div className={"text-end w-fit"}>
        <div className={"bg-white p-5 rounded-[18px] rounded-br-[5px] flex gap-x-3 max-w-sm w-full justify-end"}>
            <p className={"text-[#4E4E56] text-base font-medium"}>{data.content}</p>
        </div>
       <p className={"text-start"}>{data.date}</p>

   </div>
}
export default Message