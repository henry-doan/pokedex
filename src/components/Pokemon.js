import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class Pokemon extends Component {

  render() {
    return(
      <Card>
        <Image src='https://images-na.ssl-images-amazon.com/images/I/41INTwKAi5L._SY355_.jpg' />
        <Card.Content>
          <Card.Header>{this.props.pokemon}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Pokemon;