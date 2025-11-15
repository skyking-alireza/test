import Plus from "../../assets/Plus 2.svg"

const Button = () => {
  return<>
    <div className={'bg-[#10A5E7] absolute bottom-0 w-full flex items-center justify-center py-[18px] gap-x-1.5 rounded-t-[18px] cursor-pointer'}>
           <p className={'text-lg text-white'}> افزودن تور</p>
        <img src={Plus} alt="Plus" />
    </div>
  </>
}
export default Button;