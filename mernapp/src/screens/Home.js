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
    setFoodItem(response);

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
          foodItem == []
            ?
            ""
            : foodItem.map((data) => {
              return (
                <div>"ugh"</div>
              )
            })

        }
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
