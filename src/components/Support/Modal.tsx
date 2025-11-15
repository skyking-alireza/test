import Close from "../../assets/Close 2.svg"
const Modal = ({setModal}) => {
  return<div className={"w-screen h-screen flex justify-center items-center absolute top-0 left-0 right-0 bg-black/40 backdrop-blur-md z-10 "}>
      <div onClick={()=>{setModal(false)}} className={"absolute z-20 w-full h-full"}></div>
      <div className={"z-50 bg-white p-8 rounded-3xl"}>
          <div className={"flex justify-between"}>
              <img onClick={()=>{setModal(false)}} className={"cursor-pointer"} src={Close} alt="Close"/>
              <p className={"text-[#434349] text-xl font-bold"}>ارتباط با پشتیبانی</p>
          </div>
          <div className={"mt-8"}>
              <label className={"flex flex-col gap-y-1.5 text-end"}>
                  <p className={"text-[#4E4E56] text-base font-bold"}>موضوع</p>
                  <textarea className={"resize-none text-sm bg-[#F4F7F9] border border-[#EEEEF0] rounded-[18px] focus:outline-none text-end"}></textarea>
              </label>
          </div>
          <div className={"mt-6"}>
              <label className={"flex flex-col gap-y-1.5 text-end"}>
                  <p className={"text-[#4E4E56] text-base font-bold"}>توضیحات</p>
                  <textarea placeholder={"متن توضیحات خود را وارد کنید..."} className={"resize-none text-sm bg-[#F4F7F9] border border-[#EEEEF0] rounded-[18px] focus:outline-none text-end"}></textarea>
              </label>
          </div>
          <div className={"bg-[#10A5E7] rounded-[18px] text-white text-[18px] font-bold py-3.5 max-w-xs w-full text-center cursor-pointer mt-8"}>
              ارسال
          </div>
    </div>
  </div>
}
export default Modal;