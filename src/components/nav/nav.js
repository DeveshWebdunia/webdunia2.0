import React from 'react';
import './nav.scss';
import  Globals from '../../api' ;
import { Nav , NavDropdown, Link } from 'react-bootstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            headerData : []
         };
      }
      componentDidMount(){
        const HeaderConurl= Globals.Desktop_header_based_api;
        //console.log(HeaderConurl)
        fetch(HeaderConurl)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            this.setState({
                headerData :data.NavigationMenu.Items
              
            })
        }) 

      }
    render() {
 //navmenu 
 let _navmenu = this.state.headerData; 
   const NavMenu = _navmenu.map((item, i ) => 
       <li class="" id={i}><Nav.Link to={item.DefaultUrl}>{item.Text}</Nav.Link>
     </li>
   );
        
        return (
        
            <div className="wd_navigation" >

                <Nav>
                    <ul>
                        { NavMenu }
                    {/* <li><Nav.Link to="/" >Home</Nav.Link></li>
                    <li><Nav.Link to="/articledetail" >Article</Nav.Link></li>
                    <li><Nav.Link to="/categorylisting" >Category</Nav.Link></li>
                    <li><Nav.Link to="/photogallery" >Photo Gallery</Nav.Link></li>
                    <li><Nav.Link to="/photodetail" >Photo Detail</Nav.Link></li> */}

                    {/* <li><Nav.Link href="#features">किसान आंदोलन</Nav.Link></li>
                    <li><Nav.Link href="#features">कोरोना वायरस</Nav.Link></li>
                    <li><Nav.Link href="#features">ज्योतिष 2021</Nav.Link></li>
                    <li><Nav.Link href="#features">मनोरंजन</Nav.Link></li>
                    <li><Nav.Link href="#features">क्रिकेट</Nav.Link></li>
                    <li><Nav.Link href="#features">बिजनेस</Nav.Link></li>
                    <li><Nav.Link href="#features">धर्म-संसार</Nav.Link></li>
                    <li><Nav.Link href="#features">फोटो गैलरी</Nav.Link></li>
                    <li><Nav.Link href="#features">वीडियो</Nav.Link></li> */}

                    {/* <li><Nav.Link href="#features">IPL 2020</Nav.Link></li>
                    <li><Nav.Link href="#features">कोरोना वायरस</Nav.Link></li>
                    <li>
                        <NavDropdown title="धर्म-संसार" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">बॉलीवुड न्यूज़</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">मूवी रिव्यू</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">आलेख</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">सुशांत सिंह राजपूत</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">आने वाली फिल्म</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">बॉलीवुड फोकस</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">आलेख</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <NavDropdown title="बॉलीवुड" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                   
                    <li>
                        <NavDropdown title="समाचार" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li><Nav.Link href="#features">वीडियो</Nav.Link></li>
                    <li><Nav.Link href="#features">फैक्ट चेक</Nav.Link></li>
                    <li><Nav.Link href="#features">फोटो गैलरी</Nav.Link></li> */} 
                    </ul>
                </Nav>

                
                
            </div>
        )
    }
}