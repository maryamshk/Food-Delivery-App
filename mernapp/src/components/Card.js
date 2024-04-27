import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {
  const data = useCart();
  let dispatch = useDispatchCart();
  let options = props.option;
  let priceOptions = Object.keys(options)
  const priceRef = useRef();
  const [quantity, setaQuantity] = useState(1);
  const [size, setSize] = useState("")


  let finalPrice = quantity * parseInt(options[size])
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size })
    console.log(data)
  }

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.foodName}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success" onChange={(e) => { setaQuantity(e.target.value) }}>
                {Array.from(Array(6), (e, i) => {
                  //second arg (e,i) is a mapping function that's applied to each element of the newly created array.
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                {
                  priceOptions.map((data) => {
                    if (data === "_id") {
                      return null; // Skip rendering this option
                    } else {
                      return <option key={data} value={data}>{data}</option>;
                    }
                  })
                }
              </select>

              <div className="d-inline h-100 fs-5">${finalPrice}</div>
              <hr></hr>
              <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div></div>
  )
}
