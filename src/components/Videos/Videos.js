import React, { useState } from 'react';
import Video from '../Video/Video';

import { Link } from 'react-router-dom';
import useVideosList from '../../Hooks/useVideosList';
import InfiniteScroll from 'react-infinite-scroll-component';

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideosList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video video={video} />
              </Link>
            ) : (
              <Video key={video.youtubeID} video={video} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
    </div>
  );
};

export default Videos;
