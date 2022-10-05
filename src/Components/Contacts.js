import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
        <div>
        <h1>Contact header</h1>
        <ul>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </ul>
        </div>
    );
  }

export default Contacts