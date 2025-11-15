import Button from "./Button.tsx";
import Menu from "./menu.tsx";
import Search from "./Search.tsx";
import Item from "./Item.tsx";
const menus = [
    {name : "کاهش", selected : false},
    {name : "افزایش", selected : false},
    {name : "همه", selected : true},
]
const items = [
    {name : "انتشار تور", status : false , date : Date.now(), price : 97000000},
    {name : "تمدید تور", status : false , date : Date.now(), price : 97000000},
    {name : "أپلود تصویر", status : false , date : Date.now(), price : 97000000},
    {name : "تکثیر تور", status : false , date : Date.now(), price : 97000000},
    {name : "کارت بانکی", status : true , date : Date.now(), price : 97000000},
]
const Body = () => {
  return<>
      <div className={"-mt-2 font-bold flex flex-col items-center gap-y-0.5 bg-white pb-7 "}>
          <p className={'text-[#434349] text-[26px]'}>
              {new Intl.NumberFormat("fa").format(150000000)}
          </p>
          <p className={"text-[#93949D] text-sm"}>موجودی (تومان)</p>
          <Button />
      </div>

      <div className={"flex gap-x-1 items-center text-[16px] justify-center mt-8"}>
          {menus?.map((e,i)=>{
              return <Menu data={e} key={i} />
          })}
      </div>
      <Search />
      <div className={"flex flex-col gap-y-3 items-center overflow-y-auto"}>
          {items.map((item,i)=>{
              return <Item data={item} key={i} />
          })}
      </div>
  </>
}
export default Body;