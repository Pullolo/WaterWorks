import Link from 'next/link'
import styles from './page.module.css'

export default function Admin(){
    return(
        <>
        <div className={styles.centerHalf}>
            <div>Welcome to the admin page</div>
            <div style={{display: 'flex', alignItems: 'center'}}><Link className={styles.linkButton} href={'/admin/dashboard'}>Dashboard</Link><Link className={styles.linkButton} href={'/admin/waterworks'}>Visualisation</Link></div>
        </div>
        
        </>
    )
}