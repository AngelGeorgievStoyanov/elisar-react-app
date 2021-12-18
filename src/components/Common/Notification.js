import { useNotificationContext } from "../contexts/NotificationContext";


import './Notification.css'


const Notification = () => {

    const{notification, hideNotification}=useNotificationContext();

    if(!notification.show){
        return null;
    }


    return (
        <div className="notification">
            <h3>{notification.type}</h3>
            <h2>{notification.message}</h2>
        </div>
    )

}

export default Notification;