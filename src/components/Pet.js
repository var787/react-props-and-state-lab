import React from 'react'

class Pet extends React.Component {
  render() {
    
    const {name, type, age, weight, gender, isAdopted, id} = this.props.pet
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(gender === 'female') ? '♀' :'♂' } 
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { 
          isAdopted ? //because it is already a boolean we can refactor but not comparing 2 booleans
          <button className="ui disabled button">Already adopted</button>
          :
          <button onClick= {() => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button> //!we pass the id here to point where we changes to be made. id received from props
    }
        </div>
      </div>
    )
  }
}

export default Pet
