import React, {useState} from 'react'

function SauComE() {
  const [stuName,setStuName] =  useState('??? ????')
  const [midTerm,setMidTerm] =  useState(0)
  const [final,setFinal] =  useState(0)
  const [total,setTotal] =  useState(0)
  const [grad,setGrad] =  useState('?')

 const handleChangeOfName = (v) =>{
    setStuName(v.target.value)
 }

 const handleChangeOfMid = (v) =>{
    setMidTerm(v.target.value)
 }

 const handleChangeOfFinal = (v) =>{
    setFinal(v.target.value)
 }

 const calScore = (v) =>{

    setTotal(parseFloat(midTerm) +parseFloat(final))

    calGrad(parseFloat(midTerm) +parseFloat(final))
 }

 const calGrad = (v) =>{
    if(v >80){
        setGrad('A')
    }else if(v >70){
        setGrad('B')
    }else if(v >60){
        setGrad('C')
    }else if(v > 50){
        setGrad('D')
    }else if(v <= 50){
        setGrad('F')
    }
 }






  return (
    <>
    <h1>แสดงผลการเรียน</h1>
    <hr/>
    ป้อนชื่อ : <input onChange={handleChangeOfName}  type='text' placeholder='ชื่อ-สกุล'/><br/><br/>
    ป้อนกลางภาค : <input onChange={handleChangeOfMid}  type='number' placeholder='0.00'/><br/><br/>
    ป้อนปลายภาค : <input onChange={handleChangeOfFinal}  type='number' placeholder='0.00'/><br/><br/>
    <button onClick={calScore} >คำณวน</button>&nbsp;&nbsp;<button>ยกเลิก</button>
    <hr/>
    คุณ: {stuName}<br/>
    คะแนนกลางภาค: {midTerm}<br/>
    คะแนนปลายภาค: {final}<br/>
    คะแนนรวม: {total}<br/>
    คะแนนเกรดที่ได้:{grad} <br/>
    </>
  )
}

export default SauComE