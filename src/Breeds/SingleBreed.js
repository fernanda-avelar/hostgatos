import React, { useState, useEffect } from 'react';
import CatStats from './CatStats';
import SingleBreedImage from './SingleBreedImage';
import './SingleBreed.css';
import { useSelector } from 'react-redux'

// export const CounterComponent = () => {
  // console.log(counter)
  // return (counter)
  // counter : useSelector(state => state.counter)
// }

const API_KEY = '3b6397a9-34a6-4d75-9f92-1c1d7ebec31a'

// export default class SingleBreed extends Component {
  export default function SingleBreed(props) {
    // constructor(props) {
      // super(props)
    const counter = useSelector(state => state.counter)
    const [singleBreed, setsingleBreed] = useState([])
    const [data, setdata] = useState([])
    const [error, seterror] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [id] = useState(props.id)
    // state = {
    //   singleBreed: [],
    //   data: [],
    //   isLoading: true,
    //   // id: this.props.match.params.id,
    //   id: props.id,
    //   error: null,
    // }
    // this.contator = this.contador.bind(this);

  // }

  async function fetchSingleBreed() {
    const pageCount = counter
    // console.log(pageCount);
    const API = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=${API_KEY}&limit=${pageCount}`
    console.log()
    try {
      let response = await fetch(API)
      response = await response.json()
      setsingleBreed(response[0].breeds[0])
      setdata(response[0])
      setisLoading(false)
      // this.setState({
      //   singleBreed: response[0].breeds[0],
      //   data: response[0],
      //   isLoading: false
      // })
    } catch (error) {
      console.log(error)
      seterror(error)
      setisLoading(false)
      // this.setState({ error, isLoading: false })
    }
  }



  // async componentWillMount() {
  //   await this.fetchSingleBreed()
  //   // console.log(this.state)
  // }

  useEffect(() => {
    async function fetchMyAPI() {
      fetchSingleBreed()
    }  
  
    fetchMyAPI();
  }, []);

  // render() {
    
    return (
      // const { isLoading, singleBreed, data } = this.state
      <div>
      <React.Fragment>
        {
          isLoading || !singleBreed
          ? console.log("Carregando")
            : <div >
              <div className="card">
                <div className="card-body">
                  {/* Cat Stats in display with stars */}
                  <div className="cat-stars-grid">
                    <div className="cat-stars-item">
                      <SingleBreedImage className="picture" url={data.url}/>
                    </div>
                    <div className="cat-stars-item2">
                      <h1 className="single-breed-header">{singleBreed.name}</h1>
                      <span className="blockquote">{singleBreed.description}.</span> 
                      <CatStats title="Affection Level" rating={singleBreed.affection_level} />
                      <CatStats title="Adaptability" rating={singleBreed.adaptability} />
                      <CatStats title="Child Friendly" rating={singleBreed.child_friendly} />
                      <CatStats title="Dog Friendly" rating={singleBreed.dog_friendly} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      }
      </React.Fragment>
      {/* <CounterComponent/> */}
      </div>
    )
  // }
}
