import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Myself() {
  return (
    <div id="my-self">
      <div className="self-name">Thien</div>
      <div className="self-profile">
        <img
          src="/public/images/user.png"
          alt="My Profile Image"
          className="self-image"
        />
        <h4 className="my-fullname">Nguyen Si Thien</h4>
        <span className="self-mail">nsthien2109@gmail.com</span>
      </div>
      <div className="self-info-list">
        <div className="self-info">
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          21-09-2001
        </div>
        <div className="self-info">
          <FontAwesomeIcon icon={faPhone} className="icon" />  
          0705459542
        </div>
        <div className="self-info">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />  
          Ngu Hanh Son, Da Nang
        </div>
      </div>
    </div>
  );
}
