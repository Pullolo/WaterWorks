export const nodeData: Node[] = [
    { id: '1', type: 'custom-node', position: { x: 600, y: 300 }, data: { label: 'Oczyszczalnia wielka', type: 'cln', created: '1999-07-11T23:20:21.817Z', error: false } },
    { id: '2', type: 'custom-node', position: { x: 570, y: 500 }, data: { label: 'Źródło czerwone', type: 'src #de5454', created: '2020-05-12T23:50:21.817Z', error: true } },
    { id: '3', type: 'custom-node', position: { x: 900, y: 250 }, data: { label: 'Stacja przemysłowa', type: 'sta', created: '2017-02-14T23:53:21.817Z', error: false } },
    { id: '4', type: 'custom-node', position: { x: 1150, y: 350 }, data: { label: 'Oczyszczalnia mała', type: 'cln', created: '2002-12-12T23:50:21.817Z', error: false } },
    { id: '5', type: 'custom-node', position: { x: 970, y: 550 }, data: { label: 'Źródło zielone', type: 'src #63b878', created: '2021-05-22T23:50:21.817Z', error: true } },
]

export const data: WaterWorksData[] = nodeData.map((el) => {
    return {
        id: Number(el.id),
        name: el.data.label,
        type: getType(el.data.type.split(" ")[0]),
        created: el.data.created,
        status: el.data.error ? "ERROR" : "OK"
    }
})

export interface Node{
    id: string
    type: 'custom-node'
    position: {x: number, y: number}
    data: NodeData
}

interface NodeData{
    label: string
    type: string
    created: string
    error: boolean
}

export interface WaterWorksData{
    id: Number
    name: string
    type: string
    created: string
    status: "OK" | "ERROR"
}

function getType(type: string) : string {
    switch(type){
        case "cln":
            return "OCZYSZCZALNIA";
        case "src":
            return "ŹRÓDŁO";
        case "sta":
            return "STACJA";
        default:
            return "INNE";
    }
}