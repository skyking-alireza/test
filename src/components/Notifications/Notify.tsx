import Profile from "../../assets/profile.svg"
const Notify = ({data}) => {
  return <div className={"bg-white p-5 rounded-[20px] flex gap-x-3 max-w-sm w-full justify-end"}>
      <div className={"flex flex-col w-full"}>
          <div className={"flex pb-1 justify-between gap-x-8" }>
              <p className={"text-[#93949D] text-sm font-medium"}>{new Intl.DateTimeFormat("fa",{  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false}).format(data.date) }</p>
              <p className={"text-[#4E4E56] font-bold"}>{data.title}</p>
          </div>
          <div>
              <p className={"text-[#93949D] text-sm font-medium text-end"}>
                  {data.description}
              </p>
              {data.more ?

                  <div className={"bg-[#10A5E7] px-5 py-2 rounded-xl text-white w-fit mt-3 cursor-pointer"}>
                      مشاهده تور
                  </div>
                  : ""
              }
          </div>

      </div>
      <div className={"relative"}>
          {data.notify ? <div className={"bg-[#F25267] size-2 rounded-full absolute right-2 top-1.5"}></div> : "" }
          <img src={Profile} alt="profile picture"/>
      </div>
  </div>
}
export default Notify