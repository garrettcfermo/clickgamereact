import React, { Component } from 'react';

const styles = {
  background:{
    backgroundImage:'url("https://cdn.vox-cdn.com/thumbor/l9NWfCGYQG1wfp-NWxbQujeuZU8=/135x0:1992x1393/1200x675/filters:focal(135x0:1992x1393)/cdn.vox-cdn.com/uploads/chorus_image/image/49465573/shutterstock_177912356.0.0.jpg")',
    backgroundSize:"cover",
    backgroundPosition:"center",
    color:'white',
    fontWeight:"bolder",
    textShadow:'black 0.3em 0.3em 0.5em'
  }
}

class Jumbotron extends Component {

  render() {
    return (
      <div style={styles.background} class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-3">Clicky Game!</h1>
          <h5 class="display-5">Click on an image to earn points, but don't click on any more than once!</h5>
        </div>
      </div>
    )
  }
}



export default Jumbotron;