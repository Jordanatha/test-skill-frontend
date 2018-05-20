import React, { Component } from 'react';
import { Card, Button, CardColumns, ListGroup, ListGroupItem, Container, Row, Col, CardImg, CardBody,
		 CardTitle, CardSubtitle, CardDeck, CardText } from 'reactstrap';
import './Body.css';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
    	<div>
	    	<Container>
	    		<Row>
	    			<Col sm="2">
				    	<Card style={{width:'auto'}, {border:'none'}}>
				    		<ListGroup>
				    			<ListGroupItem className="listGroupItem1">
				    				<img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="img1"></img>
				    				<h5 className="name"><Link to="/profile">Jordanatha Click me to go to profile</Link></h5>
				    				<p className="desc">I am myself</p>	
				    			</ListGroupItem>

				    			<ListGroupItem className="listGroupItem2">
				    				<h5 className="viewedProf">80</h5>
				    				<p className="desc2">Who's viewed your profile</p>
				    			</ListGroupItem>

				    			<ListGroupItem className="listGroupItem3">
				    				<h5 className="connections">1,133</h5>
				    				<p className="desc3">Connections</p>
				    			</ListGroupItem>
				    		</ListGroup>
					    </Card>
				   	</Col>
				   	<Col sm="6">
					    <Card className="card2" style={{width:'auto'}}>
					    	<input type="text" size="45" className="input" placeholder="Share an article, photo, video, or media"></input>
					    	<Row className="buttonRow">
						    	<button className="but1"><i className="far fa-edit"></i> Write an article</button>
						    	<button className="but2"><i className="fas fa-camera-retro"></i>Images</button>
						    	<button className="but3"><i className="fas fa-video"></i>Video</button>
						    	<Button color="primary"className="but4">Post</Button>
					    	</Row>
					    </Card>

					    <Card className="card3" style={{width:'auto'}, {border:'none'}}>
							<ListGroup>
				    			<ListGroupItem className="listGroupItem3">
				    				<Row>
					    				<Col sm="4">
					    					<img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="img2"></img>
					    				</Col>
					    				<Col sm="6">
					    					<Row><h6 className="postName">Florens</h6></Row>
					    					<Row><p className="postDesc">Founder at PENTAGON</p></Row>
					    					<Row><p className="postTime">1d</p></Row>
					    				</Col>
					    				<Col sm="2">
					    					<i className="fas fa-ellipsis-h"></i>
					    				</Col>
				    				</Row>
				    			</ListGroupItem>

				    			<ListGroupItem className="listGroupItem4">
				    				<Card>
				    					<CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ742mE8A9L4RMv_d_n0S-_T7brlgn7-Ish8B9xiGoGYFZ65PjrRQ"/>
				    					<CardBody>
				    						<CardTitle className="cardTitle">
				    							<a href="#">Pacar muda impian! No.5 bikin pangling!</a>
				    						</CardTitle>
				    						<CardSubtitle className="cardSubtitle">
				    							tibun-news.com
				    						</CardSubtitle>
				    					</CardBody>
				    				</Card>
				    			</ListGroupItem>
				    		</ListGroup>
					    </Card>
				   	</Col>
				   	<Col sm="4">
						<Card style={{width:'auto'}}>
							<CardBody>
								<CardTitle>Add to your feed</CardTitle>
							</CardBody>
							<CardText>
								<Row className="add1">
					    			<Col sm="4">
					    				<img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="img2"></img>
					    			</Col>
					    			<Col sm="4">
					   					<Row><h6 className="postName">Jordana</h6></Row>
					   					<Row><p className="postDesc">Founder at POLYGON</p></Row>
					   					<Row><p className="postTime">1d</p></Row>
					   				</Col>
				    				<Col sm="4" className="followButton">
				    					<button>+ Follow</button>
				    				</Col>
			    				</Row>

			    				<Row className="add2">
					    			<Col sm="4">
					    				<img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="img2"></img>
					    			</Col>
					    			<Col sm="4">
					   					<Row><h6 className="postName">Jordan</h6></Row>
					   					<Row><p className="postDesc">Founder at TETRAGON</p></Row>
					   					<Row><p className="postTime">1d</p></Row>
					   				</Col>
				    				<Col sm="4" className="followButton">
				    					<button>+ Follow</button>
				    				</Col>
			    				</Row>
			    				<Row className="viewAll"><a href="#">View all recommendations</a> </Row>
							</CardText>
					    </Card>
				   	</Col>
				</Row>
			</Container>
      	</div>

    );
  }
}

export default App;