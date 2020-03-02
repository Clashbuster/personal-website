import React from 'react';
import Title from './components/Title.js';
import SubTitle from './components/SubTitle.js';
import ItemBrowser from './components/ItemBrowser.js';
import Pillar from './components/Pillar.js';
import Back from './components/Back.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import '../src/App.css'

class App extends React.Component {
constructor(){
  super()
  this.state = {
    browsing: 0,
    type: 'Skill'
  }
  // this.doBackground()
}

// doBackground(){
//   document.body.style = "background-image: url('../forZach.jpg')";
// }


componentDidUpdate(){
  console.log(this.state)
}

changeBrowser = (newType) => {
this.setState({
  browsing: 1,
  type: newType
})
}

pillarsOrBrowser = () => {
  if(this.state.browsing === 0){
    return (
          <Row>
            <Col>
            <Pillar clickHandler={this.changeBrowser} branch={'Experience'}></Pillar>
            </Col>
            <Col>
            <Pillar clickHandler={this.changeBrowser} branch={'Education'}></Pillar>
            </Col>
            <Col>  
            <Pillar clickHandler={this.changeBrowser} branch={'Skills'}></Pillar>
            </Col>
            <Col>  
            <Pillar clickHandler={this.changeBrowser} branch={'Projects'}></Pillar>
            </Col>
          </Row>
    )
  } else {
    return (
      <> 
      <ItemBrowser browserType={this.state.type}></ItemBrowser>
      </>
    )
  }
}

changeBackToMenu = () => {
  let temp = 0
  if(this.state.browsing === 0){
    temp = 1
  } else {
    temp = 0
  }

  this.setState({
    browsing: temp
  })
}

checkDisplayBack(){
  if (this.state.browsing === 1){
    return (
      <Back backToMenu={this.changeBackToMenu}></Back>
    )
  } else {
    return null
  }
}


  render(){
  return (

      <Container >
          {/* <Row> */}
          <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">Taylor Allan Coon</Navbar.Brand>
              <Nav justify>
                <Nav.Item>
                  <div>
                    taylor.allan.coon@gmail.com
                    817-733-6127
                  </div>
                </Nav.Item>
                    <Nav.Link href="https://github.com/Clashbuster">Github</Nav.Link>     
                <Nav.Item>
                {this.checkDisplayBack()}
                </Nav.Item>
              </Nav>
            
            </Navbar>
            <br></br>
          {/* </Row> */}

          {/* <Row > */}
            {this.pillarsOrBrowser()}
          {/* </Row> */}
      </Container>
  
  );
  }
}

export default App;
