import React from 'react'

export default function Card() {
  return (
    <div>  <div>
      <div class="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">total price</div>
          </div>
        </div>
      </div>
    </div></div>
  )
}
