import React, { useEffect, useState } from 'react'
import {addcart} from "../Store/Cartslice"
import {useDispatch } from 'react-redux'
export default function Product() {

        const dispatch=useDispatch()
    const [data,setdata]=useState([])


    const fun=async()=>{

        const repsonse=await fetch("https://fakestoreapi.com/products/")
         const result=await repsonse.json()

         setdata(result)

    }

    useEffect(()=>{

        fun()

    })



    return (
    <div>
        <h1 className='display-1 text-center'>Product</h1>

        <div className='d-flex flex-wrap justify-content-center'>
        {

            data.map((value,index)=>{

                return(

                    <div className="card m-3" style={{width:"18rem"}}>
                    <img src={value.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.price}</p>
                      <a href="#" className="btn btn-primary" onClick={()=>dispatch(addcart(value))}>Add Cart</a>
                    </div>
                  </div>

                )

            })


        }
</div>

    </div>
  )
}
