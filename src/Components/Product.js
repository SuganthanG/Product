import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Product.css'


const Product = () => {

  const [product, setProduct] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
    const result = await fetch('https://uiexercise.onemindindia.com/api/Product')
    const jsonResult = await result.json()
    var finalValue = jsonResult.filter((x) => x.availableQuantity >= 1 &&  x.productName != null && x.productName.length > 0)
    setProduct(finalValue)
    }
    fetchData();
  }, [])


  const handleclick = async (item) => {
      console.log("item", item)

      const sendData = await axios.post("https://uiexercise.onemindindia.com/api/OrderProducts", item)
      .then((res) => {
        console.log("res", res)
      }) 


  }

 

return(
              <div className='Product'>
                
                <table>
                  
                    <thead>
                        <tr>
                          <th>ProductName</th>
                          <th>productId</th>
                          <th>availableQuantity</th>
                          <th>Order</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        {product.map((item,index)=> {
                            return <tr key={index}>
                               <td >{item.productName}</td>
                              <td>{item.productId}</td>
                              <td>{item.availableQuantity}</td>
                             <td><button onClick={(e) => handleclick(item)} >AddItem</button></td> 
                            </tr>
                        })}
                        {/* <tr>
                         
                          <td >{item.productName}</td>
                          <td>{item.productId}</td>
                          <td>{item.availableQuantity}</td>
                          <td><button onClick={(e) => handleclick(item)} >+</button></td>
                         
                        </tr> */}
   
                    </tbody>
                </table>
                
                
              </div>
            )
          
    
            }
export default Product;



