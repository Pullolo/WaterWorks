import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <header><h1 className="text-6xl">Wodociągi</h1><h6 style={{textAlign: 'center', marginTop: '30px'}}>by</h6><h6 style={{textAlign: 'center', marginTop: '20px'}}>Mikołaj Szlosowski</h6></header>
            <Link href={"/admin"} ><div className={styles.login}>Login as Admin</div></Link>
    </main>
  )
}
