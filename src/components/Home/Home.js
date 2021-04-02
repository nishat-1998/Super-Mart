import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import * as ReactBootStrap from 'react-bootstrap';

const Home = () => {
    const [products, setProducts] = useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(() => {
        fetch('https://whispering-peak-81646.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>{
           // setLoading(true);
            setProducts(data)
        })
        
    }, []) 
   
    

    return (
        <div className="row">
          
            {
                products.map(product =><Product key={product.name} product={product}></Product>)
            }
       
        {loading ? products: <ReactBootStrap.Spinner animation="border"/>}
        </div>
    );
};

export default Home;