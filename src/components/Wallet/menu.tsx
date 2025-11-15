const Menu = ({data}) => {
  return <div className={`${data?.selected ? "bg-[#10A5E7] text-white rounded-xl" : "text-[#93949D]"} cursor-pointer py-2 px-3`}>
      {data?.name}
  </div>
}
export default Menu;