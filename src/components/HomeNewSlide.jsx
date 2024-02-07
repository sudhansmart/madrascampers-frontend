import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Container } from 'react-bootstrap';
import img1 from '../assets/images/adventure.jpg'

function HomeNewSlide() {
    const images2 = [
        {
            url: img1,
        },
        {
            url: "https://cdn.shopclues.com/images/banners/2023/Mar/25/HB2_Refurbished_Web_SYM_25Mar23.jpg"
        },
        {
            url: "https://cdn.shopclues.com/images/banners/2023/Mar/25/HB3_Trueware_Web_SYM_25Mar23.jpg"
        },
        {
            url: "https://cdn.shopclues.com/images/banners/2023/Mar/31/HB4_JDD_Web_Esha_31Mar23.jpg"
        },
        {
            url: "https://cdn.shopclues.com/images/banners/2023/Mar/01/Intel_Web_12thGenGaming.jpg"
        }
    ];

    const [sliderDimensions, setSliderDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setSliderDimensions({
                width: window.innerWidth > 768 ? 1519 : window.innerWidth,
                height: window.innerWidth > 768 ? 600 : 300
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container fluid>
            <div className="HomeNewSlide">
                <SimpleImageSlider  style={{backgroundRepeat:'no-repeat'}}
                    width={sliderDimensions.width}
                    height={sliderDimensions.height}
                    images={images2}
                    showBullets={true}
                    showNavs={false}
                />
            </div>
        </Container>
    );
}

export default HomeNewSlide;
