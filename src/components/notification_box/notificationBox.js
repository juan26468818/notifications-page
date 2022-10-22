import "./notificationBox.css"

const notificationBox = ((props)=>{
    return(
        <div className="notification-container">
            <img src={props.picture} className="profile-picture"/>
            <div className="info-container">
                <div className="info-second-container">
                    <p>
                        <span className="name">{props.name}</span>
                        <span className="action">{props.action}</span>
                        <span className="place">{props.place}</span>
                    </p>
                    
                    
                </div>
                <p className="time">{props.time} ago</p>
            </div>
        </div>
    )
})

export default notificationBox