import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-peak-81646.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []) 
    
    

    return (
        <div className="row">
            {
                products.map(product =><Product key={product.name} product={product}></Product>)
            }
        
        </div>
    );
};

export default Home;