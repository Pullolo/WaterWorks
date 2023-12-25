import {
    BaseEdge,
    EdgeLabelRenderer,
    MarkerType,
    getBezierPath,
    useReactFlow,
    EdgeMouseHandler
} from 'reactflow';
import styles from './page.module.css'
import { useState } from 'react';
   
  export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY} : {id: string, sourceX: number, sourceY: number, targetX: number, targetY: number}) {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
    });
    const [buttonString, setButtonString] = useState("❌")
   
    return (
      <>
        <BaseEdge id={id} path={edgePath} markerEnd={MarkerType.ArrowClosed} style={{
            stroke: 'blue'
        }} />
      </>
    );
  }