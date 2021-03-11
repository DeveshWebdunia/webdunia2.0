import React from 'react';
import './Astrology.scss';

import ads5 from '../../assets/img/ads5.png';

import zdc1 from '../../assets/img/zdc1.png';
import zdc2 from '../../assets/img/zdc2.png';
import zdc3 from '../../assets/img/zdc3.png';
import zdc4 from '../../assets/img/zdc4.png';
import zdc5 from '../../assets/img/zdc5.png';
import zdc6 from '../../assets/img/zdc6.png';
import zdc7 from '../../assets/img/zdc7.png';
import zdc8 from '../../assets/img/zdc8.png';
import zdc9 from '../../assets/img/zdc9.png';
import zdc10 from '../../assets/img/zdc10.png';
import zdc11 from '../../assets/img/zdc11.png';
import zdc12 from '../../assets/img/zdc12.png';

import MustRead from '../../components/MustRead/Mustread';

export default class Astrology extends React.Component {
    render() {
        return (
            <div className="astrology_page">

                <div className="container padding15">
                    <div className="row">
                        <div className="col">
                            <ul className="wdbreadcrumb ">
                                <li><a href="#">धर्म-संसार</a></li>
                                <li><a href="#">ज्योतिष</a></li>
                                <li>दैनिक-राशिफल</li>
                            </ul>
                            <div className="astrology_container m-t-10">

                                <ul className="astro_buttons">
                                    <li className="daily_rashi active"><a href="#">दैनिक राशिफल</a></li>
                                    <li className="week_rashi"><a href="#">साप्ताहिक राशिफल</a></li>
                                    <li className="month_rashi"><a href="#">मासिक राशिफल</a></li>
                                    <li className="year_rashi"><a href="#">वार्षिक राशिफल</a></li>
                                </ul>

                                <div className="astro_head">
                                    <h2>दैनिक राशिफल</h2>
                                    <div className="astro_select_date">
                                        <span>तारीख़ चुनें</span>
                                        <select>
                                            <option>24-दिसंबर-2020</option>
                                        </select>
                                    </div>
                                </div>
                                <p>हिन्दी वेबदुनिया का राशिफल विशेष, जहां आप पाएंगे आज के दिन का राशिफल, कैसा होगा आपका दिन, किसे मिलेगा प्यार, किसका चलेगा व्यापार, करियर में किसे मिलेगी उड़ान, किसे मिलेगा धन अपार... हर वर्ग के लिए जानिए दैनिक राशिफल
</p>
                                <div className="astro_block_list">
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc1}/></span>
                                        <div className="astro_content">
                                            <h3>मेष</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc2}/></span>
                                        <div className="astro_content">
                                            <h3>वृष</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc3}/></span>
                                        <div className="astro_content">
                                            <h3>मिथुन</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc4}/></span>
                                        <div className="astro_content">
                                            <h3>कर्क</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc5}/></span>
                                        <div className="astro_content">
                                            <h3>सिंह</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc6}/></span>
                                        <div className="astro_content">
                                            <h3>कन्या</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc7}/></span>
                                        <div className="astro_content">
                                            <h3>तुला</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc8}/></span>
                                        <div className="astro_content">
                                            <h3>वृश्चिक</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc9}/></span>
                                        <div className="astro_content">
                                            <h3>धनु</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc10}/></span>
                                        <div className="astro_content">
                                            <h3>मकर</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc11}/></span>
                                        <div className="astro_content">
                                            <h3>कुंभ</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                    <div className="astrology_block">
                                        <span className="astro_icon"><img src={zdc12}/></span>
                                        <div className="astro_content">
                                            <h3>मीन</h3>
                                            <p>व्यावसायिक यात्रा मनोनुकूल रहेगी। परीक्षा व साक्षात्कार आदि में सफलता प्राप्त होगी। पार्टनरों से मतभेद दूर होकर सहयोग प्राप्त होगा। किसी बड़ी समस्या से मुक्ति मिलेगी। भाग्य का साथ मिलेगा। घर-बाहर प्रसन्नता रहेगी।अप्रत्याशित लाभ के योग हैं। सट्‍टे व लॉटरी के चक्कर में न पड़ें। </p>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                        <div className="col right_side_bar">
                            <div className="ads_block m-b-15"><img src={ads5} /></div>
                            <MustRead />
                            <div className="m-b-15"></div>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}