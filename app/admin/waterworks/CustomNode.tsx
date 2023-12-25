"use client"
import { Handle, Position } from 'reactflow';
import styles from './page.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CustomNode({ data, isConnectable } : {data : any, isConnectable : boolean}){
    const [errorVisible, setErrorVisible] = useState(false);

    useEffect(() => {
        if (data.error) {
            const interval = setInterval(() => {
                setErrorVisible((old) => old ? false : true)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [])

    return (
        <div className={styles.node} style={{pointerEvents: 'none', backgroundColor: errorVisible ? '#ff1e00' : getColor(data.type)}}>
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable} 
            />
          <div className={styles.innerNode}>
            <div><Image src={`/nodeIcons/${data.type.split(" ")[0]}.png`} alt={data.type.split(" ")[0]} width={128} height={128} style={{width: '30px', height: '30px'}}></Image></div>
            <div>{data.label}</div>
          </div>
          <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                isConnectable={isConnectable}
          />
        </div>
    );
}

function getColor(type: string){
    switch(type.split(" ")[0]){
        case "cln":
            return '#87c9c6';
        case "src":
            return type.split(" ").length>1 ? type.split(" ")[1] : '#7894ab';
        case "sta":
            return '#8fa7ff';
        default:
            return '#90c2c2';
    }
}