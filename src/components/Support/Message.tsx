import Profile from "../../assets/profile-headphone.svg"
const Message = ({data}) => {
  return <div className={"bg-white p-5 rounded-[20px] flex gap-x-3 max-w-sm w-full justify-end"}>
      <div className={"flex flex-col w-full"}>
          <div className={"flex pb-1 justify-between gap-x-8" }>
              <p className={"text-[#93949D] text-sm font-medium"}>{data.date}</p>
              <p className={"text-[#4E4E56] font-bold"}>{data.title}</p>
          </div>
          <div>
              <p className={"text-[#93949D] text-sm font-medium text-end"}>
                  {data.status}
              </p>
          </div>

      </div>
      <img src={Profile} alt="profile picture"/>
  </div>
}
export default Message