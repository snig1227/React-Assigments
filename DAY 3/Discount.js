import { useState } from "react"
 
function Discount()
{
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [result,setResult]=useState("");
 
    function buttonClick()
    {
        if(quantity <10)
        {
            setResult("Price after discount = "+ quantity * price);
        }
        else if(10<quantity <20)
        {
            setResult("Price after discount = "+ quantity * price*0.95);
        }
        else if(20<quantity <30)
        {
            setResult("Price after discount = "+ quantity * price*0.90);
        }
        else
        {
            setResult("Price after discount = "+ quantity * price*0.85);
        }
    }
    return(
        <>
        <h3>Product Details with Discount</h3>
        <hr/>
        <fieldset>
        <legend>Enter product details</legend>
        PName: <input type="text" value={pname} onChange={ (e) => setPname(e.target.value) }  />    
        <br></br>
        Pprice : <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) }  />    
        <br></br>
        Pquantity: <input type="text" value={quantity} onChange={ (e) => setQuantity(e.target.value) }  />    
        <br></br>
        <input type="button" onClick={buttonClick} value="Total"></input>
        <h1>{result}</h1>
        </fieldset>
       
        </>
    )
}
 
export default Discount;