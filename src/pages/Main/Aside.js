import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCompass,
  faRecordVinyl,
  faUser,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const Aside = () => {
  return (
    <ul className="hidden fixed left-0 h-full p-2 top-[4rem] sm:block">
      {ASIDE_MENU.map(info => (
        <li
          key={info.id}
          className="flex flex-col items-center justify-center w-[3.5rem] h-[4rem]"
        >
          <p className="pb-1">
            <FontAwesomeIcon icon={info.img} />
          </p>
          <span className="block w-full overflow-hidden text-[.7rem] text-center text-ellipsis whitespace-nowrap">
            {info.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

const ASIDE_MENU = [
  { id: 1, title: '홈', img: faHouse },
  { id: 2, title: 'Shorts', img: faCirclePlay },
  { id: 3, title: '구독', img: faCompass },
  { id: 4, title: 'Youtube Music', img: faRecordVinyl },
  { id: 5, title: '나', img: faUser },
  { id: 6, title: '오프라인 저장 동영상', img: faDownload },
];

export default Aside;
