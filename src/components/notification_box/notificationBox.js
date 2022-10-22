import "./notificationBox.css"

const notificationBox = ((props)=>{
    return(
        <div>
            <img src={props.picture} />
            <div>
                <div>
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