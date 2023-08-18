import notfound from "../images/notfound.svg"
export default function NotFound() {
    return (
        <>
            <div className="container">
                <h3>ไม่พบหน้าเว็ป (404)</h3>
                <img src={notfound} alt="notfound"/>
            </div>
        </>
    )
}