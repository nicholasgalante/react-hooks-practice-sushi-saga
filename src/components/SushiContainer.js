import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiArray, handleSushiEaten }) {
  const [index, setIndex] = useState(0)

  const displayedSushi = sushiArray
    .slice(index, index + 4)
    .map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} handleSushiEaten={handleSushiEaten}/>
    })

  function handleMoreSushi(){
    setIndex(()=>index+1)
  }

  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
