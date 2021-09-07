import React, { useState } from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';
import { Link } from 'react-router-dom';
import useVideosList from '../../Hooks/useVideosList';
import InfiniteScroll from 'react-infinite-scroll-component';

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideosList(page);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {videos.map((video) =>
            video.noq ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video video={video} />
              </Link>
            ) : (
              <Video video={video} />
            )
          )}
        </InfiniteScroll>
      )}
      {error && <p>Something wrong for fetching</p>}
    </div>
  );
};

export default Videos;
