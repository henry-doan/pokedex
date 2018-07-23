import React, { Component } from 'react';
import axios from 'axios';
import { Header, Icon, Card, Container } from 'semantic-ui-react';
import  Pokemon from './Pokemon';

class Home extends Component {
  state = { pokemons: [], loaded: false }

  componentDidMount = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then( (res) => {
        this.setState({ pokemons: res.data.results })
      })
      .catch( (err) => {
        console.log(err)
      })
  }

  isLoaded = () => {
    
  }

  render() {
    const { pokemons } = this.state;
  
    return(
      <Container>
        <Header as='h2' icon textAlign='center'>
          <Icon name='gamepad' circular />
          <Header.Content>Home Page</Header.Content>
        </Header>
        <Card.Group itemsPerRow={6} centered>
          {pokemons.map(p => {
            return (
              <Pokemon key={p.url} pokemon={p.name} />
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

export default Home;