import Image from "next/image";
import styles from "./NavBar.module.sass";

function LogoRail() {
    return (
        <div className={styles.LogoRail}>
            <a href='#notifications' title='Notifications'>
                <i className='fa fa-solid fa-bell' />
            </a>
            <a href='#messages' title='Inbox'>
                <i className='fa fa-solid fa-inbox' />
            </a>
            <a href='#settings' title='Settings'>
                <i className='fa fa-solid fa-gears' />
            </a>
        </div>
    );
}

function CurrentUser({ data }) {
    const { avatar, name, username } = data;
    return (
        <a href={`/users/${username}`}>
            <span className={styles.CurrentUser}>
                <label>{name}</label>
                <Image
                    src={`/cdn/avatars/${avatar}`}
                    alt='Avatar'
                    width='40px'
                    height='40px'
                />
            </span>
        </a>
    );
}

function NavBar(props) {
    const { userData } = props;
    return (
        <nav className={styles.NavBar}>
            <div className={styles.left}>
                <LogoRail />
            </div>

            <div className={styles.center}>
                <Image alt='Logo' src='/logo.png' width='178px' height='66px' />
            </div>

            <div className={styles.right}>
                <CurrentUser data={userData} />
            </div>
        </nav>
    );
}

export default NavBar;
