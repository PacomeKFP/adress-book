import ContactInfo from "../components/ContactInfo";
import ContactsList from "../components/ContactsList";
import Header from "../components/Header";
import Myself from "../components/Myself";

export default function AdressBook() {
  return (
    <main>
      <Myself />

      <div id="center">
        <Header />

        <div id="content">
          <ContactsList />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}
