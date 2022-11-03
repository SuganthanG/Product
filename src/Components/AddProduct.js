import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './AddProduct.css';


function AddProduct(){

    const [userData, setUserData] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData, "userData")
        // const payload = {
        //   "availableQuantity": Number(userData.availableQuantity),
        //   "productId": userData.productId,
        //   "productName": userData.productName,
         
        // }
        //console.log(payload)
    
        // const sendData=fetch('https://uiexercise.onemindindia.com/api/Product',{
        //     method :'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(payload)
        // })
        // .then(data => data.json())
        const sendData1 = await axios.post("https://uiexercise.onemindindia.com/api/Product", userData)
        .then((res) => {
          console.log("Yessss", res)
        }) 
      }
      
      const hanldeChanges = (e) => {
        console.log(e.target.value)
        setUserData( {
          ...userData, [e.target.name] : e.target.value
        }
          
        )
      }
      
    return(
        <div className='div'>
        <form className='AddProduct' onSubmit={(e) => handleSubmit(e)} >
          <input type='text' placeholder='ProductName' value={userData?.productName} name="productName" onChange={hanldeChanges} />
          <input type='text' placeholder='ProductId' value={userData?.productId} name="productId" onChange={hanldeChanges}  />
          <input type='number' placeholder='Quantity' name="AvailableQuantity" value={userData?.availableQuantity} onChange={hanldeChanges} />
          <input type='submit' value="AddProduct"/>
        </form>
      </div>
    )
}
export default AddProduct;