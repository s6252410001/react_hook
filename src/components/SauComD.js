import React from "react";

export const SauComD = (props) =>{
    const{value1} = props
    const valueShow = value1.map( (value)=>{return (<>{value}&nbsp;</> )})
    return(
        <>
        <h1>Hello...2023 {valueShow[0]} {valueShow[1]} {valueShow[2]}</h1>
        </>
    )
}