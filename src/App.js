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

  return (
    <div className="App">
      <Header />
      <main>
        <NotificationBox picture={avatarAngela} name="b" action="c" place="d" time="e" />
      </main>
    </div>
  );
}

export default App;
