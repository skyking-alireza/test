import Header from "./components/Notifications/Header.tsx";
import Notify from "./components/Notifications/Notify.tsx";
const notifications = [
    {title : "خرید دروبین",date : new Date(),more : false , notify : true , description : "محمد انتظاری ،  شما دوربین 360 درجه را تهیه کردید ،پس از دریافت دوربین ، میتوانید مشخصات خود را روی نقشه ثبت کنید"} ,
    {title : "انتشار تور",date : new Date(),more : true , notify : false , description : "محمد انتظاری ، تور شما منتشر شد\n" +
            "برای استفاده از آن به صفحه تورهای من  مراجعه کنید"} ,
    {title : "رد  تور",date : new Date(),more : false , notify : false , description : "محمد انتظاری ، تور شما به دلیل ... رد شد ، هزینه آن به کیف پول شما بازگشت داده شد . برای مشاهده تور کلیک کنید"} ,
    {title : "پایان اعتبار تور",date : new Date(),more : false , notify : false , description : "محمد انتظاری ، اعتبار تور شما تمام شد ، برای مشاهده تور  ضربه بزنید "} ,
    {title : "خوش آمدید",date : new Date(),more : false , notify : false , description : "محمد امین عزیز خوش آمدید ، میتوانید از راهنمای‌اولیه شروع کنید"} ,
]
const Notifications = () => {
  return <>
    <Header />
    <div className={"flex flex-col gap-y-3 px-5 py-9 items-center"}>
        {notifications.map((item, index) => (
            <Notify data={item} key={index} />
        ))}
    </div>
  </>
}
export default Notifications;