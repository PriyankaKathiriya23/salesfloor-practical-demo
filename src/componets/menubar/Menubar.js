import React from "react";
import classes from './Menubar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import banner from './banner.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// menubar code start here 
function Menubar(){
    return(
        <div>
            
            <header>
            <Container>
                <h1 className={classes.logo}>LOGO</h1>
                <ul className={classes.nav}>
                <li className={classes.navlink}><a href="#">Home</a></li>
                <li className={classes.navlink}><a href="#">About</a></li>
                <li className={classes.navlink}><a href="#">Projects</a></li>
                <li className={classes.navlink}><a href="#">Contact</a></li>
                </ul>
                <div className={classes.burger}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                </Container>
             </header>
            
            <div className={classes.bannerimage}>
                <img src={banner} />
            </div>

           <div className={classes.sectioncontent}>
                <Container>
                <Row>
                    <Col xs={12} md={6}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Col>
                    <Col xs={6} md={6}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                    </Col>
                </Row>
                </Container>
             </div>    
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <div className={classes.sectioncontentsecond}>
            <Container>
            <Row>
                <Col  xs={6} md={4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   
                </Col>
                <Col xs={6} md={4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   
                </Col>
                <Col xs={6} md={4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   
                </Col>
            </Row>
            </Container>
            </div>         
            {/* Columns are always 50% wide, on mobile and desktop */}
            
                          
        </div>
    )
}
export default Menubar;
