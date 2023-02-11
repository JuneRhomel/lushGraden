import React, { useContext, useState } from 'react'
import Plant1 from "../assets/plant1.jpg"
import "../style/plantcard.css"
import ContextData from "../Context/ContextData"
import Modem from './Modem';
export default function Plantscard() {
    const plants = useContext(ContextData);
    const dispayPlant = plants.slice(0,8)
    const [plantModem,setPlantModem] = useState("")
    // const openPlant =(plantItem) => {
    //     setPlantModem(plantItem)
    // }

    return (
        <div className='all-plants'>
            {dispayPlant.map(item => {
                return (
                    <article className='plant-card' key={item.id}>
                        <div className='plant-img'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='plant-text'>
                            <div>
                                <h3>{item.title}</h3>
                                <small>(${item.originPrize})</small>
                                <b>${item.prize}</b>
                            </div>
                            <button onClick={() => setPlantModem(item)}>Buy Now</button>
                        </div>
                    </article>
                )
            })}
            {plantModem?<Modem value={plantModem}  closeBtn={()=>setPlantModem("")}/> :"" } 
        </div>
    )
}
