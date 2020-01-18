import React from 'react';
import Item from '../components/Item.js';
import {education, experience, skills, projects } from '../ItemData.js'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'

console.log(experience)
console.log(education)
console.log(skills)
console.log(projects)

class ItemBrowser extends React.Component {

displayItems(){
    switch(this.props.browserType){
        case 'Experience':
            return experience.map((item, index) => {
                return <Item key={index}itemdetails={item}> </Item>
            })
        case 'Education' :
            return education.map((item, index) => {
                return <Item key={index} itemdetails={item}> </Item>
            })
        case 'Skills' :
            return skills.map((item, index) => {
                return <Item key={index} itemdetails={item}> </Item>
            })
        default:
            return projects.map((item, index) => {
                return <Item key={index} itemdetails={item}> </Item>
            })

    }
}





    render(){
        return(
            <CardColumns>
                {this.displayItems()}
            </CardColumns>
        )
    }

}


export default ItemBrowser;