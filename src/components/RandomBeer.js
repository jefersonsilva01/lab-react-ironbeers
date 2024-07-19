import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from './Nav';

const BeerDetails = () => {
  const [beer, setBeer] = useState(null),

    baseURL = "https://ih-beers-api2.herokuapp.com/beers/random";

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setBeer(response.data)
    });
  }, [])

  if (!beer) return null

  console.log(beer);
  return (
    <>
      <Nav />
      <div className="one-beer">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCBtn5fL4mUWW_fkr5vRFZLhTIajsYJzjQA&s"} alt={beer.name} />
        <div>
          <h4>{beer.name}</h4>
          <h4>{beer.attenuation_level}</h4>
        </div>
        <div>
          <p>{beer.tagline}</p>
          <p><strong>{beer.first_brewed}</strong></p>
        </div>
        <p>{beer.description}</p>
        <span>{beer.contributed_by}</span>
      </div>
    </>
  );
}

export default BeerDetails;