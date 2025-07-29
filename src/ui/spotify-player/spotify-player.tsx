import styles from "./spotify-player.module.scss";

const SpotifyPlayer = ({ trackId }: { trackId: string }) => {
  const trackUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
  return (
    <>
      {trackId !== "" ? 
        <iframe
          src={trackUrl}
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        /> : 
        <div className={styles.spotify_placeholder}>
          Select a song to play
        </div>
      }
    </>
  );
};

export default SpotifyPlayer;