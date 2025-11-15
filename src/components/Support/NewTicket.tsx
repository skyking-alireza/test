import Edit from "../../assets/Edit 2.svg"
const NewTicket = ({setModal}) => {
    return <div onClick={()=>{setModal(true)}} className={"absolute bg-[#10A5E7] flex gap-x-1.5 rounded-[18px] px-8 py-5 bottom-9 right-5 cursor-pointer "}>
        <p className={"text-[#F7F7F8]"}>تیکت جدید</p>
        <img src={Edit} alt="Edit Ticket" />
    </div>
}
export default NewTicket;