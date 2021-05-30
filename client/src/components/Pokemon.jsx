import React from 'react';


export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
  }
  // conditional render
  // if valueType === 'fire'
  // show pokemon type == 'fire' {this.props.pokemon.type}
  // else continue;

  render() {
    return (
      <span>
        {this.props.valueType === this.props.pokemon.type ?
          (<div>
            <h3>
            {this.props.pokemon.name}
            </h3>
            <img src={this.props.pokemon.img} />
          </div>)
          :
          (null)
        }
      </span>

    )

  }
  // render() {
  //   return (
  //     <div>
  //       <h3>{this.props.pokemon.name}</h3>
  //       <img src={this.props.pokemon.img} />
  //     </div>
  //   )
  // }
}

