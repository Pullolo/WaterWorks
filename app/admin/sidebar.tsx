import Button from './button'
import styles from './page.module.css'

export default function Sidebar(){
    return (
        <nav className={styles.nav}>
            <div className={styles.navWrapper}>
                <div className={styles.sect}>
                    <Button icon='/icons/home.png' href='/admin/' type='top'/>
                    <Button icon='/icons/dashboard.png' href='/admin/dashboard' />
                    <Button icon='/icons/watertap.png' href='/admin/waterworks' />
                </div>
                <div className={styles.sect}>
                    <Button icon='/icons/logout.png' href='/' type='bottom' />
                </div>
            </div>
        </nav>
    )
}