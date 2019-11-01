import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import SingleBreed from '../Breeds/SingleBreed'
// import Loading from '../Home/Loading'
import './BreedList.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../actions'

export const CounterComponent = (filteredBreeds) => {
  const counter = useSelector(state => state.counter);
  // console.log([filteredBreeds].slice(0,counter).map((feline) => feline.filteredBreeds[0].id));
  return(
    <div>
        {[filteredBreeds].slice(0,counter).map(feline => <SingleBreed key={feline.filteredBreeds[0].id} id={feline.filteredBreeds[0].id}/>)}
    </div>
  )
}

export const LoadMore = (filteredBreeds) => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  console.log(filteredBreeds.filteredBreeds.slice(0,3).map(feline => <SingleBreed key={feline.id} id={feline.id}/>));
  return(
    <div>
        {filteredBreeds.filteredBreeds.slice(0,counter).map(feline => <SingleBreed key={feline.id} id={feline.id}/>)}
        <button className="btn_load" onClick={() => {dispatch(increment());}}>Load More</button>
    </div>
    ) 
}


const API_BREEDS = 'https://api.thecatapi.com/v1/breeds'

export default class BreedList extends Component {
                                    
  constructor() {
    super()
    this.state = {
      breeds: [],
      isLoading: true,
      error: null,
      searchString: '', 
      filteredBreeds: [],
      isHovered: false
    }
    this.updateSearchString = this.updateSearchString.bind(this)
  }
  // async function to fetch all breeds
  async fetchBreeds() {
    try {
      let response = await fetch(API_BREEDS)
      response = await response.json()
      this.setState({
        ...this.state,
        breeds: response,
        filteredBreeds: response,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({
        ...this.state,
        error,
        isLoading: false
      })
    }
  }
  // update our state on input in /breeds
  updateSearchString(event) {
    this.setState({
      ...this.state,
      searchString: event.target.value,
      filteredBreeds: (event.target.value !== '')
      // breeds which only contain the search string (lowercase comparison for case-insensitive search)
        ? this.state.breeds.filter(breed => {
          return breed.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        : this.state.breeds
    })
  }
  async componentWillMount() {
    await this.fetchBreeds()
  }

  renderFeline(filteredBreeds){
      // return(
      //   <div >
      //   {filteredBreeds.slice(0,n).map(feline => 
      //     <SingleBreed key={feline.id} id={feline.id}/>
      //     )}
      // </div>
      //   )

      return (<CounterComponent filteredBreeds={filteredBreeds} />)
    
  }

  render() {
    const { isLoading, filteredBreeds, error} = this.state
    
    return (
      <div className="container pt-3 pb-5">
      {/* return error if error else don't */}
        {(error ? <p>{error}</p> : null)}
        <h2 className="search">Search the breed: </h2>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.updateSearchString}
          placeholder="Enter a cat breed..."
          className="form-control"
        />
        <div className="breed-counter">
          {filteredBreeds.length} result found
        </div>
        <hr style={{ "border": "solid 1px #537c8e" }} />
        <div className="breed-list">
          {
            isLoading
              ? console.log("Loading")
              : <LoadMore filteredBreeds={filteredBreeds}/>
              
              // this.renderFeline(filteredBreeds)
              
              
              
          }
        </div>
        {/* <LoadMore /> */}
        {/* <CounterComponent/> */}
      </div>
    )
  }

}
