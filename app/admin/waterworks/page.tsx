"use client"
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Edge
} from 'reactflow';
import CustomEdge from './CustomEdge'
import 'reactflow/dist/style.css';
import styles from './page.module.css'
import CustomNode from './CustomNode';
import { useToast } from '@/components/ui/use-toast';
import { nodeData } from '@/app/data';

const rfStyle = {
    backgroundColor: '#d4e3fa',
};
 
const initialNodes = nodeData

const initialEdges = [
    { id: '1->2', type: 'custom-edge', source: '1', target: '2' },
    { id: '1->3', type: 'custom-edge', source: '1', target: '3' },
    { id: '3->2', type: 'custom-edge', source: '3', target: '2' },
    { id: '3->4', type: 'custom-edge', source: '3', target: '4' },
    { id: '4->3', type: 'custom-edge', source: '4', target: '3' },
    { id: '4->5', type: 'custom-edge', source: '4', target: '5' },
];
const edgeTypes = {
  'custom-edge': CustomEdge
}
const nodeTypes = {
    'custom-node': CustomNode
};
const edgeOptions = {
    animated: true,
}

export default function GraphPage(){
    const { toast } = useToast()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [infoVisible, setInfoVisible] = useState(false);
    const [selectedNode, setSelectedNode] = useState("");
    const [infoText, setInfoText] = useState("");
   
    const onConnect = useCallback(
        (connection: any) => {
          const edge = { ...connection, type: 'custom-edge' };
          setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges],
    );

    const nodeClick = (e: any) => {
        const id = e.target.getAttribute("data-id");
        const node = nodes.filter((el) => el.id == id)[0];
        setInfoVisible(true);
        setInfoText("Id: " + node.id +"\nNazwa: " + node.data.label + "\nTyp: " + getObjectType(node.data.type) + "\nUtworzony: " + node.data.created + "\nStatus: " + (node.data.error ? "ERROR" : "OK"));
        setSelectedNode(id);
    }

    const delNode = (e: any) => {
        setNodes((nodes) => nodes.filter((e) => e.id !== selectedNode))
        setInfoVisible(false);
    }

    const info = () => {
        toast({
            title: "To delete nodes or connections",
            description: "Press BACKSPACE",
        })
    }
   
    return (
        <>
            <div onClick={info} style={{ position: 'absolute', top: '30px', right: '30px', width: '30px', height: '30px', backgroundColor: 'white', zIndex: '1000', border: '1px solid black', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 0 20px -3px black'}}>
                i
            </div>
            <div style={{ position: 'absolute', top: '50px', left: '130px', width: '320px', height: '300px', backgroundColor: 'white', zIndex: '1000', border: '1px solid black', borderRadius: '10px', display: infoVisible ? "block" : "none", boxShadow: '0 0 20px -3px black'}}>
                <div className={styles.wrapper}>
                    <div>
                        <div className={styles.infoTop}><button onClick={() => {setInfoVisible(false)}}>×</button></div>
                        <div className={styles.infoContent}>{infoText.split("\n").map((el: string) => {
                            return (
                                <div key={el} className={styles.info}>{el}</div>
                            )
                        })}</div>
                    </div>
                    <div>
                        <div className={styles.infoBottom}><button onClick={delNode}>Usuń</button></div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: '100%' }}>
                <ReactFlow
                fitView={true}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={edgeOptions}
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={nodeClick}
                style={rfStyle}
                >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                </ReactFlow>
            </div>
        </>
    )

    function getObjectType(type: string){
        switch(type.split(" ")[0]){
            case "cln":
                return 'OCZYSZCALNIA';
            case "src":
                return 'ŹRÓDŁO';
            case "sta":
                return 'STACJA';
            default:
                return 'INNE';
        }
    }
}