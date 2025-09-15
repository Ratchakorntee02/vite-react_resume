export default function Layout({children}) {
    return(
        <div className=" flex flex-col w-[100dvw] min-h-[100dvh] bg-[whitesmoke]">
            {children}
        </div>
    )
}