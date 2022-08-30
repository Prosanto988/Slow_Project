import React from "react"
import './styles.css'
import Card from "./Card"
import Data from "./Data"
import Navbar from "./Navbar"
export default function App(){
    const Dat = Data.map(item =>{
        return(
            <Card
            {...item}
            // title={item.title}
            // location={item.location}
            // Map={item.googleMap}
            // start={item.startDate}
            // end={item.endDate}
            // description={item.description}
            // imgUrl={item.imgUrl}
            />
        )
    })
    return(
        <div>
            <Navbar />
            {Dat}
        </div>
    )
}