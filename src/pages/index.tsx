import styles from '../style/Landing.module.css';
import Link from 'next/link';

function Home() {
    return (
      <div className={styles.Landing}>
      <header className={styles.LandingHeader}>
          <h1>Welcome to StepForward</h1>
          <nav>
              <ul>
                  <li><Link href="/exercise">Exercise</Link></li>   { /* accessible if not logged in */ }
                  <li><Link href="/calendar">Calendar</Link></li>   { /* accessible if logged in */ }
                  <li><Link href="/login">Login</Link></li>         { /* not accessible if logged in */ }
                  <li><Link href="/register">Register</Link></li>   { /* not accessible if logged in */ }
              </ul>
          </nav>
      </header>
  </div>
    );
}

export default Home;