export default function ContactsList() {
  return (
    <div id="contacts-list">
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
}

function UserItem() {
  return (
    <div className="user-item">
      <div className="user-leading">
        <img src="/public/images/img-1.png" alt="" />
      </div>
      <div className="user-item-info">
        <p className="user-info-name">David John</p>
        <p className="user-info-about">Java Developer</p>
      </div>
      <div className="user-phone">0706312495</div>
      <div className="user-mail">jonhdavid@gmail.com</div>
    </div>
  );
}
