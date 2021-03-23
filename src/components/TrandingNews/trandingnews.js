import React from 'react';
import './trandingnews.scss';
import Slider from "react-slick";

export default class TrandingNews extends React.Component{        
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
    let pagelist = this.props.dataFromParent ;
    let PagelistDataFull = pagelist.filter((x)=>x.Type == "PageList" );
    let PagelistDatas = PagelistDataFull.slice(0,1);
 const _PagelistDataItemss = PagelistDatas.map((item, i ) =>    
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
        )
    }
}