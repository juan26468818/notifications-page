import "./notificationBox.css"

const notificationBox = ((props)=>{
    return(
        <div className="notification-container">
            <img src={props.picture} className="profile-picture"/>
            <div className="info-container">
                <div className="info-second-container">
                    <p className="name">{props.name}</p>
                    <p className="action">{props.action}</p>
                    <p className="place">{props.place}</p>
                </div>
                <p className="time">{props.time} ago</p>
            </div>
        </div>
    )
})

export default notificationBox