import styles from './Merch.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgChevronLeftR, CgChevronRightR } from 'react-icons/cg';
import { MouseTracker } from '../utils/utils';

export default function Merch() {
  const [isHover, setIsHover] = useState<{
    Hover: boolean;
    id: string;
    firstEffectTrigger: boolean;
  }>({
    // default condition of pause;
    Hover: false,
    id: 'null',
    /*firstEffectTrigger for prevent issue while first entering state hover bring XY mouse value from outside,
      make image move over so wait with zoom effect first and make it more smooth effect */
    firstEffectTrigger: true,
  });

  function hoverHandler(
    id: string = 'null',
    status: boolean = false,
    firstEffect: boolean = true,
  ) {
    setIsHover({ Hover: status, id: id, firstEffectTrigger: firstEffect });
    // Debounce , So when hover fast to another not get stack.
    clearTimeout(waitZoomFinish({ status, id }));
    waitZoomFinish({ status, id });
  }

  function waitZoomFinish({
    status,
    id,
  }: {
    status: boolean;
    id: string;
  }): ReturnType<typeof setTimeout> {
    return setTimeout(() => {
      console.log(isHover);
      // can't be spread so need to pass val
      setIsHover({ Hover: status, id: id, firstEffectTrigger: false });
      console.log(isHover);
    }, 200);
  }
  // holder:to make MouseTracker from utils only execute once when its first time got hover so evenListener not get duplicate.
  const [holder, setHolder] = useState<boolean>(false);

  useEffect(() => {
    if (holder) return MouseTracker(cbMouseParams, 100);
    return window.removeEventListener('mousemove', () =>
      MouseTracker(cbMouseParams, 100),
    );
  }, [holder]);

  useEffect(() => {
    if (isHover.Hover === true) setHolder(true);
  }, [isHover]);

  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);

  function cbMouseParams([x, y]: [number, number]) {
    // this cb function handle issue that occur because mouse coordinated update to fast, DO NOT DELETE THIS.
    // usually utils pass useState as props so it can flexible for use purpose and not return.
    /* issue:
        useState props sometimes can't receive second params[Y coordinate].
        cause because update to fast while updating useState.
        mouseTack make only trigger when it's on card with state hover on section[Merch] so it's can reduce memory.
      */
    setMousePosition([x, y]);
  }

  function mouseTackEffect(
    mousePosition: [number, number],
    id: string = 'null',
    XY: 'X' | 'Y',
  ) {
    const onClient = (): boolean => {
      if (typeof window === 'object') return true;
      return false;
    };

    let [x, y] = mousePosition;
    const elem = onClient() ? document.getElementById(id) : null;
    const width = elem?.offsetWidth || 0;
    const height = elem?.offsetHeight || 0;

    switch (XY) {
      case 'X':
        const X: number = Math.floor(-1 * ((x / width) * 100) + 50);
        if (X > 50 && X > -50) return;
        return X;
      case 'Y':
        const Y: number = Math.floor(-1 * ((y / height) * 100) + 50);
        if (Y > 50 && Y > -50) return;
        return Y;
    }
  }

  const [buttonClick, setButtonClick] = useState<string>('null');
  function clickHandler(id:string) {
    const timer = (): ReturnType<typeof setTimeout> => {
      return setTimeout(() => {
        setButtonClick('null');
      }, 200);
    }

    setButtonClick(id);

    clearTimeout(timer());
    timer();
  }
  let id = ['APPAREL' , 0]
  const [imgPosition, setImgPosition] = useState({
    id
  })

  // dummy
  let data = [
    {
      id: 'APPAREL',
      x: 1,
      linkImage: [
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
      ],
      imagePosition : 0,
      linkTo: 'http://'
    },
    {
      id: 'ACCESSORIES',
      x: 2,
      linkImage: [
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
      ],
      imagePosition : 0,
      linkTo: 'http://'
    },
    {
      id: 'ARTS',
      x: 3,
      linkImage: [
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
      ],
      imagePosition : 0,
      linkTo: 'http://'
    },
    {
      id: 'VINYL',
      x: 4,
      linkImage: [
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
        'https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black_6780c52c-2981-4a88-9f0c-193b640420e0.png',
      ],
      imagePosition : 0,
      linkTo: 'http://'
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h1>MERCH</h1>
      <div className={styles.cardBox}>
        {data.map((_) => {
          return (
            <div key={_.x} className={styles.cardWrapper}>
              <CgChevronLeftR
                size={40}
                onClick={() => clickHandler(_.id)}
                className={`${styles.iconLeftRight} ${
                  isHover.id === _.id ? styles.iconLeftRightHover : null
                }`}
                style={{
                  left: isHover.id === _.id ? '10px' : '25px',
                  transform: buttonClick === _.id ? 'scale(1)' : ' '
                }}
              />
              <div className={styles.card}>
                <div
                  id={_.id}
                  className={styles.cardImageBox}
                  onMouseEnter={() => hoverHandler(_.id, true)}
                  onMouseLeave={() => hoverHandler()}
                >
                  <div
                    className={`${styles.imageMove} ${
                      isHover.id == _.id ? ' ' : styles.smoothOut
                    }`}
                    style={
                      isHover.id === _.id
                        ? {
                            transform: `${
                              isHover.firstEffectTrigger
                                ? 'translateX(0) translateY(0) scale(1)'
                                : `translateX(${mouseTackEffect(
                                    mousePosition,
                                    _.id,
                                    'X',
                                  )}%) translateY(${mouseTackEffect(
                                    mousePosition,
                                    _.id,
                                    'Y',
                                  )}%) scale(2)`
                            }`,
                          }
                        : {
                            transform: 'translateX(0%) translateY(0%) scale(1)',
                          }
                    }
                  >
                    <Image
                      alt={'test'}
                      layout={'fill'}
                      objectFit={'cover'}
                      priority={true}
                      src={_.linkImage[0]}
                    />
                  </div>
                </div>
                <h3>{mousePosition[0] + ' ++ ' + mousePosition[1]}</h3>
              </div>
              <CgChevronRightR
                size={40}
                onClick={() => clickHandler(_.id)}
                className={styles.iconLeftRight}
                style={{
                  right: isHover.id === _.id ? '10px' : '25px',
                  transform: buttonClick === _.id ? 'scale(1)' : ' '
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
