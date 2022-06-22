import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from './social.module.css';
import { heightValue } from '../utils/utils';
type props = {
  listenNow: boolean;
};
export default function Social({ listenNow }: props) {
  const [height, setHeight] = useState<number>(0);
  let src: {
    title: string;
    max: number;
    src: {
      platform: string;
      img: string;
    }[];
  }[] = useMemo(
    () => [
      {
        title: 'LISTEN NOW',
        max: 160,
        src: [
          {
            platform: 'Spotify',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/spotify_4b050244-5915-45b2-9816-28c434bb95ed_200x.png',
          },
          {
            platform: 'Apple Music',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/apple_200x.png',
          },
          {
            platform: 'Youtube',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/youtube_347d02a1-51e1-49f2-ab0f-8547f6f1b6ed_200x.png',
          },
          {
            platform: 'Amazon Music',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/amazon_5f048ed7-7d1a-4eea-83b7-d8eda335c1c7_200x.png',
          },
          {
            platform: 'Deezer',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/deezer_4dcf6175-6c25-4907-9072-718a0484061a_200x.png',
          },
        ],
      },
    ],
    [],
  );
  if (!listenNow) {
    src = [
      {
        title: 'SOCIAL PLATFORMS',
        max: 880,
        src: [
          {
            platform: 'Discord',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/discord_c171df6f-a6e6-4e18-bbad-d3196ea03efd_200x.png',
          },
          {
            platform: 'Reddit',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/reddit_60f8a9c8-c771-4154-9670-aa99d2ac1cce_200x.png',
          },
          {
            platform: 'Instagram',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/insta_200x.png',
          },
          {
            platform: 'Twitter',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/twiter_200x.png',
          },
          {
            platform: 'Tiktok',
            img: 'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/tiktok_c588a882-6333-4fd2-adec-bfba6d9f609c_200x.png',
          },
        ],
      },
    ];
  }
  let num = 150;
  useEffect(() => {
    return heightValue(setHeight, src[0].max + 40, 0, 100);
  }, [src]);
  function scrollEffect(num: number) {
    let limit: number;
    if (src[0].title === 'LISTEN NOW') {
      limit = (height / src[0].max) * num - num;
      return limit > 0 ? 0 : limit;
    }
    limit = num - (height / src[0].max) * num;
    return limit < 0 ? 0 : limit;
  }
  return (
    <section className={styles.social}>
      <h3>{src[0].title}</h3>
      <ul>
        {src[0].src.map((x) => {
          num = num + 60;
          return (
            <li
              key={x.platform}
              className={styles.logoHover}
              style={{ top: `${scrollEffect(num)}px` }}
            >
              <Image
                src={x.img}
                alt={x.platform}
                width={80}
                height={80}
                layout={'fixed'}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
