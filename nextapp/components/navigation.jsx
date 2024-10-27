export default function Navigation() {
    const buttonStyle = "m-3 relative overflow-hidden rounded-md bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"


    return (
        <>
            <div className="m-4 ">
                <a href="/" className={buttonStyle}>Home</a>
                <a href="/notes" className={buttonStyle}>notes</a>
            </div>
        </>
    )
}