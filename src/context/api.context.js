import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://ih-beers-api2.herokuapp.com",

  ApiContext = React.createContext(),

  ApiProvider = (props) => {
    const [beers, setBeers] = useState(null),
      [newBeer, setNewBeer] = useState(null),

      allBeers = () => {
        axios.get(`${API_URL}/beers`)
          .then(response => {
            setBeers(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      },

      search = (e) => {
        if (e === '') {
          axios.get(`${API_URL}/beers`)
            .then(response => {
              setBeers(response.data)
            })
            .catch(error => {
              console.log(error);
            })
          return;
        }

        axios.get(`${API_URL}/beers/search?q=${e}`)
          .then(response => {
            setBeers(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      },

      details = (id) => {
        axios.get(`${API_URL}/beers/${id}`)
          .then(response => {
            setBeers(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      },

      random = () => {
        axios.get(`${API_URL}/beers/random`)
          .then(response => {
            setBeers(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      },

      add = (beer) => {
        axios.post(`${API_URL}/beers/new`, beer)
          .then(response => {
            setNewBeer(response.data)
          })
          .catch(error => {
            console.log(error);
          })
      };

    return (
      <ApiContext.Provider
        value={{ allBeers, search, details, random, add, beers, newBeer }}
      >
        {props.children}
      </ApiContext.Provider>
    )
  }

export { ApiProvider, ApiContext };