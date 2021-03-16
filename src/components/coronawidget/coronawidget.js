import React from 'react';
import Slider from "react-slick";
import coronathumb from '../../assets/img/coronathumb.jpg';
import './coronawidget.scss';
import  Globals from '../../api' ;

export default class Coronawidget extends React.Component{

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
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
            };
        let pagelist = this.state.data;
        let PagelistDataFull = pagelist.filter((x)=>x.Type == "PageList" );
        let PagelistDatas = PagelistDataFull.slice(3,4);
        console.log("🚀 ~ file: bollywoodmasala.js ~ line 38 ~ CORONA ~ render ~ PagelistData", PagelistDatas)


        const _PagelistDataItemss = PagelistDatas.map((item, i ) =>    
        <div className="news_widget_panel coronavirus_w">
        <div className="n_w_p_head">
            <h2 href = {item.ViewAllUrl}><label>{item.Title}</label></h2>
        </div>
        <div className="n_w_p_body">
        <div className="coronav_slider">
                     <Slider {...settings}>
        {item.Pages.map((item, i ) => 
              
               <div  className="coronavirus_w_block">
               <span><a href={item.Url}><img src={item.Image || item.Thumbnail}/></a></span>
               <h4><a href={item.Url}>{item.Title}</a></h4>
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
            // <div className="news_widget_panel coronavirus_w">
            //     <div className="n_w_p_head">
            //         <h2><label>कोरोना वायरस</label></h2>
            //     </div>
            //     <div className="n_w_p_body">
            //         <div className="coronav_slider">
            //             <Slider {...settings}>
            //             <div className="coronavirus_w_block">
            //                 <span><a href="#"><img src={coronathumb}/></a></span>
            //                 <h4><a href="#">दिल्ली में 6 नवंबर के बाद कोरोना से सबसे कम मौतें, नए मामले 5 हजार से नीचे</a></h4>
            //             </div>
            //             <div className="coronavirus_w_block">
            //                 <span><a href="#"><img src={coronathumb}/></a></span>
            //                 <h4><a href="#">दिल्ली में 6 नवंबर के बाद कोरोना से सबसे कम मौतें, नए मामले 5 हजार से नीचे</a></h4>
            //             </div>
            //             </Slider>
            //         </div>
            //     </div>
            // </div>
        )
    }
}