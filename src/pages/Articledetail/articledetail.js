import React from 'react';
import './articledetail.scss';

import ads5 from '../../assets/img/ads5.png';
import ads7 from '../../assets/img/ads7.png';
import plugin1 from '../../assets/img/plugin1.png';

import article_image from '../../assets/img/article_image.png';
import Coronawidget from '../../components/coronawidget/coronawidget';
import Horroscope from '../../components/horroscope/horroscope';
import RelatedArticle from '../../components/RelatedArticle/relatedarticle';
import MustRead from '../../components/MustRead/Mustread';

export default class ArticleDetail extends React.Component{
    render(){
        return(
            <div className="article_detail">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="aritcle_container">
                                <div className="article_sticky_sect sticky-top" >
                                    <div className="arti_written">
                                        <span>Written By</span> अनिल त्रिवेदी
                                    </div>
                                    
                                    <div className="arti_date">
                                        <span>Last Updated:</span> बुधवार, 17 जून 2020 (09:12 IST)
                                    </div>
                                    <div className="arti_social_block">
                                        <ul>
                                            <li><a href="#" className="art_fb_icon"></a></li>
                                            <li><a href="#" className="art_tw_icon"></a></li>
                                            <li><a href="#" className="art_whapp_icon"></a></li>
                                            <li><a href="#" className="art_email_icon"></a></li>
                                        </ul>
                                    </div>
                                    <div className="next_article_block">
                                        <h3>अगला लेख</h3>
                                        <ul>
                                            <li><a href="#">क्या पूरे देश को लगेगा कोरोना का टीका? सरकार का बड़ा बयान</a></li>
                                            <li><a href="#">मायावती ने राजस्थान सरकार पर जमकर साधा निशाना, कहा- बसों का बिल भेजना सरकार की अमानवीयता...</a></li>
                                            <li><a href="#">शहडोल के सरकारी अस्पताल में 3 दिन में 8 बच्चों की मौत, CM ने दिए जांच के आदेश	</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="article_content">
                                    <div className="article_in_content">
                                    <div className="article_title ">
                                        <h1>आज शाम किसानों से मिलेंगे गृह मंत्री Amit Shah, राकेश टिकैत बोले - मसला सुलझने की उम्मीद</h1>
                                    </div>

                                    <div className="arti_img">
                                        <img src={article_image}/>
                                    </div>  

                                    <p><strong>नई दिल्ली:</strong> कृषि कानूनों (Farm Laws) के विरोध के चलते किसान आंदोलन (Farmers Protest) और राष्ट्रव्यापी भारत बंद (Bharar Bandh) को लेकर आगे के हालातों को लेकर हर कोई असमंजस में है. किसानों और सरकार के बीच पांच दौर की लंबी वार्ता चली लेकिन नतीजा कुछ भी नहीं निकला. किसान अपनी मांगों पर अड़े हुए हैं तो सरकार किसानों के हित में हर कदम उठाने का दावा कर रही है. इस बीच आज गृह मंत्री अमित शाह (Amit Shah) किसानों से बातचीत के जरिए मुद्दा सुलझाने की कोशिश करेंगे.</p>

                                    <p>एक तरफ देश भर में किसानों ने भारत बंद (Bharat Bandh) किया तो दिल्ली में सरकार और किसानों के बीच चला आ रहा गतिरोध समाप्त करने की कोशिशें फिर से तेज हो गई हैं. देश के गृह मंत्री अमित शाह (Amit Shah) अब मोर्चा संभालते दिख रहे हैं. आज किसान नेताओं की गृह मंत्री की मुलाकात होगी. बैठक का समय शाम 7 बजे तय किया गया है.</p>

                                    <p><a href="#"><strong>ALSO READ:</strong></a> <strong>Farmers Protest के ​बीच टिकरी बॉर्डर पर Sonipat से प्रदर्शन में हिस्सा लेने आए किसान की मौत</strong></p>

                                    <div className="ads_block"><img src={ads5} /></div>

                                    <p>यह बैठक तय होने के बाद राकेश टिकैत ने कहा, हम सिंघु बॉर्डर जा रहे हैं और फिर वहां से गृह मंत्री की बैठक में जाएंगे. साथ ही उन्होंने किसानों से हाईवे खोलने की अपील की है. किसानों का भारत बंद 3 बजे खत्म हो चुका है.</p>

                                    <p><a href="#"><strong>ALSO READ:</strong></a> <strong>Farmers Protest के ​बीच टिकरी बॉर्डर पर Sonipat से प्रदर्शन में हिस्सा लेने आए किसान की मौत</strong></p>

                                    <p>बता दें, किसान आंदोलन (Farmers Protest) के बीच सुबह से ही अलग-अलग राज्यों में भारत बंद (Bharat Bandh) का मिला जुला असर दिखा. किसानों के समर्थन में 20 से ज्यादा राजनीतिक दल भी सड़कों पर उतरे. दिल्ली से लेकर राजस्थान, यूपी से लेकर ओडिशा तक में किसानों का भारत बंद शांतिपूर्ण रहा. किसानों का भारत बंद सुबह 11 बजे से 3 बजे तक था.</p>

                                    <p>चीन ने एकबार फिर झूठ का राग अलापने की कोशिश की है। भारत-चीन सीमा पर तनाव के बीच आज रक्षा मंत्री राजनाथ सिंह ने तीनों सेना प्रमुखों के साथ एक अहम बैठक की ।इस अहम बैठक के बाद राजनाथ ने हिंसक झड़प में शहीद जवानों को याद करते हुए कहा है कि देश उनकी बहादुरी और बलिदान को कभी नहीं भूलेगा। मेरी भावनाएं सैनिकों के परिवार वालों के साथ हैं। हमें भारत के बहादुरों की बहादुरी और साहस पर गर्व है।</p>
                                    </div>

                                    <div className="readmore_tags">
                                        <ul className="readm_tags_list">
                                            <li><span>और भी पढ़ें :</span></li>
                                            <li><a href="#">अमेरिका</a></li>
                                            <li><a href="#">भारत</a></li>
                                            <li><a href="#">चीन</a></li>
                                            <li><a href="#">टकरा</a></li>
                                            <li><a href="#">नजर</a></li>
                                            <li><a href="#">हालात</a></li>
                                            <li><a href="#">America</a></li>
                                        </ul>
                                    </div>

                                    <img className="img-fluid" src={ads7}/>

                                </div>
                                
                                
                            </div>
                            <div className="article_after_seciton">

                                <RelatedArticle/>
                                <br/>
                                <img className="img-fluid" src={plugin1}/>


                            </div>
                        </div>
                        <div className="col right_side_bar">
                            <div className="ads_block m-b-15"><img src={ads5} /></div>
                            <MustRead/>
                            <div className="m-b-15"></div>
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

