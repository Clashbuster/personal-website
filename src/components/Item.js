import React from 'react';
import Card from 'react-bootstrap/Card'



class Item extends React.Component {

    checkLink(){
        if(this.props.itemdetails.link !== "") {
        return this.props.itemdetails.link
        }
    }

    checkSubTitle(){
        if(this.props.itemdetails.subTitle !== ""){
            return this.props.itemdetails.subTitle
        }
    }

    checkLinkText(){
        if(this.props.itemdetails.link !== ""){
            return true
        } else {
            return false
        }
    }

    render(){
        return(
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.itemdetails.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.checkSubTitle()}</Card.Subtitle>
                    <Card.Text>
                    {this.props.itemdetails.description}
                    </Card.Text>
                    <Card.Link href={this.checkLink()}>{this.checkLinkText()? 'Check it out' : ""}</Card.Link>
                </Card.Body>
            </Card>
        )
    }

}


export default Item;