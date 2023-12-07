import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const [videoDetailDatas, setVideoDetailDatas] = useState({});

  const { videoId } = useParams();

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&regionCode=KR&id=${videoId}&key=${apiKey}`,
    )
      .then(res => res.json())
      .then(data => setVideoDetailDatas(data.items[0]));
  }, [videoId]);

  const commaFormat = () => {
    const count = videoDetailDatas.statistics.viewCount;

    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const isEmpty = Object.keys(videoDetailDatas).length === 0;
  if (isEmpty) return null;

  return (
    <div className="py-[4rem] max-w-[1000px] mx-auto my-0 w-[95%] md:w-full">
      <div className="relative">
        <div className="w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl z-1"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1`}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <h1 className="py-3 text-xl font-bold leading-tight">
          {videoDetailDatas.snippet.title}
        </h1>
        <p className="pb-2 text-lg font-bold">
          {videoDetailDatas.snippet.channelTitle}
        </p>
        <div className="p-3 bg-gray-200 rounded-xl">
          <span className="block mb-2 font-semibold">
            {commaFormat()}회 ·{' '}
            {videoDetailDatas.snippet.publishedAt.split('T')[0]}
          </span>
          <p>{videoDetailDatas.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
