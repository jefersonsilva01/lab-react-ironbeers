import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Nav from './Nav';
import { ApiContext } from '../context/api.context';


const BeerDetails = () => {
  const { details, beers } = useContext(ApiContext),

    { id } = useParams();

  useEffect(() => {
    details(id);
  }, []);

  if (!beers) return null;

  return (
    <>
      <Nav />
      <div className="one-beer">
        {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCBtn5fL4mUWW_fkr5vRFZLhTIajsYJzjQA&s"} alt={beer.name} /> */}
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