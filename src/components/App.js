import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (e) => {
    this.setState({
      //to access nested key, have to go through parent key
      filters: {
        type: e.target.value,
      },
    });
  };

  onFindPetsClick = () => {
    

    const { type } = this.state.filters;

    const url = (type === 'all') ? '/api/pets' : `/api/pets?type=${type}`

    fetch(url)
      .then((response) => response.json())
      .then((petsData) => {
        this.setState({
          pets: petsData,
        });
      });
  };

  onAdoptPet = (id) => {
    console.log('adopt------');

    const updatedPets = this.state.pets.map(petObj => {
      if (petObj.id === id){
        return {
          ...petObj,
          isAdopted: true
        }
      } else {
        return petObj
      }
    })


    this.setState({
      pets:  updatedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
