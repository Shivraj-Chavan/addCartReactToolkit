import React from 'react'
import { useSelector } from 'react-redux'
export default function Cart() {

   const  items=useSelector((state)=>state.Mycart)

  return (
    <div>
         <h1>My Cart</h1>

            <table className='table table-bordered '>

            <tr>
                <td>Product Image</td>
                <td>Product title</td>
                <td>Product Price</td>
            </tr>
            {
                items.map((value,index)=>{
                    return(
                        <tr>
                            <td><img className='img-fluid' style={{height:"100px",width:"100px"}} src={value.image}/></td>
                            <td><h1>{value.title}</h1></td>
                            <td><h1>{value.price}</h1></td>
                        </tr>
                    )
                })
            }


            </table>


    </div>
  )
}
