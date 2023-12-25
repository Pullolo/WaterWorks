import Sidebar from "./sidebar"
import styles from './page.module.css'
import { Toaster } from "@/components/ui/toaster"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <main className={styles.main}>
                <Sidebar />
                <section className={styles.section}>{children}</section> 
            </main>
            <Toaster />
        </body>
      </html>
    )
  }