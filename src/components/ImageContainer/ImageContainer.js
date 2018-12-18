import React, { Component } from 'react';


const styles = {
  container: {
    border:'1px solid black'
  }
}

class ImageContainer extends Component {

  render() {
    return (
     <>
     <div style={styles.container} className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src="" alt=""/>
          </div>
        </div>
     </div>
     </>
    )
  }
}



export default ImageContainer