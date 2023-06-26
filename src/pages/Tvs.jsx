import React from 'react'
import TV from '../components/TV';
import { dummy } from '../TvDummy';

export default function Tv() {
  return (
    <div >
        <div className="tvs-container">
        {dummy.results.map((item) => {
          return (
            <TV
              name={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}