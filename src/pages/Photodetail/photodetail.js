import React from 'react';
import './photodetail.scss';

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import ads5 from '../../assets/img/ads5.png';
import ads1 from '../../assets/img/ads1.png';

import photo_slider1 from '../../assets/img/photo_slider1.jpg';
import photo_slider2 from '../../assets/img/photo_slider2.jpg';
import photo_slider3 from '../../assets/img/photo_slider3.jpg';

import photo_gal_thumb1 from '../../assets/img/photo_gal_thumb1.jpg';
import photo_gal_thumb2 from '../../assets/img/photo_gal_thumb2.jpg';
import photo_gal_thumb3 from '../../assets/img/photo_gal_thumb3.jpg';

import p_l_img1 from '../../assets/img/p_l_img1.png';
import p_l_img2 from '../../assets/img/p_l_img2.png';
import p_l_img3 from '../../assets/img/p_l_img3.png';
import p_l_img4 from '../../assets/img/p_l_img4.png';
import p_l_img5 from '../../assets/img/p_l_img5.png';
import p_l_img6 from '../../assets/img/p_l_img6.png';

import p_gall_img1 from '../../assets/img/photogall/p_gall_im1.jpg';
import p_gall_img2 from '../../assets/img/photogall/p_gall_im2.jpg';
import p_gall_img3 from '../../assets/img/photogall/p_gall_im3.jpg';
import p_gall_img4 from '../../assets/img/photogall/p_gall_im4.jpg';
import p_gall_img5 from '../../assets/img/photogall/p_gall_im5.jpg';
import p_gall_img6 from '../../assets/img/photogall/p_gall_im6.jpg';
import p_gall_img7 from '../../assets/img/photogall/p_gall_im7.jpg';
import p_gall_img8 from '../../assets/img/photogall/p_gall_im8.jpg';
import p_gall_img9 from '../../assets/img/photogall/p_gall_im9.jpg';
import p_gall_img10 from '../../assets/img/photogall/p_gall_im10.jpg';
import p_gall_img11 from '../../assets/img/photogall/p_gall_im11.jpg';
import p_gall_img12 from '../../assets/img/photogall/p_gall_im12.jpg';

import Coronawidget from '../../components/coronawidget/coronawidget';
import Horroscope from '../../components/horroscope/horroscope';
import MustRead from '../../components/MustRead/Mustread';

export default class PhotoDetail extends React.Component {

    render() {

        return (
            <div>
                <div className="container padding15">
                    <div className="row">
                        <div className="col">

                            <ul className="wdbreadcrumb">
                                <li><a href="#">फोटो गैलरी</a></li>
                                <li><a href="#">सिनेमा टीवी</a></li>
                                <li>लक्मे फैशन वीक 2020 में गौरांग शाह ने पेश किया 'तारामती' कलेक्शन</li>
                            </ul>

                            <div className="photo_detail_wrap">
                                <div className="photo_d_title">
                                    <h2>लक्मे फैशन वीक 2020 में गौरांग शाह ने पेश किया 'तारामती' कलेक्शन</h2>
                                    <ul className="p_d_social">
                                        <li><a href="#" className="art_fb_icon"></a></li>
                                        <li><a href="#" className="art_tw_icon"></a></li>
                                        <li><a href="#" className="art_whapp_icon"></a></li>
                                    </ul>
                                </div>

                                <div className="photo_d_content">
                                    <p>डिजिटल लक्मे फैशन वीक के पहले दिन फैशन डिजाइनर गौरांग शाह ने अपना शानदार कलेक्शन 'तारामती' शो केस किया, जिसमें कढ़ाई की गई साड़ियों की
मनमोहक रेंज देखने को मिली। देखें तस्वीरें....</p>

                                    <div className="photo_gall_list">
                                        <SimpleReactLightbox>
                                            <SRLWrapper>
                                                <a href={p_gall_img1} data-attribute="SRL">
                                                    <img src={p_gall_img1} />
                                                </a>
                                                <a href={p_gall_img2} data-attribute="SRL">
                                                    <img src={p_gall_img2} />
                                                </a>
                                                <a href={p_gall_img3} data-attribute="SRL">
                                                    <img src={p_gall_img3} />
                                                </a>
                                                <a href={p_gall_img4} data-attribute="SRL">
                                                    <img src={p_gall_img4} />
                                                </a>
                                                <a href={p_gall_img5} data-attribute="SRL">
                                                    <img src={p_gall_img5} />
                                                </a>
                                                <a href={p_gall_img6} data-attribute="SRL">
                                                    <img src={p_gall_img6} />
                                                </a>
                                                <a href={p_gall_img7} data-attribute="SRL">
                                                    <img src={p_gall_img7} />
                                                </a>
                                                <a href={p_gall_img8} data-attribute="SRL">
                                                    <img src={p_gall_img8} />
                                                </a>
                                                <a href={p_gall_img9} data-attribute="SRL">
                                                    <img src={p_gall_img9} />
                                                </a>
                                                <a href={p_gall_img10} data-attribute="SRL">
                                                    <img src={p_gall_img10} />
                                                </a>
                                                <a href={p_gall_img11} data-attribute="SRL">
                                                    <img src={p_gall_img11} />
                                                </a>
                                                <a href={p_gall_img12} data-attribute="SRL">
                                                    <img src={p_gall_img12} />
                                                </a>
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                       
                                    </div>

                                   


                                </div>


                            </div>

                            <div className="m-b-20"></div>

                            <div className="ads_block m-t-10 m-b-20">
                                <img src={ads1} />
                            </div>

                            <div className="news_widget_panel">
                                <div className="n_w_p_head">
                                    <h2><label>सिनेमा और भी...</label></h2>
                                </div>
                                <div className="n_w_p_body">

                                    <div className="pho_listing">
                                        <div className="p_col">
                                            <div className="photos_list_block">
                                                <div className="photo_l_img">
                                                    <a href="#"><img src={p_l_img1} /></a>
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
                                                    <a href="#"><img src={p_l_img2} /></a>
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
                                                    <a href="#"><img src={p_l_img3} /></a>
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
                                                    <a href="#"><img src={p_l_img4} /></a>
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
                                                    <a href="#"><img src={p_l_img5} /></a>
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
                                                    <a href="#"><img src={p_l_img6} /></a>
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
                                                    <a href="#"><img src={p_l_img1} /></a>
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
                                                    <a href="#"><img src={p_l_img2} /></a>
                                                    <label className="photo_l_img_count">11 images</label>
                                                </div>
                                                <div className="photo_l_cont">
                                                    <h2><a href="#">12 साल के कार प्रेमी ने अमिताभ बच्चन को दी स्पोर्ट्स कार खरीदने की सलाह</a></h2>
                                                    <a href="#" className="photo_category">सिनेमा</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="col right_side_bar">
                            <div className="ads_block m-b-15"><img src={ads5} /></div>
                            <Horroscope />
                            <div className="m-b-15"></div>
                            <MustRead />
                            <div className="ads_block m-b-15 m-t-15"><img src={ads5} /></div>
                            <Coronawidget />
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

