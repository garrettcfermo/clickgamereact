import React, { Component } from 'react';

const styles = {
  container: {
    padding:'10px',
    textAlign:'center'
  },
  image: {
    margin:'10px',
    padding:"5px",
    border: '1px solid black',
    maxWidth:'100%',
    }
  }


class ImageContainer extends Component {

  render() {
    return (
     <>
     <div style={styles.container} className="container">
          <div className="row">
          <div className="col-sm-4">
              <img style={styles.image} src="http://placehold.jp/200x200.png" width="auto" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image}src="http://placehold.jp/200x200.png" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image} src="http://placehold.jp/200x200.png" alt=""/>
          </div>
        </div>
          <div className="row">
          <div className="col-sm-4">
              <img style={styles.image}src="http://placehold.jp/200x200.png" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image}src="http://placehold.jp/200x200.png" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image} src="http://placehold.jp/200x200.png" alt=""/>
          </div>
        </div>
          <div className="row">
          <div className="col-sm-4">
              <img style={styles.image}src="http://placehold.jp/200x200.png" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image}src="http://placehold.jp/200x200.png" alt=""/>
          </div>
          <div className="col-sm-4">
              <img style={styles.image} src="http://placehold.jp/200x200.png" alt=""/>
          </div>
        </div>
     </div>
     </>
    )
  }
}


export default ImageContainer