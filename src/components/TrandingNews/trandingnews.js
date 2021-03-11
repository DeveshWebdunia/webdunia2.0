import React from 'react';
import  Globals from '../api' ;
import './trandingnews.scss';

import Slider from "react-slick";

// import trand_img1 from '../../assets/img/tranding/trand_img1.jpg';
// import trand_img2 from '../../assets/img/tranding/trand_img2.jpg';
// import trand_img3 from '../../assets/img/tranding/trand_img3.jpg';
// import trand_img4 from '../../assets/img/tranding/trand_img4.jpg';
// import trand_img5 from '../../assets/img/tranding/trand_img5.jpg';


export default class TrandingNews extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data : []
         };
      }
    componentDidMount() {
        // console.log('api at header' + Globals.language_based_api);
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents
                })
            })   
          }
        
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            arrows:false,
            vertical:true,
            autoplay: true,
            autoplaySpeed: 2000,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            verticalScrolling: true,
            accessibility: false
            
    
        }; 
    let pagelist = this.state.data;
    let PagelistData = pagelist.filter((x)=>x.Title == "ट्रेंडिंग");
 const _PagelistDataItemss = PagelistData.map((item, i ) =>    
 <div className="news_widget_panel top_news">
 <div className="n_w_p_head">
 <h2><label>{item.Title}</label></h2>
 </div>
 <div className="n_w_p_body">
<div className="tranding_news_list">
<Slider {...settings}>
  {item.Pages.map((item, i ) => 
     	<div className="trn_n_blocks">
         <span className="n_tr_thumb"><a href="#"><img  class="lazy" src={item.Image || item.Thumbnail } alt={item.Title} title={item.Title}/></a></span>
         <span className="n_tr_info">
         <h3><a href={item.Url}>{item.Title}</a></h3>                     
         </span>       
     </div>	
      )}
 </Slider>
    </div>
    </div>
  </div>
   );
      
        return(
            <div>
                {_PagelistDataItemss}
            </div>
            // <div className="news_widget_panel top_news">
            //     <div className="n_w_p_head">
            //         <h2><label>ट्रेंडिंग न्यूज़</label></h2>
            //     </div>
            //     <div className="n_w_p_body">
            //        <div className="tranding_news_list">
            //         <Slider {...settings}>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img1}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">Live Updates : 23वें दिन भी कड़ाके की ठंड में दिल्ली बॉर्डर पर डटे किसान, आज गाजीपुर बॉर्डर भी बंद</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img2}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">Weather update : बर्फीली हवाओं ने ढाया कहर, दिल्ली में कड़ाके की ठंड</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img3}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">नरोत्तम मिश्रा का बड़ा बयान, कोई भी अपराधी अब MP में शरण नहीं ले पाएगा, हम भून देंगे</a></h3>
                           
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img4}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">टीम इंडिया की पहली पारी 244 रनों पर सिमटी, 11 रन के भीतर गंवाए आखिरी 4 विकेट</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img5}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">MP में आज‌ से 9वीं से 12वीं तक‌ के स्कूल खुले,आज पैरेंट्स-टीचर मीटिंग ‌के साथ‌ लगेगी रेगुलर क्लास</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img3}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">नरोत्तम मिश्रा का बड़ा बयान, कोई भी अपराधी अब MP में शरण नहीं ले पाएगा, हम भून देंगे</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img4}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">टीम इंडिया की पहली पारी 244 रनों पर सिमटी, 11 रन के भीतर गंवाए आखिरी 4 विकेट</a></h3>
            //                </span>
            //            </div>
            //            <div className="trn_n_blocks">
            //                <span className="n_tr_thumb"><a href="#"><img src={trand_img5}/></a></span>
            //                <span className="n_tr_info">
            //                    <time>25 सितंबर 2020</time>
            //                    <h3><a href="#">MP में आज‌ से 9वीं से 12वीं तक‌ के स्कूल खुले,आज पैरेंट्स-टीचर मीटिंग ‌के साथ‌ लगेगी रेगुलर क्लास</a></h3>
            //                </span>
            //            </div>
            //         </Slider>
            //        </div>
            //     </div>
            // </div>
        )
    }
}