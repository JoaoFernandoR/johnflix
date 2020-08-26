import React from 'react';
// Components
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';
// CSS
import './Carousel.scss'

const Carousel = (props) => {

  const {ignoreFirstVideo, category} = props

  const videos = category.videos;


  return (
    <section id="carousel">
      <div className="videocardcontainer">
        {category.titulo && (
          <>
            <div className="title" style={{ backgroundColor: category.cor || 'red' }}>
              {category.titulo}
            </div>
            {category.link_extra && 
              <a className="extralink" href={category.link_extra.url} target="_blank" rel="noopener noreferrer">
                {category.link_extra.text}  
              </a>
            }
          </>
        )}
        <Slider>
          {videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }
    
            return (
              <div className="slideritem" key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={category.cor}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );


} 


export default Carousel;
