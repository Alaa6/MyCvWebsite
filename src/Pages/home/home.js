
import './home.css';
import React from 'react'
import myPic from '../../assets/images/myPic.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import CustomCarouselItem from "../../components/carouselItem/carouseltem";

import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';


export default function Home() {

      // State for Active index
      const [activeIndex, setActiveIndex] = React.useState(0);
  
      // State for Animation
      const [animating, setAnimating] = React.useState(false);
    


    // Sample items for Carousel
    const items = [
        {
            caption: 'Sample Caption One', 
            src:'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two', 
            src:'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
            altText: 'Slide Two'
        }
    ];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                {/* <img src={item.src} alt={item.altText} /> */}
                <CustomCarouselItem headerName="ABOUT ME" aboutMe />
            </CarouselItem>
        );
    });

    return (
        <div className="homeContainer" >
            <section id="my-name-section" className="home-sections">
                <h1>Alaa Ashraf Fathy</h1>
                <h3>Front-end and Cross-platform Developer </h3>
            </section>

            <section id="image-section" className="home-sections">
                <img src={myPic} alt="MyPic" className="my-pic" />
            </section>

            <section id="cv-content-section" className="home-sections">


                <Carousel previous={previousButton} next={nextButton}
                    activeIndex={activeIndex}>
                    <CarouselIndicators items={items}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }} />
                    {carouselItemData} 
                    
                    <CarouselControl directionText="Prev"
                        direction="prev" onClickHandler={previousButton} />
                    <CarouselControl directionText="Next"
                        direction="next" onClickHandler={nextButton} />
                </Carousel>


            </section>
           


        </div>
    );
}


