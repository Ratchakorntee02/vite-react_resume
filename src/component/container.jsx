export default function Container({children}){
    return(
        <div className="max-w-6xl w-[100dvw] mx-auto px-8 mt-5">
            {children}
        </div>
    )
}