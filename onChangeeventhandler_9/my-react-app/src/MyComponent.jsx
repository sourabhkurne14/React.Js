import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }

    function handleComment(e){
        setComment(e.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return (
        <div>
            {/* For Name */}
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name} </p>

            {/* For Quantity */}
            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity} </p>

            {/* For Comment */}
            <textarea value={comment} onChange={handleComment} placeholder='Enter delivery instruction'/>
            <p>Comment: {comment} </p>

            {/* For Payment */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value="" >Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Masterard">Masterard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment} </p>

            <label>
                <input type="radio" value="Pick Up" 
                        checked= {shipping === "Pick Up"} 
                        onChange={handleShippingChange} />
                Pick Up
            </label> <br />
            <label>
            <input type="radio" value="Delivery" 
                        checked= {shipping === "Delivery"} 
                        onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping} </p>
        </div>
    )

}

export default MyComponent