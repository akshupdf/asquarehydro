import React from "react";


 const ProductList = ({products, addToCart , value}) =>{

    const filtered = products.filter(product => product.category.toLowerCase().includes(value));    
    
  
return (
    
    <div className="container  ">
      
        {filtered.map(product => (
            <div key={product.id} className="card">
                
                <img src={product.image} alt="" style={{width: "100px" , height : "100px" , margin : "auto"}}></img>
                <p>{product.title}</p>
                <h3>{product.price}$</h3>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
          
            </div>
        ))}
    </div>
)
}

export default ProductList;