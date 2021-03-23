import React from 'react';
import './bollywoodmasala.scss';

export default class BollywoodMasala extends React.Component {

    render() {
        let pagelist =  this.props.dataFromParent;
        let PagelistData = pagelist.filter((x)=>x.Type == "PageList");
        let PagelistDatas = PagelistData.slice(2,3);
     const _PagelistDataItemss = PagelistDatas.map((item, count ) =>    
     <div className="news_widget_panel bollywood_masal_w">
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label>
     <span className="n_readmore"><a href="#">और भी पढ़ें</a></span>
     </h2>
     </div>
     <div className="n_w_p_body">
      <div className="row">
   {item.Pages.slice(0,1).map((item, i ) => (

<div className="h_news_col col-sm-12 col-md-12 col-lg-6">
      <div className="news_block">
          <div className="n_block_thumb">
              <a href="#"><img src={item.Image}/></a>
          </div>
          <div className="n_block_text">
              <h1><a href={item.Url}>{item.Title}</a></h1>
              <time>{item.PublishedDate}</time>
              <div className="n_block_cont">
              {item.Description}
              </div>
          </div>
      </div>
  </div>

))}
<div className="col-sm-12 col-md-12 col-lg-6">
{item.Pages.slice(1,6).map((item, i ) => (


<div className="news_block_l">
   <div className="n_block_l_thumb"><a href="#"><img src={item.Thumbnail}/></a></div>
       <div className="n_block_l_cont">
      <time>{item.PublishedDate|| item.PublishDate}</time>
           <h2><a href={item.Url}>{item.Title}</a></h2>
               </div>
               </div>
  
))}
</div>
    
        </div>
        </div>
      </div>
       );

        return (
            <div>
                {_PagelistDataItemss}
            
            {/* <div className="news_widget_panel bollywood_masal_w">
                <div className="n_w_p_head">
                    <h2><label>बॉलीवुड मसाला</label> <span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
                </div>
                <div className="n_w_p_body">
                    <div className="row">
                        <div className="h_news_col col-sm-12 col-md-12 col-lg-6">
                            <div className="news_block">
                                <div className="n_block_thumb">
                                    <a href="#"><img src={bollywood1}/></a>
                                </div>
                                <div className="n_block_text">
                                    <h1><a href="#">रणबीर कपूर की पड़ोसन बनीं आलिया भट्ट, इतने करोड़ में खरीदा एक्टर की बिल्डिंग में अपार्टमेंट!</a></h1>
                                    <time>25 सितंबर 2020</time>
                                    <div className="n_block_cont">
                                    रोहित शेट्टी मसाला फिल्म बनाने के लिए मशहूर हैं। वे अच्छी तरह से जानते हैं कि जनता किस तरह की फिल्म देखना पसंद करती है इसलिए वे लगातार हिट पर हिट फिल्म दिए जा रहे हैं। रोहित को महान फिल्म बनाने का कोई शौक नहीं है। उनके लिए तो यही सफलता है कि उनकी फिल्म से जुड़े सभी लोग पैसा कमाए।
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="news_block_l">
                                <div className="n_block_l_thumb"><a href="#"><img src={bollywood2}/></a></div>
                                <div className="n_block_l_cont">
                                    <time>25 सितंबर 2020</time>
                                    <h2><a href="#">विद्युत जामवाल की मूवी 'द पॉवर' का होगा ओटीटी प्रीमियर</a></h2>
                                </div>
                            </div>

                            <div className="news_block_l">
                                <div className="n_block_l_thumb"><a href="#"><img src={bollywood3}/></a></div>
                                <div className="n_block_l_cont">
                                    <time>25 सितंबर 2020</time>
                                    <h2><a href="#">अजय देवगन बनाएंगे इस साउथ फिल्म का हिन्दी रीमेक, करण और अभय देओल आएंगे नजर!</a></h2>
                                </div>
                            </div>

                            <div className="news_block_l">
                                <div className="n_block_l_thumb"><a href="#"><img src={bollywood4}/></a></div>
                                <div className="n_block_l_cont">
                                    <time>25 सितंबर 2020</time>
                                    <h2><a href="#">ठंडे बस्ते में पड़ी 'गुलाब जामुन' को लेकर अभिषेक बच्चन ने कही यह बात, पत्नी ऐश्वर्या राय संग आने वाले थे नजर</a></h2>
                                </div>
                            </div>

                            <div className="news_block_l">
                                <div className="n_block_l_thumb"><a href="#"><img src={bollywood5}/></a></div>
                                <div className="n_block_l_cont">
                                    <time>25 सितंबर 2020</time>
                                    <h2><a href="#">ईशा गुप्ता की बाथरूम सेल्फी ने सोशल मीडिया पर मचाया तहलका, हॉट तस्वीर हो रही वायरल</a></h2>
                                </div>
                            </div>

                            <div className="news_block_l">
                                <div className="n_block_l_thumb"><a href="#"><img src={bollywood6}/></a></div>
                                <div className="n_block_l_cont">
                                    <time>25 सितंबर 2020</time>
                                    <h2><a href="#">एली अवराम ने मोनोकिनी में शेयर की हॉट तस्वीर, समंदर किनारे चाय का लुत्फ उठाती आईं नजर</a></h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                </div>
            </div> */}
            </div>
        )
    }
}