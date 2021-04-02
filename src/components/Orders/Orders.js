import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders,setOrders]= useState([]);
    const [loggedInUser,setLoggedInUser] =useContext(UserContext);

    useEffect(() =>{
        fetch('https://whispering-peak-81646.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div style={{textAlign:"center"}}>
            <h4>You Have :{orders.length} Orders</h4>
            {
                orders.map(order => <li>{order.email} Product:{order.name}</li>)
            }
        </div>
    );
};

export default Orders;