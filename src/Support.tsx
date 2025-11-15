import Header from "./components/Support/Header.tsx";
import Message from "./components/Support/Message.tsx";
import NewTicket from "./components/Support/NewTicket.tsx";
import {useState} from "react";
import Modal from "./components/Support/Modal.tsx";
const messages = [
    {title : 'مشکل در بستن پروژه', status : "پاسخ داده شده",date : "امروز"},
    {title : 'مشکل در بستن پروژه', status : "پاسخ داده شده",date : "امروز"},
    {title : 'مشکل در بستن پروژه', status : "در انتظار پاسخ",date : "امروز"},
    {title : 'مشکل در بستن پروژه', status : "بسته شده",date : "امروز"},
]
const Support = () => {
    const [modal, setModal] = useState(false)
    return <>
        <Header />
        <div className={"flex flex-col gap-y-3 px-5 py-9 items-center overflow-y-auto"}>
            {messages.map((message, index) => (
                <Message key={index} data={message} />
            ))}
        </div>
        <NewTicket setModal={setModal} />
        {modal ? <Modal setModal={setModal} /> : null}
    </>
}
export default Support;