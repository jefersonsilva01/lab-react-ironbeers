import React, { useContext, useState } from "react";
import Nav from "./Nav";
import { ApiContext } from '../context/api.context';

const NewBeer = () => {

  const { add, newBeer } = useContext(ApiContext),
    [beer, setbeer] = useState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    }),

    changeBeer = e => {
      e.preventDefault();
      let { name, value } = e.target;
      if (name === 'attenuation_level') value = Number(value);
      setbeer({ ...beer, [name]: value });
    },

    createNewBeer = e => {
      e.preventDefault();

      add(beer);

      setbeer({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      })
    };

  console.log(newBeer);

  return (
    <>
      <Nav />
      <form onSubmit={createNewBeer}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.name}
          type="text"
          name="name"
          id="name" />

        <label htmlFor="tagline">Tagline</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.tagline}
          type="text"
          name="tagline"
          id="tagline" />

        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) => { changeBeer(e) }}
          value={beer.description}
          name="description"
          id="description" />

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.first_brewed}
          type="text"
          name="first_brewed"
          id="first_brewed" />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.brewers_tips}
          type="text"
          name="brewers_tips"
          id="brewers_tips" />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.attenuation_level}
          type="number"
          name="attenuation_level"
          id="attenuation_level" />

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          onChange={(e) => { changeBeer(e) }}
          value={beer.contributed_by}
          type="text"
          name="contributed_by"
          id="contributed_by" />

        <button type="submit">ADD NEW</button>
      </form>
    </>
  )
}

export default NewBeer;