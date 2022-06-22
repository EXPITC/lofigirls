import styles from './header.module.css';
// image
import Image from 'next/image';
import LofiRecordsIcon from '../../public/LofiRecords.jpeg';
import LofiLogo from '../../public/LofiLogo.png';
import CurvedArrow from '../../public/curvedArrow.png';

import Link from 'next/link';
import { useState } from 'react';
import { BsCaretDownSquare, BsCaretDownSquareFill } from 'react-icons/bs';
import Panel from '../Panel/Panel';

const Header = () => {
  const [isHover, setIsHover] = useState<string>('preRender');
  const [panel, setPanel] = useState<boolean>(false);

  return (
    <>
      <Panel
        state={panel}
        off={() => {
          setPanel(false);
        }}
      />
      <div className={styles.siteHeader}>
        <div className={styles.siteCv}>
          <div>
            <Link href='/'>
              <a className={styles.logoImg}>
                <Image
                  alt='lofi logo'
                  layout='fixed'
                  width='125'
                  height='44'
                  src={LofiLogo}
                  quality={100}
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className={styles.list}>
            <ul>
              <li>
                <a className={styles.profile}>
                  <Image
                    onClick={() => setPanel(true)}
                    alt='profile'
                    layout='fixed'
                    src={LofiRecordsIcon}
                    quality={100}
                    height={40}
                    width={40}
                    priority={true}
                  />
                </a>
                <div className={styles.arrow}>
                  <Image
                    width={45}
                    height={45}
                    alt='curve arrow'
                    src={CurvedArrow}
                    layout='fixed'
                    quality={100}
                    priority={true}
                  />
                </div>
                <span className={styles.arrowText}>
                  Join the lo-fi
                  <br /> comunity right now!
                </span>
              </li>
              <li>
                <a href='/shop' style={{ color: '#FF468A' }}>
                  Shop
                </a>
              </li>
              <li>
                <a>Use the music</a>
              </li>
              <li
                onMouseEnter={() => setIsHover('active')}
                onMouseLeave={() => setIsHover('closing')}
              >
                <a>
                  Release
                  <div className={styles.downIcon}>
                    {isHover === 'active'? (
                      <BsCaretDownSquareFill size={12} />
                    ) : (
                      <BsCaretDownSquare size={12} />
                    )}
                  </div>
                </a>
                <div>
                <div
                  className={`${styles.drop} ${
                    isHover === 'active' ? styles.active : null
                  } ${isHover === 'closing' ? styles.closing : null}`}
                >
                  <ul>
                    <li>
                      <a href=''>Beatmakers</a>
                    </li>
                    <li>
                      <a href=''>Illustrator</a>
                    </li>
                  </ul>
                </div>
                </div>
              </li>
              <li>
                <a>Generator</a>
              </li>
              <li>
                <a style={{ color: '#518A88' }}>Giveaway</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
