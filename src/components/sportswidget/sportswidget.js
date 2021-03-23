
import React from 'react';
import './sportswidget.scss';


export default class SportWidget extends React.Component {

    
    render() {

        let pagelist =  this.props.dataFromParent;
        let PagelistDataFull = pagelist.filter((x)=>x.Type == "PageList" );
        let PagelistDatas = PagelistDataFull.slice(4,5);
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
                 )
    }
}