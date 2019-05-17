import React, { useEffect, useState } from 'react';

function Reddit ({ subreddit }) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

    // pull out the data as usual
    const json = await res.json();

    setPosts(json.data.children.map(c => c.data))
  }, [setPosts, subreddit]);

  return (
    <ul>
      {
        posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
  )
}

export default Reddit;