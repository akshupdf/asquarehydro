import { connect } from "react-redux";
import React , {useEffect} from "react";
import ProductList from "../components/ProductList";
import {fetchProductsSuccess , fetchProductsFailure} from '../actions/productActions';
import { addToCart } from "../actions/cartActions";

const ProductListContainer  = ({products, addToCart, fetchProductsFailure, fetchProductsSuccess ,filter}) => {
   
    useEffect(() =>{
        const fetchProducts = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
              
                fetchProductsSuccess(data)
            }catch (error){
                fetchProductsFailure(error)
            }
        }

        fetchProducts()
    }, [fetchProductsFailure, fetchProductsSuccess])

    return <ProductList products={products} addToCart={addToCart} value={filter.selectedCategory}/>
}

const mapStateToProps = (state) => ({
    products: state.products.products,
  });

  const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product)),
    fetchProductsSuccess: (products) => dispatch(fetchProductsSuccess(products)),
    fetchProductsFailure: (error) => dispatch(fetchProductsFailure(error)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)

