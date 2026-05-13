import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1> Meu Blog Pessoal </h1>
      <div>
        {posts.map(post => (
          <div key={post.id} className="card">
            <h3 style={{ color: '#db7093' }}>{post.title}</h3>
            <Link style={{ color: '#ff69b4', fontWeight: 'bold' }} to={`/post/${post.id}`}>
              Ler artigo completo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;