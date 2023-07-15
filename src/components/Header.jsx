import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div id="header">
      <h2 className="app-name"> Adress Book</h2>
      <div className="settings">
        <div className="filter-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12.8334 12.8333V18.3333L9.16669 20.1667V12.8333L3.66669 4.58333V2.75H18.3334V4.58333L12.8334 12.8333ZM5.87035 4.58333L11 12.2778L16.1297 4.58333H5.87035Z"
              fill="#555555"
            />
          </svg>
        </div>

        <button className="add-contact">
          <FontAwesomeIcon icon={faCirclePlus} className="icon" /> New contact
        </button>
      </div>
    </div>
  );
}
