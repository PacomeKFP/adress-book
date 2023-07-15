import { faCirclePlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div id="header">
      <h2 className="app-name"> Adress Book</h2>
      <div className="settings">
        <div className="filter">
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
        </div>
        <i className="fa-filter"></i>
        <button><FontAwesomeIcon icon="face-angry" /> New contact</button>
      </div>
    </div>
  );
}
