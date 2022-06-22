import React from 'react';
import styles from './slideLofiGirl.module.css';
import Image from 'next/image';

export default function SlideLofiGirl() {
  return (
    <section>
      <div className={styles.cardImage}>
        <div className={styles.wrapper}>
          <Image
            src={
              'https://cdn.shopify.com/s/files/1/0011/6005/2795/files/Lofigirl_v4_withoutText_2048x.jpg'
            }
            priority={true}
            quality={100}
            alt={'lofiGirl'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
      </div>
    </section>
  );
}
