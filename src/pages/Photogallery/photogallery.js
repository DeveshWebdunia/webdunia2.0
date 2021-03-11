import React from 'react';
import './photogallery.scss';

import ads5 from '../../assets/img/ads5.png';
import photo3 from '../../assets/img/photog3.png';

import photo_gal_larg from '../../assets/img/photo_gal_larg.png';
import p_l_img1 from '../../assets/img/p_l_img1.png';
import p_l_img2 from '../../assets/img/p_l_img2.png';
import p_l_img3 from '../../assets/img/p_l_img3.png';
import p_l_img4 from '../../assets/img/p_l_img4.png';
import p_l_img5 from '../../assets/img/p_l_img5.png';
import p_l_img6 from '../../assets/img/p_l_img6.png';

import Coronawidget from '../../components/coronawidget/coronawidget';
import Horroscope from '../../components/horroscope/horroscope';

export default class PhotoGallery extends React.Component{
    render(){
        return(
            <div>
                <div className="container padding15">
                    <div className="row">
                        <div className="col">

                            <div className="photo_gall_tabs">
                            <ul>
                              <li><a href="#" className="active">सभी</a></li>
                              <li><a href="#">समाचार</a></li>
                              <li><a href="#">सिनेमा</a></li>
                              <li><a href="#">ऑटोमोबाइल्स</a></li>
                              <li><a href="#">धर्म संसार</a></li>
                              <li><a href="#"> पर्यटन</a></li>
                              <li><a href="#"> खेल</a></li>
                            </ul>
                            </div>

                            
                            <div className="photos_top_sect">
                                <ul>
                                    <li>
                                        <div className="photo_gall_m_block">
                                            <a href="#"><img src={photo_gal_larg}/></a>
                                            <div className="photo_gall_capt">
                                                <a href="#" className="photo_category">समाचार</a>
                                                <h2><a href="#">हाईवे बना किसानों के लिए नया घर, न ठंड की चिंता न कोरोनावायरस का डर</a></h2>
                                            </div>   
                                        </div>
                                    </li>
                                    <li>
                                        <div className="photos_list_block">
                                            <div className="photo_l_img">
                                                <a href="#"><img src={p_l_img2}/></a>
                                                <label className="photo_l_img_count">11 images</label>
                                            </div>
                                            <div className="photo_l_cont">
                                                <h2><a href="#">हाईवे बना किसानों के लिए नया घर, न ठंड की चिंता न कोरोनावायरस का डर</a></h2>
                                                <a href="#" className="photo_category">समाचार</a>
                                            </div>
                                        </div>
                                        <div className="photos_list_block">
                                            <div className="photo_l_img">
                                                <a href="#"><img src={p_l_img3}/></a>
                                                <label className="photo_l_img_count">11 images</label>
                                            </div>
                                            <div className="photo_l_cont">
                                                <h2><a href="#">हाईवे बना किसानों के लिए नया घर, न ठंड की चिंता न कोरोनावायरस का डर</a></h2>
                                                <a href="#" className="photo_category">धर्म संसार</a>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>

                            
                            <div className="pho_listing">
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img1}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">हाईवे बना किसानों के लिए नया घर, न ठंड की चिंता न कोरोनावायरस का डर</a></h2>
                                            <a href="#" className="photo_category">समाचार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img2}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">12 साल के कार प्रेमी ने अमिताभ बच्चन को दी स्पोर्ट्स कार खरीदने की सलाह</a></h2>
                                            <a href="#" className="photo_category">सिनेमा</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img3}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">हर्षोल्लास के साथ मनाया गया गुरुनानक देव का प्रकाश पर्व</a></h2>
                                            <a href="#" className="photo_category">धर्म संसार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img4}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">भारत में लांच हुई Audi Q2 (ऑडी क्यू2)</a></h2>
                                            <a href="#" className="photo_category">ऑटोमोबाइल्स</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img5}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">महापर्व छठ पर भक्तिमय हुआ बिहार, अस्ताचलगामी सूर्य को अर्घ्य</a></h2>
                                            <a href="#" className="photo_category">धर्म संसार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img6}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">तस्वीरें कुफरी में हुई बर्फबारी की...</a></h2>
                                            <a href="#" className="photo_category">पर्यटन</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img1}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">हाईवे बना किसानों के लिए नया घर, न ठंड की चिंता न कोरोनावायरस का डर</a></h2>
                                            <a href="#" className="photo_category">समाचार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img2}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">12 साल के कार प्रेमी ने अमिताभ बच्चन को दी स्पोर्ट्स कार खरीदने की सलाह</a></h2>
                                            <a href="#" className="photo_category">सिनेमा</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img3}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">हर्षोल्लास के साथ मनाया गया गुरुनानक देव का प्रकाश पर्व</a></h2>
                                            <a href="#" className="photo_category">धर्म संसार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img4}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">भारत में लांच हुई Audi Q2 (ऑडी क्यू2)</a></h2>
                                            <a href="#" className="photo_category">ऑटोमोबाइल्स</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img5}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">महापर्व छठ पर भक्तिमय हुआ बिहार, अस्ताचलगामी सूर्य को अर्घ्य</a></h2>
                                            <a href="#" className="photo_category">धर्म संसार</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_col">
                                    <div className="photos_list_block">
                                        <div className="photo_l_img">
                                            <a href="#"><img src={p_l_img6}/></a>
                                            <label className="photo_l_img_count">11 images</label>
                                        </div>
                                        <div className="photo_l_cont">
                                            <h2><a href="#">तस्वीरें कुफरी में हुई बर्फबारी की...</a></h2>
                                            <a href="#" className="photo_category">समाचार</a>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                              
                            

                           
                            
                        </div>
                        <div className="col right_side_bar">
                            <div className="ads_block m-b-15"><img src={ads5} /></div>
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

