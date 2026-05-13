import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Link to="/">← Voltar</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;