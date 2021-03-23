import React from 'react';
import './deutschewelle.scss';
export default class DeutscheWelleWidget extends React.Component {
    render() {
        let pagelist =  this.props.dataFromParent;
        let PagelistData = pagelist.filter((x)=>x.Type == "PageList");
        let PagelistDatas = PagelistData.slice(10,11);
     const _PagelistDataItemss = PagelistDatas.map((item, i ) =>    
     <div className="news_widget_panel deutschewidget">
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label><span className="n_readmore"><a href={item.ViewAllUrl}>और भी पढ़ें</a></span></h2>
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
           <div>{_PagelistDataItemss}</div>
        )
    }
}