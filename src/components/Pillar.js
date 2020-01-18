import React from 'react';
import Card from 'react-bootstrap/Card'



class Pillar extends React.Component {


handleClick(){
    this.props.clickHandler(this.props.branch)
}


getImage(){
 switch(this.props.branch){
        case 'Experience':
            return (require("../experiencesized.jpeg"))
        case 'Education' :
            return (require("../educationsized.jpeg"))
        case 'Skills' :
            return (require("../skillsized.jpeg"))
        default:
            return (require("../projectssized.jpeg"))

    }
}


    render(){
        return(
                <Card onClick={e => this.handleClick(e)}>
                        <Card.Body>
                        <Card.Text>
                        {this.props.branch}
                        </Card.Text>
                        </Card.Body>
                    <Card.Img variant="bottom" src={this.getImage()} />
                </Card>
        )
    }

}


export default Pillar;