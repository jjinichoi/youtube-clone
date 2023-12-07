import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Aside from './Aside';
import VideoItems from './VideoItems';

const Main = () => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const { getData: videoListDatas } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&chart=mostPopular&regionCode=KR&maxResults=20&key=${apiKey}`,
  );

  return (
    <div className="flex flex-row">
      <Aside />
      <div className="p-8  mt-[4rem] sm:ml-[3.5rem]">
        <ul className="grid grid-cols-1 gap-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
          {videoListDatas?.items?.map(video => (
            <VideoItems key={video.id} video={video} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
