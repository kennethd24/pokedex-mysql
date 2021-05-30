import React from 'react';
import Axios from 'axios';
import Type from './Type.jsx';
import Pokemon from './Pokemon.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokedex: [],
      types: [],
      valueType: ''
    }
    this.getPokedex = this.getPokedex.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getPokedex();

  }

  getPokedex(){
    Axios.get('/api/pokemon')
      .then(results => {
        this.setState({
          pokedex: results.data
        })
      })
      .then(() => {
        Axios.get('/api/types')
          .then(results => {
            this.setState({
              types: results.data
            })
          })
          .catch(err => console.log(err))
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange(e){
    this.setState({
      valueType: e.target.value
    })
  }



  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types" onChange={this.handleChange} value={this.state.valueType}>
          <option>Pokedex</option>
          {this.state.types.map((type, index) => (
            <Type type={type} key={index}/>
          ))}
        </select>
        <div>
         {this.state.pokedex.map((pokemon, index) => {
           return (
             <Pokemon pokemon={pokemon} key={index} valueType={this.state.valueType}/>
           )
         })}
        </div>
      </div>

    )
  }
}
// const App = () => (
//   <div>
//     <h1>Fullstack Pokedex!</h1>
//     <button>Show All</button>
//     <select id="types">
//       <option>Sort by Type</option>
//       <option>Grass</option>
//       <option>Fire</option>
//       <option>Water</option>
//     </select>
//     <div>
//       <h3>Bulbasaur</h3>
//       <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Ivysaur</h3>
//       <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Venusaur</h3>
//       <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//     </div>
//   </div>
// )

export default App;