"use client"
import { CSSProperties, useEffect, useState } from "react"
import styles from './page.module.css'

export default function Display({name, data, color, textColor, size, error} : {name: string, data: number, color: string, textColor: string, size?: number, error?: boolean}){
    const [errorVisible, setErrorVisible] = useState(false);

    useEffect(() => {
        if (error) {
            const interval = setInterval(() => {
                setErrorVisible((old) => old ? false : true)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [error])

    const style : CSSProperties = {
        backgroundColor: errorVisible ? '#ff1e00' : color,
        color: errorVisible ? 'black' : textColor,
        width: `${size}px`,
        height: `${size ? size-size/10 : size}px`
    }

    const font1 : CSSProperties = {
        fontSize: `${size ? size-size/1.2 : size}px`
    }

    const font2: CSSProperties = {
        fontSize: `${size ? size-size/1.07 : size}px`
    }

    return (
        <div className={styles.display} style={style}>
            <div style={font1}>{data}</div>
            <div style={font2}>{name}</div>
        </div>
    )
}

