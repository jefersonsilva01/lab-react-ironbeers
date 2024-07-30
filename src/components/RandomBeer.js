import React, { useContext, useEffect, } from "react";
import Nav from './Nav';
import { ApiContext } from '../context/api.context';

const BeerDetails = () => {
  const { random, beers } = useContext(ApiContext);

  useEffect(() => {
    random()
  }, []);

  if (!beers) return null;

  return (
    <>
      <Nav />
      <div className="one-beer">
        {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCBtn5fL4mUWW_fkr5vRFZLhTIajsYJzjQA&s"} alt={beers.name} /> */}
        <img src={beers.image_url} alt={beers.name} />
        <div>
          <h4>{beers.name}</h4>
          <h4>{beers.attenuation_level}</h4>
        </div>
        <div>
          <p>{beers.tagline}</p>
          <p><strong>{beers.first_brewed}</strong></p>
        </div>
        <p>{beers.description}</p>
        <span>{beers.contributed_by}</span>
      </div>
    </>
  );
}

export default BeerDetails;