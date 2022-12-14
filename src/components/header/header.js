import "./header.css"
import { useState } from "react";

const Header = () =>{
    const [notificationNumber, setNotificationNumber] = useState(8);
    const handleClick = (e =>{
        e.preventDefault()
        setNotificationNumber(0)
    })
    return(
        <header>    
            <div className="header__notifications-container">
                <h1>Notifications</h1>
                <div className="notification-number">{notificationNumber}</div>
            </div>
            <a onClick={handleClick} className="mark-as-read">Mark all as read</a>
        </header>
    )
}


export default Header