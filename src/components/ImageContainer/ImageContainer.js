import React, { Component } from 'react';
import './styles.css'

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
        
        let nameArr=[]
        let imageArr =[]
        this.props.brewery.map(elem => {
            nameArr.push(elem.name)
            imageArr.push(elem.image_location)
        })

        return (
            <>
                <div style={styles.container} className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <img onClick={this.props.click} style={styles.image} src={imageArr[0]}  width="auto" alt={nameArr[0]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click} style={styles.image} src={imageArr[1]} alt={nameArr[1]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click}  style={styles.image} src={imageArr[2]} alt={nameArr[2]} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img onClick={this.props.click}  style={styles.image} src={imageArr[3]} alt={nameArr[3]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click} style={styles.image} src={imageArr[4]} alt={nameArr[4]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click}  style={styles.image} src={imageArr[5]} alt={nameArr[5]} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img onClick={this.props.click}  style={styles.image} src={imageArr[6]} alt={nameArr[6]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click} style={styles.image} src={imageArr[7]} alt={nameArr[7]} />
                        </div>
                        <div className="col-sm-4">
                            <img onClick={this.props.click}  style={styles.image} src={imageArr[8]} alt={nameArr[8]} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ImageContainer