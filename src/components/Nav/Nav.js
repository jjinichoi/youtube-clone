import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import youtubeLogo from '../../images/youtubeLogo.png';
import me from '../../images/me.jpeg';

const Nav = () => {
  const [searchVideo, setSearchVideo] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = e => {
    setSearchVideo(e.target.value);
  };

  const searchParamsSubmit = () => {
    const params = new URLSearchParams();

    searchVideo && params.set('search', searchVideo);

    setSearchParams(params);
  };

  const enterEvent = e => {
    e.key === 'Enter' && searchParamsSubmit();
  };

  return (
    <div className="fixed bg-white w-full h-[4rem] px-8 z-10">
      <div className="flex items-center justify-center h-full sm:justify-between">
        <Link to="/" className="hidden sm:block">
          <img
            className="block w-[7rem] max-w-full"
            src={youtubeLogo}
            alt="Logo"
          />
        </Link>
        <label className="relative flex">
          <input
            className=" rounded-full w-[25rem] h-[2.5rem] border border-slate-400 pl-4 pr-[3.5rem]"
            type="text"
            placeholder="검색"
            onChange={onChange}
            onKeyPress={enterEvent}
            value={searchVideo}
          />
          <button
            className="absolute top-[.1rem] right-[.1rem] w-[3rem] h-[2.25rem] bg-gray-100 border-l rounded-r-full border-slate-400"
            type="submit"
            onClick={searchParamsSubmit}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </label>
        <div className="items-center hidden sm:flex">
          <div>
            <FontAwesomeIcon icon={faBell} size="lg" />
          </div>
          <img
            className="block w-[2rem] max-w-full rounded-full ml-3"
            src={me}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
