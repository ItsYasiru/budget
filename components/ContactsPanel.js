import Image from "next/image";
import styles from "./ContactsPanel.module.sass";

function ContactCard({ contact }) {
    const { name, avatar = "profile_picture.jpg", email, phone } = contact;
    return (
        <div className={styles.ContactCard} title={name}>
            <span className={styles.avatarContainer}>
                <Image
                    src={`/cdn/avatars/${avatar}`}
                    alt='Avatar'
                    width='50px'
                    height='50px'
                />
            </span>
            <span className={styles.details}>
                <a style={{ fontSize: "18px", fontWeight: 500 }} href=''>
                    {name}
                </a>
                <a href=''>
                    <i className='fa-solid fa-envelope' />
                    {email}
                </a>
                <a href=''>
                    <i className='fa-solid fa-phone' />
                    {phone}
                </a>
            </span>
        </div>
    );
}

function ContactsPanel({ contacts }) {
    return (
        <div className={styles.ContactsPanel}>
            <h1>Contacts</h1>
            <div className={styles.inner}>
                {contacts.map((contact, i) => (
                    <ContactCard key={i} contact={contact} />
                ))}
            </div>
        </div>
    );
}

export default ContactsPanel;
