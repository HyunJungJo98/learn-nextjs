import { URL } from '../app/constants';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('something broke...');
  const response = await fetch(`${URL}/${id}/videos`); // 캐시됨
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encryptedmedia; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
