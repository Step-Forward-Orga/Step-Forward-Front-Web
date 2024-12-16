import styles from '../style/TopBar.module.css';

function TopBar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.logo}>StepForward</div>
            <div className={styles.menu}>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}

export default TopBar;