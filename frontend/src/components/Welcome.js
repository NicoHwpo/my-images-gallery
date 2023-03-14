import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button bsStyle="primary" href="https://unsplash.com" target="__blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);
export default Welcome;