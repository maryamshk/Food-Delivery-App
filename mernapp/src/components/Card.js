import React from 'react'

export default function Card(props) {
  let options = props.option
  let priceOptions = Object.keys(options)

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  //second arg (e,i) is a mapping function that's applied to each element of the newly created array.
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
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

              <div className="d-inline h-100 fs-5">total price</div>
            </div>
          </div>
        </div>
      </div></div>
  )
}
