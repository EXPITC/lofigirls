import { useState, useEffect } from 'react';
import styles from './LatestRelease.module.css';
import Image from 'next/image';
import lofiGirlIcon from '../../public/LofiRecords.jpeg';
import { heightValue } from '../utils/utils';

type statusType = {
  play: boolean;
  pause: boolean;
  id: number;
};

export default function LatestRelease() {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    return heightValue(setHeight,1265, 110 , 100);
  }, []);
  // status for control the animation and music
  // play more on animation and pause stat more on music it's self
  const [status, setStatus] = useState<statusType>({
    play: false,
    pause: true,
    id: 1,
  });
  function scrollEffectBg() {
    if (height >= 110 && height <= 1265) {
      // divide by max view from Y image on scroll and start as 0 from first time image got view 
      // 100 divide 50 so the image got center when on half scroll or you can ratio 1/2 for center
      // 1 is center height that u want and 2 is for divide for half or make it center
      return (height / 1265) * 150 - 75;
    }
  }
  // src give example music on latest release of that album;
  let src = [
    {
      id: 1,
      album: 'Album name',
      artist: 'Artist name',
      topSong:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/softy_x_Dimension_32_-_Another_Life.mp3?v=1648546339',
      albumImage:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png',
    },
    {
      id: 2,
      album: 'Album name',
      artist: 'Artist name',
      topSong:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/softy_x_Dimension_32_-_Another_Life.mp3?v=1648546339',
      albumImage:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png',
    },
    {
      id: 3,
      album: 'Album name',
      artist: 'Artist name',
      topSong:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/softy_x_Dimension_32_-_Another_Life.mp3?v=1648546339',
      albumImage:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png',
    },
    {
      id: 4,
      album: 'Album name',
      artist: 'Artist name',
      topSong:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/softy_x_Dimension_32_-_Another_Life.mp3?v=1648546339',
      albumImage:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png',
    },
    {
      id: 5,
      album: 'Album name',
      artist: 'Artist name',
      topSong:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/softy_x_Dimension_32_-_Another_Life.mp3?v=1648546339',
      albumImage:
        'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png',
    },
  ];
  function musicPlayer({
    id,
    use = true,
  }: {
    id: number;
    use?: boolean;
  }): void {
    var player = document.getElementById(`${id}`) as HTMLAudioElement | null;
    if (!(status.pause && use)) return player?.pause();
    player?.play();
  }
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.latestBox}>
          <h4>LATEST RELEASES</h4>
          <div className={styles.card}>
            {src.map(({ id, album, artist, topSong, albumImage }) => {
              return (
                <div key={id} className={styles.albumCard}>
                  <audio
                    controls
                    onLoadStart={(e) => (e.currentTarget.volume = 0.5)}
                    id={`${id}`}
                    onEnded={() => {
                      setStatus((status) => {
                        return { ...status, play: false, pause: true };
                      });
                    }}
                    hidden
                  >
                    <source src={topSong} type='audio/mp3' />
                  </audio>
                  <div style={{ position: 'absolute' }}>
                    <div
                      // attribute play on status more on[audio] and att pause more on animation
                      // 3 pause: pause/stop when not hover preventing to not auto play[audio], pause when hover[animation] , and pause when exit hover[animation]
                      className={`${styles.disc} 
                    ${status.id === id ? 'playDiscAnimation' : styles.discPause}
                    ${
                      status.id === id
                        ? status.play
                          ? styles.discPlay
                          : styles.discPause
                        : null
                    }
                      ${status.pause ? styles.discPause : ' '}`}
                    >
                      <div className={styles.signature}>
                        <Image
                          src={lofiGirlIcon}
                          alt={'lofi Girl Icon'}
                          width={50}
                          height={50}
                        />
                      </div>
                      <Image
                        src={
                          'https://cdn.shopify.com/s/files/1/0011/6005/2795/articles/version2.png'
                        }
                        alt={'albumImg'}
                        objectFit={'cover'}
                        layout={'fill'}
                      />
                    </div>
                  </div>
                  <div
                    className={styles.albumImage}
                    onMouseEnter={() =>
                      setStatus((status) => {
                        return {
                          ...status,
                          id,
                        };
                      })
                    }
                    onMouseLeave={() => {
                      setStatus((status) => {
                        return {
                          ...status,
                          play: false,
                          pause: true,
                        };
                      });
                      musicPlayer({ id, use: false });
                    }}
                    onClick={() => {
                      setStatus((status) => {
                        return {
                          ...status,
                          play: true,
                          pause: !status.pause,
                        };
                      });
                      musicPlayer({ id });
                    }}
                  >
                    <div className={styles.albumImageFrame}>
                      {/* place pause and play */}
                      <div
                        className={`${styles.playPause} ${
                          status.pause ? null : styles.playPauseActive
                        }`}
                      >
                        <span
                          style={{
                            margin: status.play ? 'none' : '20px !important',
                          }}
                        />
                        <span />
                      </div>
                    </div>
                    <Image
                      src={albumImage}
                      alt={album}
                      objectFit={'cover'}
                      layout={'fill'}
                    />
                  </div>
                  <p>
                    {album}
                    <br /> {artist}
                  </p>
                </div>
              );
            })}
          </div>
          <button>VIEW ALL</button>
        </div>
        <div
          className={styles.backgroundImage}
          style={{ top: `${scrollEffectBg()}px` }}
        >
          <Image
            src={
              'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/4c5a44ec51a79cf494c74f82d07756ae_1500x.jpg'
            }
            alt={'lofiGirl'}
            objectFit={'cover'}
            layout={'fill'}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
