import React, { useEffect, useState } from 'react';
import './style/populer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import TrendCard from '../components/TrendCard';

const API_URL = process.env.REACT_APP_API_URL;

function Populer() {
    const [slides, setSlides] = useState([]);

    const fetchData = () => {
        fetch(`${API_URL}/popular`)
            .then(res => res.json())
            .then(data => {
                setSlides(data.results);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <section id='populer' className="populer">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Populer</h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320:{
                                slidesPerView:1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        autoplay= {{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className='trendSwiper'
                    >
                        {slides &&
                            slides.length > 0 &&
                            slides.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <TrendCard slide={slide} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Populer;
