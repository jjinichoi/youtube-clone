import React from 'react';
import useFetch from '../../Hooks/useFetch';

const Main = () => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const { getData: videoListDatas } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&chart=mostPopular&regionCode=KR&maxResults=25&key=${apiKey}`,
  );

  return (
    <div>
      <ul>
        {videoListDatas?.items?.map(video => (
          <li key={video.id}>
            <img src={video.snippet.thumbnails.medium.url} alt="썸네일" />
            <h1>{video.snippet.title}</h1>
            <p>{video.snippet.channelTitle}</p>
            <span>
              {video.statistics.viewCount}회 {video.snippet.publishedAt}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
