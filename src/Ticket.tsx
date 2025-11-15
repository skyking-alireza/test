import Header from "./components/Ticket/Header.tsx";
import Message from "./components/Ticket/Message.tsx";
import SendMessage from "./components/Ticket/SendMessage.tsx";

const messages = [
    {
        content: "سلام، دنبال یه آپارتمان یک خوابه توی منطقه‌ی زعفرانیه هستم. می‌تونی کمکم کنی؟",
        sender: false,
        date: "12:15",
        status: "seen"
    },
    {
        content: "بله حتما ممنون. یه سوال دیگه داشتم، این آپارتمان نزدیک مترو هم هست؟",
        sender: true,
        date: "12:15",
        status: "seen"
    },
]
const Ticket = () => {
    return <>
        <Header/>
        <div className={"flex flex-col gap-y-3 px-5 py-9 items-center overflow-y-auto"}>
            {messages.map((msg, index) => (
                <Message data={msg} key={index} />
            ))}
        </div>
        <SendMessage />
    </>
}
export default Ticket;