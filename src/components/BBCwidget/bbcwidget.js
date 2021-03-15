import React from 'react';
import './bbcwidget.scss';
import  Globals from '../../api' ;

import bbc1 from '../../assets/img/bbc1.jpg';
import bbc2 from '../../assets/img/bbc2.jpg';
import bbc3 from '../../assets/img/bbc3.jpg';
import bbc4 from '../../assets/img/bbc4.jpg';

export default class BBCWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data : []
         };
      }
    componentDidMount() {
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents
                })
            })   
          }

    render() {
        let pagelist = this.state.data;
        let PagelistData = pagelist.filter((x)=>x.Title == "बीबीसी");
     const _PagelistDataItemss = PagelistData.map((item, i ) =>    
     <div className="news_widget_panel bbcwidget">
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label></h2>
     </div>
     <div className="n_w_p_body">
    

      {item.Pages.slice(0,4).map((item, i ) => 
             <div className="news_block_l">
             <div className="n_block_l_thumb"><a href={item.Url}><img  class="lazy" src={item.Image || item.Thumbnail } alt={item.Title} title={item.Title}/></a></div>
             <div className="n_block_l_cont">
             <time>{item.PublishedDate || item.PublishDate}</time>    
             <h2><a href={item.Url}>{item.Title}</a></h2>                     
             </div>       
         </div>	
          )}
        </div>
      </div>
       );

        return (
            <div>
                {_PagelistDataItemss}
            </div>
            // <div className="news_widget_panel bbcwidget">
            //     <div className="n_w_p_head">
            //         <h2><label>बीबीसी</label><span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
            //     </div>
            //     <div className="n_w_p_body">
                    
            //         <div className="news_block_l">
            //             <div className="n_block_l_thumb"><a href="#"><img src={bbc1} /></a></div>
            //             <div className="n_block_l_cont">
            //                 <time>25 सितंबर 2020</time>
            //                 <h2><a href="#">पश्चिम बंगाल: टीएमसी नेताओं का बीजेपी में शामिल होना बनेगा फूट की वजह या जीत का कारण</a></h2>
            //             </div>
            //         </div>
            //         <div className="news_block_l">
            //             <div className="n_block_l_thumb"><a href="#"><img src={bbc2} /></a></div>
            //             <div className="n_block_l_cont">
            //                 <time>25 सितंबर 2020</time>
            //                 <h2><a href="#">गोवा को 451 साल की गुलामी से लोहिया ने कैसे दिलाई आज़ादी</a></h2>
            //             </div>
            //         </div>
            //         <div className="news_block_l">
            //             <div className="n_block_l_thumb"><a href="#"><img src={bbc3} /></a></div>
            //             <div className="n_block_l_cont">
            //                 <time>25 सितंबर 2020</time>
            //                 <h2><a href="#">#FarmersProtest : पंजाब, हरियाणा और पश्चिमी उत्तर प्रदेश के किसानों की तरह देश के बाक़ी किसान आंदोलन क्यों नहीं कर रहे हैं?</a></h2>
            //             </div>
            //         </div>
            //         <div className="news_block_l">
            //             <div className="n_block_l_thumb"><a href="#"><img src={bbc4} /></a></div>
            //             <div className="n_block_l_cont">
            //                 <time>25 सितंबर 2020</time>
            //                 <h2><a href="#">विजय दिवस : 13 दिन की भारत-पाकिस्तान की लड़ाई और बांग्लादेश का जन्म</a></h2>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}