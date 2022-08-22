import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx"

function Section2() {

  const [ infoCard, setInfoCard ] = useState([]);
  const [ page, setPage ] = useState([])


  useEffect(() => {
    axios.get("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
    .then((response) => {
      setInfoCard(response.data.products)
      setPage(response.data.nextPage)
    }).catch(() => {
      console.log('Houve um erro com sua requisição.')
    })
  }, []);

  function moreProducts(nextPage) {
    axios.get(`https://${nextPage}`)
    .then((response) => {
      setInfoCard([...infoCard, ...response.data.products])
      setPage(response.data.nextPage)
    }).catch(() => {
      console.log("Houve um erro com sua requisição")
    })
  }

    return(
      <div className="section-2">
         <div className="all-cards">
        {infoCard.map((card) => {
          return (
            <Card
            image={card.image}
            name={card.name}
            description={card.description}
            formerPrice={card.oldPrice}
            currentPrice={card.price}
            installmentsAmount={card.installments.count}
            installmentValue={card.installments.value}
            />
          )
        })}
        </div>
        <div className="button-div">
          <button className="change-page-button" onClick={() => {
            return moreProducts(page)
          }}>Ainda mais produtos aqui!</button>
        </div>
      </div>
    )
  }

  export default Section2;