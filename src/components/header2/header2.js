import React from 'react';
import './header2.scss';

import logo from '../../assets/img/svg/h-logo.svg';
import { Dropdown } from 'react-bootstrap';
import Navigation from '../nav/nav';

export default class Header2 extends React.Component {
    render() {
        return (
            <div className="header_section">
                <div className="h_top_sect">

                    <div className="container">
                        <div className="h_top_block">
                        
                            <div className="wd_logo"><a href="#"><img src={logo}/></a></div>
                            <div className="wd_lang">
                                <ul>
                                    <li><span>Choose your language</span></li>
                                    <li><a className="active" href="#">हिंदी</a> </li>
                                    <li><a href="#">தமிழ்</a> </li>
                                    <li><a href="#">मराठी</a> </li>
                                    <li><a href="#">తెలుగు</a> </li>
                                    <li><a href="#">മലയാളം</a> </li>
                                    <li><a href="#">ಕನ್ನಡ</a> </li>
                                    <li><a href="#">ગુજરાતી</a> </li>
                                    <li><a href="#">English</a> </li>
                                </ul>
                            </div>
                            <div className="h_top_rightsect">
                                <ul className="wd_social_link">
                                    <li><span>Follow us</span></li>
                                    <li className="fb_icon"><a href="#"></a></li>
                                    <li className="tw_icon"><a href="#"></a></li>
                                    <li className="int_icon"><a href="#"></a></li>
                                    <li className="yout_icon"><a href="#"></a></li>
                                </ul>
                                
                            </div>

                            

                        </div>
                    </div>
                    
                </div>

                


                <div className="header_sect" >

                    <div className="container">

                        <div className="h_left_col">
                            <div className="m_bar">

                            <Dropdown>
                                <Dropdown.Toggle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22.001" viewBox="0 0 28 22.001" fill="#ae180e">
<path id="bar" d="M-1139-5731a1,1,0,0,1-1-1,1,1,0,0,1,1-1h26a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-10a1,1,0,0,1-1-1,1,1,0,0,1,1-1h20a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-10a1,1,0,0,1-1-1,1,1,0,0,1,1-1h26a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z" transform="translate(1140 5753)"/>
</svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    
                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">समाचार</a></h3>
                                        <li><a href="#">मुख्य ख़बरें</a></li>
                                        <li><a href="#">राष्ट्रीय</a></li>
                                        <li><a href="#">अंतरराष्ट्रीय</a></li>
                                        <li><a href="#">प्रादेशिक</a></li>
                                        <li><a href="#">#MeToo</a></li>
                                        <li><a href="#">मध्यप्रदेश</a></li>
                                        <li><a href="#">उत्तर प्रदेश</a></li>
                                        <li><a href="#">क्राइम</a></li>
                                        <li><a href="#">वेब-वायरल</a></li>
                                    </ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">ज्योतिष</a></h3>
                                        <li><a href="#">आज का जन्मदिन</a></li>
                                        <li><a href="#">आज का मुहूर्त</a></li>
                                        <li><a href="#">दैनिक राशिफल</a></li>
                                        <li><a href="#">तंत्र-मंत्र-यंत्र</a></li>
                                        <li><a href="#">वास्तु-फेंगशुई</a></li>
                                        <li><a href="#">टैरो भविष्यवाणी</a></li>
                                        <li><a href="#">पत्रिका मिलान</a></li>
                                        <li><a href="#">जन्मकुंडली</a></li>
                                        <li><a href="#">चौघड़िया</a></li>
                                    </ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">बॉलीवुड</a></h3>
                                        <li><a href="#">मिर्च-मसाला</a></li>
                                        <li><a href="#">मूवी रिव्यू</a></li>
                                        <li><a href="#">आने वाली फिल्म</a></li>
                                        <li><a href="#">फोकस</a></li>
                                        <li><a href="#">आलेख</a></li>
                                        <li><a href="#">खुल जा सिम सिम</a></li>
                                        <li><a href="#">सलमान खान</a></li>
                                        <li><a href="#">सनी लियोन</a></li>
                                        <li><a href="#">शाहरुख खान</a></li>
                                    </ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">सेहत</a></h3>
                                        <li><a href="/home-remedies">घरेलू नुस्खे</a></li>
										<li><a href="/disease">जान-जहान</a></li>
										<li><a href="/health-care">यूँ रहें स्वस्थ</a></li>
										<li><a href="/health-news">सेहत समाचार</a></li>
										<li><a href="/natural-medicine">जडी-बूटियाँ</a></li>
										<li><a href="/healthy-food">आहार</a></li>
										<li><a href="/ayurveda">आयुर्वेद</a></li>
										<li><a href="/doctors-advice">डॉक्टर की सलाह</a></li>
                                    </ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">क्रिकेट</a></h3>
										<li><a href="/sports-update">अन्य खेल</a></li>
										<li><a href="/latest-cricket-news">क्रिकेट समाचार</a></li>
										<li><a href="/cricket-articles">क्रिकेट आलेख</a></li>
										<li><a href="/cricket-series">वर्तमान/पिछली श्रृंखलाएँ</a></li>
										<li><a href="/cricket-score-card">स्कोरकार्ड</a></li>
										<li><a href="/sports-coverage">खेल-संसार</a></li>
										<li><a href="/cricket-fixtures">शेड्यूल</a></li>
									</ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">धर्म-संसार</a></h3>
									    <li><a href="/indian-festivals">व्रत-त्योहार</a></li>
										<li><a href="/indian-religion">धर्म-दर्शन</a></li>
										<li><a href="/astrology-hindi">ज्योतिष</a></li>
										<li><a href="/shirdi-sai-baba">शिरडी साईं बाबा</a></li>
										<li><a href="/jay-hanuman">जय हनुमान</a></li>
										<li><a href="#">श्रीरामचरितमानस</a></li>
										<li><a href="/religious-article">आलेख</a></li>
										<li><a href="/sanatan-dharma">सनातन धर्म</a></li>
										<li><a href="/india-religion">धर्म-संसार</a></li>
									</ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">लाइफ स्‍टाइल</a></h3>
										<li><a href="/health-tips">सेहत</a></li>
										<li><a href="/yoga">योग</a></li>
										<li><a href="/nri">NRI</a></li>
										<li><a href="/recipe">रेसिपी</a></li>
										<li><a href="/women">वामा</a></li>
										<li><a href="/kids-world">नन्ही दुनिया</a></li>
										<li><a href="/tourism">पर्यटन</a></li>
										<li><a href="/romance">रोमांस</a></li>
										<li><a href="/literature">साहित्य</a></li>
										<li><a href="/urdu-literature-sahitya">उर्दू साहित्य</a></li>
									</ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">फनी जोक्स</a></h3>
										<li><a href="/hindi-jokes">चुटकुले</a></li>
										<li><a href="/funny-jokes">दद्दू का दरबार</a></li>
										<li><a href="/funny-stories">हास्य व्यंग्य</a></li>
										<li><a href="/funny-joke">कचरे का डिब्बा</a></li>
										<li><a href="/whatsapp-corner">व्हाट्&zwj;स एप की दुनिया</a></li>
									</ul>

                                    <ul className="dropdown_menslink">
                                        <h3><a href="#">सामयिक</a></h3>
										<li><a href="/editorial">संपादकीय</a></li>
										<li><a href="/current-affairs-hindi">विचार-मंथन</a></li>
										<li><a href="/history-and-culture">इतिहास-संस्कृति</a></li>
									</ul>

                                </Dropdown.Menu>
                            </Dropdown>

                                {/* <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22.001" viewBox="0 0 28 22.001" fill="#ae180e">
<path id="bar" d="M-1139-5731a1,1,0,0,1-1-1,1,1,0,0,1,1-1h26a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-10a1,1,0,0,1-1-1,1,1,0,0,1,1-1h20a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-10a1,1,0,0,1-1-1,1,1,0,0,1,1-1h26a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z" transform="translate(1140 5753)"/>
</svg></a> */}
                            </div>
                            {/* <div className="wd_logo"><a href="#"><img src={logo} /></a></div> */}
                        </div>

                        <div className="h_mid_col">
                            <div className="h_menu_sect">
                                <Navigation />
                            </div>
                        </div>

                        <div className="h_right_col">
                            <div className="h_search_apps">
                                <a href="#" className="h_searchlink">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#A50404">
  <path id="search" d="M50.51,48.159l-9.616-9.616A16.843,16.843,0,1,0,38.535,40.9l9.616,9.608a1.665,1.665,0,0,0,2.359-2.351Zm-22.653-6.8a13.506,13.506,0,1,1,13.51-13.5A13.519,13.519,0,0,1,27.857,41.359Z" transform="translate(-11 -11)"/>
</svg>

                                </a>
                                <ul>
                                    <li><a href="#" className="playstore_icon"></a></li>
                                    <li><a href="#" className="apple_icon"></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* <Nav /> */}
                
            </div>
        )
    }
}