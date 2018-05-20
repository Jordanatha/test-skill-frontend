import React, { Component } from 'react';
import './Profile.css';
import { Card, Button, CardColumns, ListGroup, ListGroupItem, Container, Row, Col, CardImg, CardBody,
     CardTitle, CardSubtitle, CardDeck, CardText, Media } from 'reactstrap';
//https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png
class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="8">
                <Card className="profileCard1" style={{width:'auto'}, {border:'none'}}>
                  <ListGroup>
                      <ListGroupItem>
                        <img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="profPhoto"></img>
                        <Row>
                            <Col sm="8">
                              <h4 className="personName">Hantze Sudarma</h4>
                            </Col>
                            <Col sm="4">
                              <i className="fab fa-bimobject"></i>Binus University International
                            </Col>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <h6 className="jobDesc">Laboratory Coordinator</h6>
                          </Col>
                          <Col sm="4">
                            <i className="fab fa-bimobject"></i>Universitas Bina Nusantara
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <p className="country">Indonesia</p>
                          </Col>
                          <Col sm="4">
                            <i className="fas fa-address-book"></i>See contact info
                          </Col>
                        </Row>
                        <Row>
                            <Col sm="8">
                                <Button color="primary"className="connectBut">Connect</Button>
                                <Button outline color="primary" className="inmailBut">inMail</Button>
                                <Button outline color="secondary" className="moreBut">More...</Button>
                            </Col>
                            <Col sm="4">
                              <i className="fas fa-users"></i>500+ Connections
                            </Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </ListGroupItem>

                      <ListGroupItem className="text-center">
                        <p>Show More<i className="fas fa-angle-down"></i></p>
                      </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>

            <Col sm="4">
              <h4 className="peopleView">People also viewed</h4>

                <Media>
                  <Media>
                    <Media object src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" 
                      className="photoViewed1" alt="p1" />
                  </Media>
                  <Media body>
                    <b>Jordanatha</b>
                    <p>Software Developer Manager</p>
                 </Media>
                </Media>

                <Media>
                  <Media>
                    <Media object src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" 
                      className="photoViewed2" alt="p2" />
                  </Media>
                  <Media body>
                    <b>Jordanathaa</b>
                    <p>Computer Science lecturer at Binus University</p>
                 </Media>
                </Media>

                <Media>
                  <Media>
                    <Media object src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" 
                      className="photoViewed3" alt="p3" />
                  </Media>
                  <Media body>
                    <b>Jordanathaaa</b>
                    <p>Technology Specialist</p>
                 </Media>
                </Media>

            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="profileCard2" style={{width:'auto'}, {border:'none'}}>
                  <ListGroup>
                      <ListGroupItem>
                        <h4 className="highlights">Highlights</h4>
                        <Row>
                          <Col sm="2">
                            <img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="photo"/>
                          </Col>
                          <Col sm="4">
                            <Row>
                              <b>85 Mutual Connections</b>
                            </Row>
                            <Row>
                              <p className="mutual">You and Hantze both know Jordanatha and 84 others</p>
                            </Row>
                          </Col>
                          <Col sm="2">
                            <img src="https://cdn3.iconfinder.com/data/icons/business-office-2/512/chat_bubble_messages-512.png"
                              className="bubbleChat"/>
                          </Col>
                          <Col sm="4">
                            <Row>
                              <b>Reach out Hantze for...</b>
                            </Row>
                            <Row>
                              <p className="nonprofit">Joining a nonprofit.</p>
                            </Row>
                          </Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem className="text-center">
                        <p>Show More<i className="fas fa-angle-down"></i></p>
                      </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="profileCard3" style={{width:'auto'}, {border:'none'}}>
                  <ListGroup>
                      <ListGroupItem>
                        <Row>
                          <Col sm="8">
                            <h4 className="activity">Hantze's Activity</h4>
                            <p className="followers">1,151 Followers</p>
                          </Col>
                          <Col sm="4" className="text-right">
                            <Button outline color="primary">+Follow</Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="2">
                            <img src="https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png" className="photo2"/>
                          </Col>
                          <Col sm="10">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                          </Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem className="text-center">
                        <p>Show More<i className="fas fa-angle-down"></i></p>
                      </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="profileCard4" style={{width:'auto'}, {border:'none'}}>
                  <ListGroup>
                      <ListGroupItem>
                        <h4 className="experience">Experience</h4>

                        <Media>
                          <Media>
                          <Media object src="https://www.immigrationbureau.com/images/icons/widgets/business-building-icons.png" 
                            className="mediaObj" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <h5 style={{margin:'0'}}>Lab Coordinator</h5>
                            <p style={{margin:'0'}}>Binus International University</p>
                            <p style={{margin:'0'}}>Sep 2015 - Present &#8901; 2yrs 9mos</p>
                            <p>Fx Mall</p>
                            <ul style={{padding:'0'}} className="responsibility">Responsibility:
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>                              </ul>
                          </Media>
                        </Media>
                        
                        <a href="#">Show More <i className="fas fa-angle-down"></i></a>
                      </ListGroupItem>

                      <ListGroupItem>
                        <h4 className="education">Education</h4>

                        <Media>
                          <Media>
                            <Media object src="https://blog.mamikos.com/wp-content/uploads/2017/05/logo-binus-lama.jpg" 
                              className="logoBinus1" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <h5 style={{margin:'0'}}>Universitas Bina Nusantara</h5>
                            <p style={{margin:'0'}}>Magister Teknik Informatika, Computer Science, 3.5</p>
                            <p style={{margin:'0'}}>2011-2013</p>
                            <p style={{margin:'0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          </Media>
                        </Media>

                        <Media>
                          <Media>
                            <Media object src="https://blog.mamikos.com/wp-content/uploads/2017/05/logo-binus-lama.jpg" 
                              className="logoBinus2" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <h5 style={{margin:'0'}}>Universitas Bina Nusantara</h5>
                            <p style={{margin:'0'}}>Bachelor's Degree, Information Technology, 3.5</p>
                            <p style={{margin:'0'}}>2007-2011</p>
                            <p style={{margin:'0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          </Media>
                        </Media>
                      </ListGroupItem>

                      <ListGroupItem>
                        <h4 className="volunteer">Volunteer Experience</h4>
                        <Media>
                          <Media>
                            <Media object src="https://www.immigrationbureau.com/images/icons/widgets/business-building-icons.png" 
                              className="mediaObj2" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <h5 style={{margin:'0'}}>Lecturer</h5>
                            <p style={{margin:'0'}}>PT.Lautan Luas</p>
                            <p style={{margin:'0'}}>Jun 2013 - Jul 2013 &#8901; 2mos</p>
                          </Media>
                        </Media>
                      </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="profileCard5" style={{width:'auto'}, {border:'none'}}>
                  <ListGroup>
                    <ListGroupItem>
                      <h4 className="accomplishments">Accomplishments</h4>

                        <Media className="media1">
                          <Media>
                            <Media object src="http://www.static.flymeos.com/resources/flymeos/flyme6/images/designChange/flyme6_logo.png" 
                              className="six" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <Row>
                              <Col sm="8">
                                <h5 style={{margin:'0'}}>Courses</h5>
                              </Col>
                              <Col sm="4" className="text-right">
                                <i className="fas fa-angle-down"></i>
                              </Col>
                            </Row>
                            <p style={{margin:'0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          </Media>
                        </Media>

                        <Media>
                          <Media>
                            <Media object src="http://hddfhm.com/images/clipart-5-3.png" 
                              className="five" alt="Generic placeholder image" />
                          </Media>
                          <Media body>
                            <Row>
                              <Col sm="8">
                                <h5 style={{margin:'0'}}>Honors and Awards</h5>
                              </Col>
                              <Col sm="4" className="text-right">
                                <i className="fas fa-angle-down"></i>
                              </Col>
                            </Row>
                            <p style={{margin:'0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          </Media>
                        </Media>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="profileCard6" style={{width:'auto'}}>
                  <ListGroup>
                    <ListGroupItem>
                      <h4 className="interests">Interests</h4>
                      <Row>
                        <Col sm="6">
                          <Media>
                            <Media>
                              <Media object src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IVVA0hLEcRsdb6a20KbAwY_HMRJFbOE6pDlCf3eTIOAj4ph2KA" 
                                className="rakuten" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                              <h5>Rakuten</h5>
                              <p>65,303 Followers</p>
                            </Media>
                          </Media>
                        </Col>

                        <Col sm="6">
                          <Media>
                            <Media>
                              <Media object src="https://blog.mamikos.com/wp-content/uploads/2017/05/logo-binus-lama.jpg" 
                                className="logoBinus3" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                              <h5>Bina Nusantara University</h5>
                              <p>9,602 Followers</p>
                            </Media>
                          </Media>
                        </Col>

                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
            </Col>
          </Row>
        </Container>


        <hr className="line"/>
        <Container>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2000px-LinkedIn_Logo.svg.png" 
          className="linkedinLogo"/>
          <Row className="footer" style={{color:"#B1B4CB"}}>
            <Col sm="9">
              <Row className="rowFooter1">
                <Col sm="4">
                  <b>About</b>
                </Col>
                <Col sm="4">
                  <b>Talent Solutions</b>
                </Col>
                <Col sm="4">
                  <b>Community Guidelines</b>
                </Col>
              </Row>

              <Row className="rowFooter2">
                <Col sm="4">
                  <b>Careers</b>
                </Col>
                <Col sm="4">
                  <b>Marketing Solutions</b>
                </Col>
                <Col sm="4">
                  <b>Privacy & Terms</b>
                </Col>
              </Row>

              <Row className="rowFooter3">
                <Col sm="4">
                  <b>Advertising</b>
                </Col>
                <Col sm="4">
                  <b>Sales Solutions</b>
                </Col>
                <Col sm="4">
                  <b>Send Feedback</b>
                </Col> 
              </Row>

              <Row className="rowFooter4">
                <Col sm="4">
                  <b>Mobile</b>
                </Col>
                <Col sm="4">
                  <b>Small Business</b>
                </Col>
                <Col sm="4">
                  <b>Safety Center</b>
                </Col> 
              </Row>

            </Col>
            <Col sm="3">
              <Row>
                <Col sm="12">
                  <i className="far fa-question-circle"></i><b>Questions?</b>
                </Col>
                <Col sm="12">
                  <p>Visit our help center</p>
                </Col>
              </Row>

              <Row>
                <Col sm="12">
                  <i className="fas fa-cog"></i><b>Manage your account and privacy</b>
                </Col>
                <Col sm="12">
                  <p>Go to your settings</p>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;