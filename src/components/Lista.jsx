import { db } from "../data/db"
import Card from "./Card"

function Lista(){
    return(
        <>
        { db.map(producto => (
            <Card key={producto.id} 
                producto={producto} 
            />
        )) } 
        </>
    )

}
export default Lista









