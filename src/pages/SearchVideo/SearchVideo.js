import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import VideoList from '../../components/VideoList/VideoList';

const SearchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const { getData: searchVideoListDatas } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=KR&maxResults=20&order=date&q=${search}&type=video&key=${apiKey}`,
  );

  console.log(searchVideoListDatas);

  return (
    <div>
      <VideoList searchVideoListDatas={searchVideoListDatas} />
    </div>
  );
};

export default SearchVideo;
