import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Button({icon, type, href} : {icon : string, type? : string, href: string}){
    const img = () => {
        return (
            <Image src={icon} alt='' width={35} height={35}/>
        )
    }

    const fun = () => {
        switch (type){
            case "top":
                return(
                    <>
                        <div className={styles.button}>{img()}</div>
                        <hr className={styles.hr} />
                    </>
                )
            case "bottom":
                return(
                    <>
                        <hr className={styles.hr} />
                        <div className={styles.button}>{img()}</div>
                    </>
                )
            default:
                return(
                    <div className={styles.button}>{img()}</div>
                )
        }
    }

    return (
        <>
        <Link href={href}>
        {fun()}
        </Link>
        </> 
    )

    
}
