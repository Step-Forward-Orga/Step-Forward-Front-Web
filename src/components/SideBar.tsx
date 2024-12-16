import React from 'react';
import Link from 'next/link';
import styles from '../style/SideBar.module.css';

const SideBar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Sidebar</h2>
            <nav>
                <ul>
                    <li><Link href="/exercise">Exercise</Link></li>   { /* accessible if not logged in */}
                    <li><Link href="/calendar">Calendar</Link></li>   { /* accessible if logged in */}
                    <li><Link href="/account">Account</Link></li>   { /* not accessible if logged in */}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;