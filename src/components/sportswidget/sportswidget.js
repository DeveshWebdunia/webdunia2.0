import  Globals from '../../api' ;
import React from 'react';
import './sportswidget.scss';

// import newsimg1 from '../../assets/img/1554038373-791.jpg';

// import sportimg1 from '../../assets/img/sport/sportimg1.jpg';
// import sportimg2 from '../../assets/img/sport/sportimg2.jpg';
// import sportimg3 from '../../assets/img/sport/sportimg3.jpg';
// import sportimg4 from '../../assets/img/sport/sportimg4.jpg';
// import sportimg5 from '../../assets/img/sport/sportimg5.jpg';
// import sportimg6 from '../../assets/img/sport/sportimg6.jpg';
// import sportimg7 from '../../assets/img/sport/sportimg7.jpg';
// import sportimg8 from '../../assets/img/sport/sportimg8.jpg';
// import sportimg9 from '../../assets/img/sport/sportimg9.jpg';

export default class SportWidget extends React.Component {

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
  
    render() {

        let pagelist = this.state.data;
        let PagelistDataFull = pagelist.filter((x)=>x.Type == "PageList" );
        let PagelistDatas = PagelistDataFull.slice(4,5);
        console.log("🚀 ~ file: bollywoodmasala.js ~ line 38 ~ क्रिकेट ~ render ~ PagelistData", PagelistDatas)
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
</div>
            // <div className="news_widget_panel sports_w">
            //     <div className="n_w_p_head">
            //         <h2><label>खेल-संसार</label><span className="n_readmore"><a href="#">और भी पढ़ें</a></span></h2>
            //     </div>
            //     <div className="n_w_p_body">
            //     <div className="row">
            //             <div className="col-sm-12 col-md-12 col-lg-4">
            //                 <div className="news_block">
            //                     <div className="n_block_thumb">
            //                         <a href="#"><img src={newsimg1}/></a>
            //                     </div>
            //                     <div className="n_block_text">
            //                         <h1><a href="#">एडिलेड टेस्ट, पहला दिन: विराट के अर्द्धशतक के बावजूद भारतीय पारी लड़खड़ाई</a></h1>
            //                         <time>25 सितंबर 2020</time>
            //                         <div className="n_block_cont">
            //                         रोहित शेट्टी मसाला फिल्म बनाने के लिए मशहूर हैं। वे अच्छी तरह से जानते हैं कि जनता किस तरह की फिल्म देखना पसंद करती है इसलिए वे लगातार हिट पर हिट फिल्म दिए जा रहे हैं। रोहित को महान फिल्म बनाने का कोई शौक नहीं है। उनके लिए तो यही सफलता है कि उनकी फिल्म से जुड़े सभी लोग पैसा कमाए।
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="col-sm-12 col-md-12 col-lg-4">

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg1}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">पूर्व ऑस्ट्रेलियाई तेज गेंदबाज ब्रेट ली भी डर के भागे कोरोना से</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg2}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">जहीर खान ने कहा, पृथ्वी शॉ के लिए टेस्ट टीम में आगे जगह बनाना मुश्किल</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg3}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">कंगारू बल्लेबाजों पर बिफरे पोंटिंग, अश्विन को हल्के में लेने से नाराज</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg4}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">शाहरुख नहीं सलमान खान के पास होता मन्नत, इस वजह से नहीं खरीदा</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg5}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">सिर्फ 2 लोगों को पता है कि कब होगी सलमान खान की शादी: कैटरीना कैफ</a></h2>
            //                     </div>
            //                 </div>

            //             </div>
            //             <div className="col-sm-12 col-md-12 col-lg-4">
            //             <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg6}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">Forbes Asia’s 100 Digital Stars: अमिताभ बच्चन सहित इन 10 बॉलीवुड सितारों के नाम हैं शामिल</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg7}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">क्या सलमान खान कभी निभा पाएंगे चंगेज खान का किरदार?</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg8}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">अक्षय-आमिर-शाहरुख-सलमान, क्यों नहीं करते प्रियंका के साथ काम</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg8}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">शाहरुख नहीं सलमान खान के पास होता मन्नत, इस वजह से नहीं खरीदा</a></h2>
            //                     </div>
            //                 </div>

            //                 <div className="news_block_l">
            //                     <div className="n_block_l_thumb"><a href="#"><img src={sportimg2}/></a></div>
            //                     <div className="n_block_l_cont">
            //                         <time>25 सितंबर 2020</time>
            //                         <h2><a href="#">सिर्फ 2 लोगों को पता है कि कब होगी सलमान खान की शादी: कैटरीना कैफ</a></h2>
            //                     </div>
            //                 </div>
            //             </div>

            //         </div>
            //     </div>
            // </div>
        )
    }
}