import React, { useContext, useEffect, } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ApiContext } from '../context/api.context';

const Beers = () => {
  const { allBeers, search, beers } = useContext(ApiContext),

    searchBeer = e => {
      e.preventDefault();
      search(e.target.value)
    };

  useEffect(() => {
    allBeers();
  }, []);

  if (!beers) return null

  return (
    <>
      {console.log(beers)}
      <Nav />

      <input
        id="search"
        onChange={e => (searchBeer(e))}
        type="text"
        placeholder="Search beer" />

      {
        beers.map((beer) => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`} className="beer">
              <img src={beer.image_url} alt={beer.name} />
              {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCBtn5fL4mUWW_fkr5vRFZLhTIajsYJzjQA&s"} alt={beer.name} /> */}
              <ul>
                <li>
                  <h4>{beer.name}</h4>
                </li>
                <li>
                  <p>{beer.tagline}</p>
                </li>
                <li>
                  <span><strong>Created by: </strong>{beer.name}</span>
                </li>
              </ul>
            </Link>
          )
        })
      }
    </>
  );
}

export default Beers;