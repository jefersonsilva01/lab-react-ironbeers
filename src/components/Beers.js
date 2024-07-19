import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState(null),
    [baseURL, setURL] = useState("https://ih-beers-api2.herokuapp.com/beers"),

    searchBeer = e => {
      e.preventDefault();

      if (e.target.value === '') {
        return setURL("https://ih-beers-api2.herokuapp.com/beers");
      }

      const newBaseURL = "https://ih-beers-api2.herokuapp.com/beers"
        + `/search?q=${e.target.value}`

      setURL(newBaseURL);
    };

  useEffect(() => {
    axios.get(baseURL).then(response => {
      console.log(baseURL, response);
      setBeers(response.data)
    });
  }, [baseURL])

  if (!beers) return null

  return (
    <>
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
              {/* <img src={beer.image_url} alt={beer.name} /> */}
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCBtn5fL4mUWW_fkr5vRFZLhTIajsYJzjQA&s"} alt={beer.name} />
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