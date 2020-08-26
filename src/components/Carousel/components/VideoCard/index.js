import React from 'react';
// CSS
import {VideoCardContainer} from './styles.js'

const getYouTubeId = (youtubeURL) => {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


const VideoCard = ({ videoTitle, videoURL, categoryColor, children }) => {

  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  return (
    <VideoCardContainer
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      url={image}
    />
  );
}

export default VideoCard;

// background-image: ${({ url }) => `url(${url})`};
