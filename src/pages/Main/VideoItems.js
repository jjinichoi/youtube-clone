import React from 'react';

const VideoItems = ({ video }) => {
  const commaFormat = () => {
    const count = video.statistics.viewCount;

    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const timeForToday = value => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  return (
    <li key={video.id} className="flex flex-col cursor-pointer">
      <img
        className="rounded-xl"
        src={video.snippet.thumbnails.medium.url}
        alt="썸네일"
      />
      <h1 className="py-1 overflow-hidden text-lg font-semibold leading-tight text-ellipsis whitespace-nowrap">
        {video.snippet.title}
      </h1>
      <div className="text-[#606060] text-sm">
        <p>{video.snippet.channelTitle}</p>
        <span>
          {commaFormat()}회 · {timeForToday(video.snippet.publishedAt)}
        </span>
      </div>
    </li>
  );
};

export default VideoItems;
