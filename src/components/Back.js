import React from 'react';
import Button from 'react-bootstrap/Button'



class Back extends React.Component {


clickHandler(e){
    e.preventDefault()
    this.props.backToMenu()
}

    render(){
        return(
            <Button onClick={e => this.clickHandler(e)} variant="dark">Back</Button>
        )
    }

}


export default Back;