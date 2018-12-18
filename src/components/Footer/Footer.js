import React, { Component } from 'react';


const styles = {
  position: "absolute",
  bottom: 0,
  width: '100%',
  height: '60px',
  lineHeight: '60px',
  backgroundColor: '#40403a',
  textAlign:'center',
  color:'white',
  
}

class Footer extends Component {

  render() {
    return (
      <footer style={styles} class="footer">
        <div class="container">
          <p>Clicky Game!</p>
        </div>
      </footer>
    )
  }
}



export default Footer