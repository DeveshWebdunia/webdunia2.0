import React from 'react';
import './categorylisting.scss';

import ads5 from '../../assets/img/ads5.png';
import categoryimg1 from '../../assets/img/side_img1.png';

import cat_l_1 from '../../assets/img/listing/cat_l_1.jpg';
import cat_l_2 from '../../assets/img/listing/cat_l_2.jpg';
import cat_l_3 from '../../assets/img/listing/cat_l_3.jpg';
import cat_l_4 from '../../assets/img/listing/cat_l_4.jpg';
import cat_l_5 from '../../assets/img/listing/cat_l_5.jpg';
import cat_l_6 from '../../assets/img/listing/cat_l_6.jpg';
import cat_l_7 from '../../assets/img/listing/cat_l_7.jpg';
import cat_l_8 from '../../assets/img/listing/cat_l_8.jpg';
import cat_l_9 from '../../assets/img/listing/cat_l_9.jpg';

import article_image from '../../assets/img/article_image.png';
import Coronawidget from '../../components/coronawidget/coronawidget';
import Horroscope from '../../components/horroscope/horroscope';
import MustRead from '../../components/MustRead/Mustread';



export default class CategoryListing extends React.Component{
    render(){
        return(
            <div>
                <div className="container padding15">
                    <div className="row">
                        <div className="col">
                            <div className="aritcle_container">
                              
                              <div className="listing_top_sect">
                                  <ul>
                                      <li>
                                          <a href="#">
                                              <img className="img-fluid" src={cat_l_2}/>
                                              <h2>केजरीवाल ने कहा- UK से आने वाली फ्लाइट्‍स रोके सरकार</h2>
                                          </a>
                                          
                                      </li>
                                      <li>
                                          <a href="#">
                                              <img className="img-fluid" src={cat_l_1}/>
                                              <h2>शिवसेना का बड़ा आरोप, राम मंदिर की आड़ में 2024 के लिए चुनाव प्रचार</h2>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <img className="img-fluid" src={cat_l_3}/>
                                              <h2>चुनिंदा देशों के बीच नहीं हो सकती वैश्विक विकास पर चर्चा : मोदी</h2>
                                          </a>
                                      </li>
                                  </ul>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_4}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">Kisan Andolan : किसानों ने शुरू की 1 दिन की 'क्रमिक' भूख हड़ताल</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    नई दिल्ली। भाजपा अध्यक्ष जेपी नड्डा के काफिले पर हमले के बाद गृहमंत्री अमित शाह 20 दिसंबर को 2 दिवसीय दौरे पर पश्चिम बंगाल जा रहे हैं। इस बीच राज्यपाल जगदीश धनगर ने भाजपा अध्‍यक्ष जेपी नड्डा के काफिले पर हुए हमले पर अपनी रिपोर्ट केंद्र सरकार को सौंप ...
                                    </div>
                                  </div>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_5}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">बंगाल में भाजपा की सुनामी, विजयवर्गीय का प्रशांत किशोर पर पलटवार
</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    जेपी नड्डा के काफिले पर 24 परगना में पथराव की घटना हुई थी. नड्डा की कार पर बड़े पत्थर फेंके गए थे, जिसके लिए उन्होंने टीएमसी कार्यकर्ताओं को जिम्मेदार ठहराया था. उन्होंने आरोप लगाया था कि टीएमसी का यह पूर्व-प्रायोजित हमला था
                                    </div>
                                  </div>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_6}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">TMC के रणनीतिकार प्रशांत किशोर का दावा, बंगाल चुनाव में BJP ने किया दहाई का आंकड़ा पार तो छोड़ दूंगा काम
</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    जेपी नड्डा के काफिले पर 24 परगना में पथराव की घटना हुई थी. नड्डा की कार पर बड़े पत्थर फेंके गए थे, जिसके लिए उन्होंने टीएमसी कार्यकर्ताओं को जिम्मेदार ठहराया था. उन्होंने आरोप लगाया था कि टीएमसी का यह पूर्व-प्रायोजित हमला था
                                    </div>
                                  </div>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_7}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">पेट्रोल-डीजल के दाम लगातार 14वें दिन रहे स्थिर, जानिए 4 महानगरों में भाव...
</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    जेपी नड्डा के काफिले पर 24 परगना में पथराव की घटना हुई थी. नड्डा की कार पर बड़े पत्थर फेंके गए थे, जिसके लिए उन्होंने टीएमसी कार्यकर्ताओं को जिम्मेदार ठहराया था. उन्होंने आरोप लगाया था कि टीएमसी का यह पूर्व-प्रायोजित हमला था
                                    </div>
                                  </div>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_8}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">राजनीति के 10 दिग्गज, जिन्होंने 2020 में दुनिया को अलविदा कहा</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    जेपी नड्डा के काफिले पर 24 परगना में पथराव की घटना हुई थी. नड्डा की कार पर बड़े पत्थर फेंके गए थे, जिसके लिए उन्होंने टीएमसी कार्यकर्ताओं को जिम्मेदार ठहराया था. उन्होंने आरोप लगाया था कि टीएमसी का यह पूर्व-प्रायोजित हमला था
                                    </div>
                                  </div>
                              </div>

                              <div className="listing_block">
                                  <div className="l_thumb_col">
                                    <a href="#"><img src={cat_l_9}/></a>
                                  </div>
                                  <div className="l_info_col">
                                    <h2><a href="#">आकाश में दिखेगा Great Conjunction, 400 साल बाद एक-दूसरे के करीब आएंगे बृहस्पति और शनि, जानिए कैसे देख सकेंगे</a></h2>
                                    <span className="l_arti_date">Updated: <b>11 दिसम्बर, 2020 11:19 AM</b></span>
                                    <span className="l_arti_written">Edited by: <b>तूलिका कुशवाहा</b></span>
                                    <div className="l_arti_cont">
                                    जेपी नड्डा के काफिले पर 24 परगना में पथराव की घटना हुई थी. नड्डा की कार पर बड़े पत्थर फेंके गए थे, जिसके लिए उन्होंने टीएमसी कार्यकर्ताओं को जिम्मेदार ठहराया था. उन्होंने आरोप लगाया था कि टीएमसी का यह पूर्व-प्रायोजित हमला था
                                    </div>
                                  </div>
                              </div>
                              

                            </div>
                            
                        </div>
                        <div className="col right_side_bar">
                            
                            <div className="ads_block m-b-15"><img src={ads5} /></div>
                            <MustRead/>
                            <div className="m-t-15"></div>
                            <Horroscope/>
                            <div className="ads_block m-b-15 m-t-15"><img src={ads5} /></div>
                            <Coronawidget/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

