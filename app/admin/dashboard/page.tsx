"use client"
import Display from './display'
import styles from './page.module.css'
import {columns} from './columns'
import { DataTable } from './DataTable'
import { useState } from 'react'
import {data} from '@/app/data'

export default function DashboardPage(){
    const [selectedColumn, setSelectedColumn] = useState("name")

    return (
        <>
            <div className={styles.displayWrapper}>
                <div className={styles.displaySection}><Display name='Razem' data={data.length} color='#183C4B' textColor='white' /></div>
                <div className={styles.displaySection}>
                    <Display name='Oczyszczalnie' data={data.filter((el) => el.type == 'OCZYSZCZALNIA').length} color='#0C5C7E' textColor='white' />
                    <Display name='Stacji Przemysłowych' data={data.filter((el) => el.type == 'STACJA').length} color='#267763' textColor='white' />
                    <Display name='Źródeł' data={data.filter((el) => el.type == 'ŹRÓDŁO').length} color='#102D77' textColor='white' error={true}  />
                    <Display name='Pozostałych obiektów' data={data.filter((el) => el.type == 'INNE').length} color='#723A37' textColor='white' />
                </div>
            </div>
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={data} selectedColumn={selectedColumn} setSelectedColumn={setSelectedColumn} />
            </div>
            <div className={styles.displaySection}>
                <Display name='Critical Errors' data={data.filter((el) => el.status == 'ERROR').length} color='#F95E5E' textColor='black' size={240} />
                <Display name='Operational' data={data.filter((el) => el.status == 'OK').length} color='#76DD8D' textColor='black' size={240} />
            </div>
        </>
    )
}