import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import styles from '../style/Landing.module.css';

function Home() {
    return (
        <div className={styles.Landing}>
            <TopBar />
            <SideBar />
            <main className={styles.main}>
                <h1>StepForward Landing Page</h1>
                {/* Add other content here */}
            </main>
        </div>
    );
}

export default Home;