import React,{useState,useEffect} from 'react';
import Event from '../Event/Event';
//import Order from '../Order/Order';


const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://whispering-peak-81646.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []) 
    
    

    return (
        <div className="row">
            {
                events.map(event =><Event key={event.name}event={event}></Event>)
            }
        </div>
    );
};

export default Home;