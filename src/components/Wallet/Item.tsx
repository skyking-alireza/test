import ArrowUp from "../../assets/Arrow - Up 3.svg"
import ArrowDown from "../../assets/Arrow - Down 3.svg"
const Item = ({data}) => {
  return <div className={"p-5 pt-6 bg-white flex justify-between w-fit gap-x-3 rounded-[18px] font-bold"}>
        <div>
            <p className={"text-[#434349]"}> تومان {data.status ? "+" : "-"} {new Intl.NumberFormat("fa").format(data.price) }</p>
            <p className={"text-[#434349]"}>{new Intl.DateTimeFormat("fa",{  day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false}).format(data.date) }</p>
        </div>
        <div className={"flex gap-x-3 items-center"}>
            <p className={"whitespace-nowrap text-[#434349]"}>{data.name}</p>
            {data.status ? <img src={ArrowDown} alt={'arrow-down'} /> : <img src={ArrowUp} alt={'arrow-up'} /> }
        </div>
  </div>
}
export default Item;