import React from "react";
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={"/beer"}>
          <img src={beers} alt="Beers" />
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, excepturi aperiam unde optio illum iure hic libero eius obcaecati dolor laboriosam! Fuga accusamus laboriosam eum reprehenderit nobis? Minima, sit alias?</p>
        </Link>
      </li>
      <li>
        <Link to={"/random-beer"}>
          <img src={randomBeer} alt="Random beer" />
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magnam explicabo asperiores dicta, ea necessitatibus aspernatur dolorum eaque non cum nemo. Voluptas ipsum maxime omnis fugiat quam repellat reiciendis aliquam.</p>
        </Link>
      </li>
      <li>
        <Link to={"new-beer"}>
          <img src={newBeer} alt="New beer" />
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus, ab blanditiis amet molestiae optio in dolorem placeat numquam ad, eius dolores laudantium rem totam recusandae nemo doloremque accusantium ipsam!</p>
        </Link>
      </li>
    </ul>
  );
}

export default Home;