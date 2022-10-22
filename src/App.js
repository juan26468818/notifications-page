import './App.css';
import Header from "./components/header/header"
import NotificationBox from './components/notification_box/notificationBox';
import avatarAngela from "./images/avatar-angela-gray.webp"
import avatarAnna from "./images/avatar-anna-kim.webp"
import avatarJacob from "./images/avatar-jacob-thompson.webp"
import avatarKimberly from "./images/avatar-kimberly-smith.webp"
import avatarMark from "./images/avatar-mark-webber.webp"
import avatarNathan from "./images/avatar-nathan-peterson.webp"
import avatarRizky from "./images/avatar-rizky-hasanuddin.webp"
import imageChess from "./images/image-chess.webp"

function App() {
  const actions = {
    reacted: "Reacted to your recent post",
    followed: "followed you",
    joined: "has joined your group",
    message: "sent you a private message",
    commented: "commented on your picture",
    leftGroup: "left the group"
  }
  return (
    <div className="App">
      <Header />
      <main>
        <NotificationBox picture={avatarMark} name="Mark Webber" action={actions.reacted} place="My first tournament today!" time="1m" />
        <NotificationBox picture={avatarAngela} name="Angela Gray" action={actions.followed} place="" time="5m" />
        <NotificationBox picture={avatarJacob} name="Jacob Thompson" action={actions.joined} place="Chess Club" time="1 day" />
        <NotificationBox picture={avatarRizky} name="Rizky Hasanuddin" action={actions.message} place="" time="5 days" />
        <NotificationBox picture={avatarKimberly} name="Kimberly Smith" action={actions.commented} place={imageChess} time="1 week" />
        <NotificationBox picture={avatarNathan} name="Nathan Peterson" action={actions.reacted} place="5 end-game strategies to increase your win rate" time="2 weeks" />
        <NotificationBox picture={avatarAnna} name="Anna Kim" action={actions.leftGroup} place="Chess Club" time="2 weeks" />
      </main>
    </div>
  );
}

export default App;
