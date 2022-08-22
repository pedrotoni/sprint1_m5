function Card(props) {
    return(
        <div className="card">
              <img className="card-img" src={props.image}></img>
              <h5>{props.name}</h5>
                <div className="info">
                  <p className="product-description">
                    {props.description}
                  </p>
                  <p className="former-price">
                    {`De: R$ ${props.formerPrice.toFixed(2).replace('.',',')}`}
                  </p>
                  <h4 className="current-price">
                    {`Por: R$ ${props.currentPrice.toFixed(2).replace('.',',')}`}
                  </h4>
                  <p className="installment-payment">
                    {`ou ${props.installmentsAmount}x de R$ ${props.installmentValue.toFixed(2).replace('.',',')}`}
                  </p>
                  <input type="submit" className="buy-button" value="Comprar"></input>
                </div>
        </div>
    )
}

export default Card;