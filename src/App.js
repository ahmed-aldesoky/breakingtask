import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './componenents/Details';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './componenents/ui/Header';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from './componenents/characters/characterGrid';
import Navbar from './componenents/Navbar';
import './App.css';

const  App=()=> {
  
    const [items, setItems]=useState([]) 
    const [isLoading, setIsLoading]=useState(true) 

    
    useEffect(()=>{
      const fetchItems=async ()=>{
        const result= await axios('https://www.breakingbadapi.com/api/characters')
        console.log(result.data);
        setIsLoading(false)
        setItems(result.data)
      }
      fetchItems()

    },[ ])


  
  return (
    <div className="Container">
     
      
      <BrowserRouter>
      <Navbar/>
      <Header/>
        <Switch>
        <Route path='/Details' exact component={Details}/>

        <Route
          path={'*'}
          render={(props) => <CharacterGrid isLoading={isLoading} items={items} />} 
        />
         
  
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
