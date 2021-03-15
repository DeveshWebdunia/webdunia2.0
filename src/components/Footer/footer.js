import React from 'react';
import  Globals from '../../api' ;
import './footer.scss';

import { Nav , NavDropdown, Link } from 'react-bootstrap';

import apple_app from '../../assets/img/apple_app.png';
import android_app from '../../assets/img/android_app.png';
import wd_logo_white from '../../assets/img/svg/wd_logo_w.svg';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
              footerData : []
         };
      }
      componentDidMount() {
        const FooterConurl= Globals.Desktop_footer_based_api;
        //console.log(HeaderConurl)
        fetch(FooterConurl)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            this.setState({
                footerData :data.NavigationMenu.Items
            })
        })

      }
    render(){

        let _navmenu = this.state.footerData;
        const NavMenu = _navmenu.map((item, i ) =>
        <div className="col-lg-2">
        <div className="footer_widget">
            <h3>{item.Text}</h3>
            <ul className="footer_menus">
            {/* <li>
                <NavDropdown title="मुख्य ख़बरें" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">बॉलीवुड न्यूज़</NavDropdown.Item>
                    <NavDropdown.Item href="#">मूवी रिव्यू</NavDropdown.Item>
                </NavDropdown>
            </li> */}
              {item.Items.map((item, i ) => 
                 <li><Nav.Link href={item.DefaultUrl}>{item.Text}</Nav.Link></li>
              )}
            {/* <li><Nav.Link href="#">करियर</Nav.Link></li>
            <li><Nav.Link href="#">व्यापार</Nav.Link></li>
            <li><Nav.Link href="#">टेक्नोलॉजी</Nav.Link></li>
            <li><Nav.Link href="#">ऑटो मोबाइल</Nav.Link></li> */}
            </ul>
        </div>
    </div>
          );

        return(
            <div className="footer_seciton">
               
                <div className="footer_top_sect">
                    <div className="container">
                        <div className="apps_link">
                            <a href="#"><img src={apple_app}/></a>
                            <a href="#"><img src={android_app}/></a>
                        </div>
                    </div>
                </div>
                <div className="footer_sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="footer_about">
                                    <span><img src={wd_logo_white}/></span>
                                    <div className="f_social_block">
                                    <span>FOLLOW US ON</span>
                                    <ul className="f_follow_us">
                                        
                                        <li><a href="#" className="f_fb_icon"></a></li>
                                        <li><a href="#" className="f_tw_icon"></a></li>
                                        <li><a href="#" className="f_yt_icon"></a></li>
                                        <li><a href="#" className="f_inst_icon"></a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {NavMenu}
                            {/* <div className="col-lg-2">
                                <div className="footer_widget">
                                    <h3>समाचार</h3>
                                    <ul className="footer_menus">
                                    <li>
                                        <NavDropdown title="मुख्य ख़बरें" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#">बॉलीवुड न्यूज़</NavDropdown.Item>
                                            <NavDropdown.Item href="#">मूवी रिव्यू</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li><Nav.Link href="#">करियर</Nav.Link></li>
                                    <li><Nav.Link href="#">व्यापार</Nav.Link></li>
                                    <li><Nav.Link href="#">टेक्नोलॉजी</Nav.Link></li>
                                    <li><Nav.Link href="#">ऑटो मोबाइल</Nav.Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_widget">
                                    <h3>मनोरंजन</h3>
                                    <ul className="footer_menus">
                                    <li><Nav.Link href="#">वेबदुनिया यूट्‍यूब</Nav.Link></li>
                                    <li>
                                        <NavDropdown title="बॉलीवुड" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#">बॉलीवुड न्यूज़</NavDropdown.Item>
                                            <NavDropdown.Item href="#">मूवी रिव्यू</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li>
                                        <NavDropdown title="टीवी" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#">बॉलीवुड न्यूज़</NavDropdown.Item>
                                            <NavDropdown.Item href="#">मूवी रिव्यू</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li>
                                        <NavDropdown title="फनी जोक्स" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#">बॉलीवुड न्यूज़</NavDropdown.Item>
                                            <NavDropdown.Item href="#">मूवी रिव्यू</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li><Nav.Link href="#">पर्यटन</Nav.Link></li>
                                    </ul>
                                </div>
                                <div className="footer_widget">
                                    <h3>खेल</h3>
                                    <ul className="footer_menus">
                                    <li><Nav.Link href="#">क्रिकेट</Nav.Link></li>
                                    <li><Nav.Link href="#">अन्य खेल</Nav.Link></li>
                                    <li><Nav.Link href="#">फोटो गैलरी</Nav.Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_widget">
                                    <h3>लाइफ स्‍टाइल</h3>
                                    <ul className="footer_menus">
                                    <li><Nav.Link href="#">सेहत</Nav.Link></li>
                                    <li><Nav.Link href="#">योग</Nav.Link></li>
                                    <li><Nav.Link href="#">NRI </Nav.Link></li>
                                    <li><Nav.Link href="#">रेसिपी  </Nav.Link></li>
                                    <li><Nav.Link href="#">वीमेन कॉर्नर </Nav.Link></li>
                                    <li><Nav.Link href="#">नन्ही दुनिया </Nav.Link></li>
                                    <li><Nav.Link href="#">साहित्य  </Nav.Link></li>
                                    <li><Nav.Link href="#">रोमांस </Nav.Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_widget">
                                    <h3>धर्म-संसार</h3>
                                    <ul className="footer_menus">
                                    <li><Nav.Link href="#">ज्योतिष</Nav.Link></li>
                                    <li><Nav.Link href="#">श्रीमद्‍भगवद्‍गीता</Nav.Link></li>
                                    <li><Nav.Link href="#">श्रीरामचरितमानस </Nav.Link></li>
                                    <li><Nav.Link href="#">श्री कृष्णा </Nav.Link></li>
                                    <li><Nav.Link href="#">रामायण</Nav.Link></li>
                                    <li><Nav.Link href="#">महाभारत </Nav.Link></li>
                                    <li><Nav.Link href="#">व्रत-त्योहार </Nav.Link></li>
                                    <li><Nav.Link href="#">धर्म दर्शन </Nav.Link></li>
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer_widget">
                                    <h3>सामयिक</h3>
                                    <ul className="footer_menus">
                                    <li><Nav.Link href="#">विचार मंथन</Nav.Link></li>
                                    <li><Nav.Link href="#">ओशो वाणी</Nav.Link></li>
                                    <li><Nav.Link href="#">बीबीसी हिंदी </Nav.Link></li>
                                    <li><Nav.Link href="#">डॉयचे वेले </Nav.Link></li>
                                    <li><Nav.Link href="#">बहस</Nav.Link></li>
                                    <li><Nav.Link href="#">पोल </Nav.Link></li>
                                    <li><Nav.Link href="#">भारत का संविधान</Nav.Link></li>
                                    <li><Nav.Link href="#">अन्य चैनल्स</Nav.Link></li>
                                    
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer_bottom_sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <ul className="footer_menu_link">
                                    <li><a href="#">मुख पृष्ठ</a> </li>
                                    <li><a href="#">हमारे बारे में</a></li>
                                    <li><a href="#">आपके सुझाव</a></li>
                                    <li><a href="#">विज्ञापन दें</a></li>
                                    <li><a href="#">अस्वीकरण</a></li>
                                    <li><a href="#">हमसे संपर्क करें</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <p className="copyright_text">Copyright 2020, Webdunia.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}