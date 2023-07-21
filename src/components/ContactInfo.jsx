import { useState } from "react";

export default function ContactInfo() {
  const tabs = [
    {
      state: 0,
      label: "Contact",
    },
    {
      state: 1,
      label: "Work",
    },
    {
      state: 2,
      label: "About",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div id="contact-info">
      <div className="contact-profile">
        <img
          src="/public/images/ava-1.png"
          className="contact-avatar"
          alt="User Contact profil Image"
        />
        <div className="contact-name">Maria Onichan</div>
        <div className="contact-title">Best friend</div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => {
          const key = tab.label + "-tab";
          const class_name = activeTab === tab.state ? "active-tab" : " tab ";
          return (
            <div
              className={"tab-item " + class_name}
              onClick={() => setActiveTab(tab.state)}
              key={key}
            >
              {tab.label}
            </div>
          );
        })}
      </div>

      <div className="contact-details-list">
        <ContactDetail
          title="Phone number"
          subtitle="0902362954"
          trailer="/public/images/phone-fill.svg"
          link="tel"
          color="#89F2A6"
        />
        <ContactDetail
          title="Email Adress"
          subtitle="onichan@gmail.com"
          trailer="/public/images/mail-unread-fill.svg"
          link="mailto:"
          color="rgba(242, 225, 137, 0.66)"
        />
        <ContactDetail
          title="Chat"
          subtitle="marichan"
          trailer="/public/images/chat-1-line.svg"
          color="#7FD1FF"
          link=""
        />
      </div>
    </div>
  );
}

function ContactDetail({ title, subtitle, trailer, link, color }) {
  return (
    <div className="contact-detail">
      <div className="detail-content">
        <div className="detail-title">{title}</div>
        <div className="detail-subtitle">{subtitle}</div>
      </div>
      <div className="trailer" style={{ backgroundColor: color }}>
        <img src={trailer} alt="icon" className="trailer-icon" width="27px" />
      </div>
    </div>
  );
}
