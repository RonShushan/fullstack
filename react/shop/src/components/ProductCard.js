import React from 'react'
import './Components.css'

function ProductCard(props) {
    //./img/1.png
    let imgUrl = "./img/"+props.product.id + "." + props.product.imageType;
  return (
        <div className="card mainCard col-4" >
            <div className="imgCardDv">
                <img className="card-img-top imgCard" src={imgUrl} alt="Card image cap" />
            </div>
           
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text"> {props.product.price} ש"ח</p>
                <a href="#" className="btn btn-primary" onClick={()=>props.addToBasket(props.product)}>AddTobasket</a>
            </div>
        </div>
  )
}

export default ProductCard