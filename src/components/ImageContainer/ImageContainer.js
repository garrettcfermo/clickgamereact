import React, { Component } from 'react';

const styles = {
    container: {
        padding: '10px',
        textAlign: 'center',
        marginBottom: '70px',
        backgroundColor: "lightgray"
    },
    image: {
        margin: '10px',
        padding: "5px",
        maxWidth: '100%',
        boxShadow: '0 0 0 2px hsl(0, 0%, 70%), 0 0 0 4px hsl(0, 0%, 80%)'
    }
}

class ImageContainer extends Component {

    render() {
        return (
            <>
                <div style={styles.container} className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/bootleggers.jpg" width="auto" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/bottlelogic.jpg" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/goldenroad.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/greenchick.jpg" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/kneedeep.jpg" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/lagunitas.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/nobleale.jpg" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/pizzaport.jpg" alt="" />
                        </div>
                        <div className="col-sm-4">
                            <img style={styles.image} src="./assets/russianriver.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ImageContainer