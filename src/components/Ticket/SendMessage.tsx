import Attachment from "../../assets/attachment-01 1.svg"
import Send from "../../assets/send 1.svg"
const SendMessage = () => {
  return <div className={"flex justify-center gap-x-2.5 absolute bottom-0 w-full bg-white py-7"}>
      <div className={"p-4 rounded-[18px] border border-[#EEEEF0] bg-[#F4F7F9]"}>
          <img src={Send} alt={"Send"} />
      </div>
      <label className={"p-4 rounded-[18px] border border-[#EEEEF0] bg-[#F4F7F9]"}>
          <input className={"text-end focus:outline-none"} placeholder={"نوشتن پیام "}/>
      </label>
      <div className={"p-4 rounded-[18px] border border-[#EEEEF0] bg-[#F4F7F9]"}>
          <img src={Attachment} alt={"Attachment"} />
      </div>
  </div>
}
export default SendMessage;