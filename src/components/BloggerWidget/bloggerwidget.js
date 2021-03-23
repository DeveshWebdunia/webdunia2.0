import React from 'react';
import './bloggerwidget.scss';
import Slider from "react-slick";
export default class BloggerWidget extends React.Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            arrows: true,

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };


        let BlogData = this.props.dataFromParent;
        let BlogDataDetail = BlogData.filter((x) => x.Type == "BlogList");
        // let BlogDataDetaillist = BlogData.filter((x) => x.Type == "PageList");
        const _BlogDataResult = BlogDataDetail.map((item, i) =>
            <div className="news_widget_panel top_news">
                <div className="n_w_p_head">
                    <h2><label>{item.Title}</label> </h2>
                </div>
                <div className="n_w_p_body">
                    <div className="blogger_w_slider">
                        <Slider {...settings}>
                            {item.Pages.map((item, i) =>
                                <div>
                                    <div className="blog_w_block">
                                        <h2>{item.Title}</h2>
                                        <caption>
                                            <div className="blogger_w_img">
                                                <span><img src={item.Thumbnail} /></span>
                                                <strong>{item.AuthorName != null ? item.AuthorName : '_ _ _ _ _'}</strong>
                                            </div>
                                            <p>{item.Description}</p>
                                        </caption>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        );

        return (
            <div>{_BlogDataResult}
            </div>
                   )
    }
}