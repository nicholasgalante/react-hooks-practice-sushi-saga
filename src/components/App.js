import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([])
  const [money, setMoney] = useState(100);
  const [sushiEaten, setSushiEaten] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiArray(data))
  },[])

  function handleSushiEaten(sushi){
    if(money-sushi.price > 0){
      setMoney(()=>money-sushi.price)
      setSushiEaten(sushiEaten=>[...sushiEaten,sushi.id])
    } else {
      alert("You're out of money!!")
    }
  }
  
  return (
    <div className="app">
      <SushiContainer sushiArray={sushiArray} handleSushiEaten={handleSushiEaten}/>
      <Table money={money} plates={sushiEaten}/>
    </div>
  );
}

export default App;
