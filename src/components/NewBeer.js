import React, { useState } from "react";
import Nav from "./Nav";
import axios from 'axios';

const NewBeer = () => {

  const beer = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewers_tips: null,
    attenuation_level: null,
    contributed_by: null
  },

    [newBeer, setNewBeer] = useState(beer),

    baseURL = "https://ih-beers-api2.herokuapp.com/beers/new",

    changeBeer = e => {
      e.preventDefault();
      let { name, value } = e.target;
      if (name === 'attenuation_level') value = Number(value);
      beer[name] = value;
    },

    createNewBeer = e => {
      e.preventDefault();
      axios.post(baseURL, beer)
        .then(response => setNewBeer(response.data));
    };

  if (!newBeer) return 'No post!'

  console.log(newBeer);

  return (
    <>
      <Nav />
      <form onSubmit={createNewBeer}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="text"
          name="name"
          id="name" />

        <label htmlFor="tagline">Tagline</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="text"
          name="tagline"
          id="tagline" />

        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) => { changeBeer(e) }}
          name="description"
          id="description" />

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="text"
          name="first_brewed"
          id="first_brewed" />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="text"
          name="brewers_tips"
          id="brewers_tips" />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="number"
          name="attenuation_level"
          id="attenuation_level" />

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          type="text"
          name="contributed_by"
          id="contributed_by" />

        <button type="submit">ADD NEW</button>
      </form>
    </>
  )
}

export default NewBeer;