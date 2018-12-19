import React, { Component } from 'react';


const styles = {
  position: "absolute",
  bottom: 0,
  width: '100%',
  height: '80px',
  lineHeight: '60px',
  backgroundColor: '#40403a',
  textAlign:'center',
  color:'white',
  fontWeight:'bold',
  boxShadow: "0px 2px 20px #40403a",
}

class Footer extends Component {

  render() {
    return (
      <footer style={styles} className="footer">
        <div className="container">
          <p>Clicky Game!</p>
        </div>
      </footer>
    )
  }
}

export default Footer