type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <main className={"bg-[#F4F4F8] h-screen overflow-hidden"}>
                {children}
        </main>
    );
}

