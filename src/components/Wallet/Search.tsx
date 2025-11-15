import SearchSVG from "../../assets/Search.svg"
import XSVG from "../../assets/X.svg"

const Search = () => {
  return <label className={'border border-[#10A5E7] relative rounded-[18px] flex justify-center my-3 w-fit mx-auto'}>
      <img className={"absolute left-5 top-1/2 -translate-1/2"} src={XSVG} alt={'close'} />
      <input className={"border-none mx-12 py-5 focus:outline-none text-end"} placeholder={"جستجو "} />
      <img className={"absolute right-5 top-1/2 -translate-1/2"} src={SearchSVG} alt={'Search'} />
  </label>
}
export default Search