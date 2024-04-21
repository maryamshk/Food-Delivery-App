import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/product', {
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      }
    });

    response = await response.json();
    const category = response.category;
    const product = response.product;
    setFoodCategory(category);
    setFoodItem(product);

  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
              />
              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button> */}
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?burger"
              className="d-block w-100" style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?pastry"
              className="d-block w-100" style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?barbeque"
              className="d-block w-100" style={{ filter: "brightness(30%" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <div className="container">
        {
          foodCategory == []
            ?
            ""
            : foodCategory.map((data) => {
              return (
                <div className='mb-3 row'>
                  <div key={data._id} className='fs-3 m-3'>{data.name}</div>
                  <hr></hr>
                  {foodItem == [] ? "" : foodItem.filter((item) =>
                    (item.CategoryName === data.name) && (item.name.toLowerCase().includes(search.toLowerCase()))
                  ).map((filterItems) => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card foodName={filterItems.name}
                          option={filterItems.options[0]}
                          imgSrc={filterItems.img}
                        ></Card>
                      </div>
                    )
                  })
                  }
                </div>
              )
            })

        }
      </div >
      <div>
        <Footer />
      </div>
    </>
  );
}
