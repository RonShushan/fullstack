import React, { Component } from 'react';
import Basket from '../components/Basket';
import ProductCard from '../components/ProductCard';
import './Shop.css'
class Shop extends Component {

    state = { 
        products:[
            {id:1,name:"חלב",price:7,qnt:1,imageType:"png"},
            {id:2,name:"קולה",price:10,qnt:1,imageType:"jpg"},
            {id:3,name:"במבה",price:5,qnt:1,imageType:"jpg"},
            {id:4,name:"גבינה צהובה",price:17,qnt:1,imageType:"jpg"},
            {id:5,name:"לחם",price:12,qnt:1,imageType:"png"},
            {id:6,name:"קפה",price:34,qnt:1,imageType:"jpg"},
        ],
        filterProducts:[],
        basket:[],
        totalBasket:0
    }
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.setState({filterProducts:this.state.products})
    }

    addToBasket = (product) =>{
        console.log("Product : " , product)
        let basket = this.state.basket;
        let exsist = basket.find(prod=>prod.id == product.id);

        if(exsist){
            exsist.qnt++;
        }else{
            basket.push(product);
        }
       
        console.log(basket)
        this.calculateTotal();
        this.setState({basket})    
    }

    calculateTotal = ()=>{
        let sum = 0;
        this.state.basket.map(product=>{
            sum += product.price * product.qnt;
        })

        this.setState({totalBasket:sum})  
    }

    SearchInputChange(event){
        console.log(event.target.value)
        let filter = this.state.products.filter(product=> product.name.startsWith(event.target.value))
        this.setState({filterProducts:filter})
    }
   
    render() { 
        return ( 
            <div className='row'>
                <div className='col-9'>
                    <div className="form-group p-1">
                        <input type="text" onChange={(e)=>this.SearchInputChange(e)} className="form-control searchInput" id="searchInput" placeholder="חפש מוצר" />
                    </div>
                    <div className='row'>
                        {this.state.filterProducts.map(product=> <ProductCard key={product.id} product={product} addToBasket={this.addToBasket}  />) }
                    </div>
                </div>
                <div className='col-3'>
                    <Basket products={this.state.products} basket={this.state.basket}/>
                    <hr/>
                    <div>Total : {this.state.totalBasket}</div>
                </div>
            </div>
         );
    }
}
 
export default Shop;