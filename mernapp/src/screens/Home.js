import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
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
      <div>
        <Carousal />
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
                    item.CategoryName === data.name
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
