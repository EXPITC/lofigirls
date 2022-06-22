import { useState, useEffect } from 'react';
// Icon
import { IoExit, IoInformationCircleOutline } from 'react-icons/io5';
import { IoIosExit } from 'react-icons/io';

// Image
import Image from 'next/image';
import LofiGirlPanel from '../../public/LofiGirlPanel.png';
// Css
import styles from './Panel.module.css';
// Panel
import LoginPanel from './LoginPanel';
import ForgotPasswordPanel from './ForgotPasswordPanel';
import SignUpPanel from './SignUpPanel';
// Type
type panelState =
  | 'none'
  | 'login'
  | 'signUp'
  | 'forgotPassword'
  | 'loginToSignUp'
  | 'loginToForgotPassword'
  | 'signUpToLogin'
  | 'forgotPasswordToLogin';

const Panel = ({ state, off }: { state: boolean; off: VoidFunction }) => {
  const [panelState, setPanelState] = useState<panelState>('none');
  const [isHover, setIsHover] = useState<boolean>(false);
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const [transition, setTransition] = useState<boolean>(false);
  // transitionPanel = panelState support transition false condition. transition false props trigger width closing styles panel and transition between panel content
  const [transitionPanel, setTransitionPanel] = useState<boolean>(false);
  // clickTransition = user click the profile
  const [clickTransition, setClickTransition] = useState<boolean>(false);
  // clickTransitionII  = user click Login/Sign up | clearUp the old components
  const [clickTransitionII, setClickTransitionII] = useState<boolean>(false);
  // clickTransitionIII = change old components to Login/SignUp part
  const [clickTransitionIII, setClickTransitionIII] = useState<boolean>(true);
  // clickTransitionIV = focus on follow up animation after old components clear
  const [clickTransitionIV, setClickTransitionIV] = useState<boolean>(false);

  const [fromPanel, setFromPanel] = useState<boolean>(true);
  useEffect(() => {
    // timer = control transitionII by state transition
    let timer: ReturnType<typeof setTimeout>;
    // timerII = control transitionIII
    let timerII: ReturnType<typeof setTimeout>;
    // timerIII = control transitionIV
    let timerIII: ReturnType<typeof setTimeout>;
    if (clickTransition) {
      timer = setTimeout(() => {
        setClickTransitionII(true);
      }, 500);
      timerII = setTimeout(() => {
        setClickTransitionIII(false);
      }, 650);
      timerIII = setTimeout(() => {
        setClickTransitionIV(true);
      }, 700);
      return () => {
        clearTimeout(timer);
        clearTimeout(timerII);
        clearTimeout(timerIII);
      };
    }
    timer = setTimeout(() => {
      setClickTransitionII(false);
    }, 500);
    timerII = setTimeout(() => {
      setClickTransitionIII(true);
    }, 650);
    timerIII = setTimeout(() => {
      setClickTransitionIV(false);
    }, 700);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerII);
      clearTimeout(timerIII);
    };
  }, [clickTransition]);

  // useEffect(() => {

  //   console.log('panelState');
  // }, [panelState, clickTransitionIV, seePassword, transitionPanel]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let timerII: ReturnType<typeof setTimeout>;
    console.log('infinit');
    switch (panelState) {
      case 'loginToForgotPassword':
        setTransitionPanel(true);
        setFromPanel(false);
        timer = setTimeout(() => {
          setTransition(true);
          return clearTimeout(timer);
        }, 250);
        timerII = setTimeout(() => {
          setTransitionPanel(false);
          setTransition(false);
          setPanelState('forgotPassword');
          return clearTimeout(timerII);
        }, 500);
        break;
      case 'loginToSignUp':
        setFromPanel(false);
        setTransitionPanel(true);
        timer = setTimeout(() => {
          setTransition(true);
          return clearTimeout(timer);
        }, 250);
        timerII = setTimeout(() => {
          setTransitionPanel(false);
          setTransition(false);
          setPanelState('signUp');
          return clearTimeout(timerII);
        }, 500);
        break;
      case 'signUpToLogin':
        setFromPanel(false);
        setTransitionPanel(true);
        timer = setTimeout(() => {
          setTransition(true);
          return clearTimeout(timer);
        }, 250);
        timerII = setTimeout(() => {
          setTransitionPanel(false);
          setTransition(false);
          setPanelState('login');
        }, 500);
        break;
      case 'forgotPasswordToLogin':
        setFromPanel(false);
        setTransitionPanel(true);
        timer = setTimeout(() => {
          setTransition(true);
          return clearTimeout(timer);
        }, 250);
        timerII = setTimeout(() => {
          setTransitionPanel(false);
          setTransition(false);
          setPanelState('login');
          return clearTimeout(timerII);
        }, 500);
        break;
    }
  }, [panelState]);

  return (
    <div
      className={`${styles.panelBody} ${state ? styles.active : styles.closing}
      ${clickTransition ? styles.panelBodyInputMode : null}`}
    >
      <span
        className={`${styles.exit} ${
          clickTransitionIII ? null : styles.exitInputMode
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          off();
          setClickTransition(false);
          setSeePassword(false);
          setTransition(false);
          setTransitionPanel(false);
          setFromPanel(true);
        }}
      >
        {isHover ? <IoExit size={24} /> : <IoIosExit size={24} />}
      </span>
      <div
        className={`${styles.topPanel} ${
          clickTransitionIII ? null : styles.topPanelHide
        }`}
      >
        <div
          style={clickTransition ? { width: '710px' } : { width: '567px' }}
          className={`${styles.topPanelImage} ${
            clickTransitionII ? styles.topPanelImageTransition : null
          }`}
        >
          <Image
            alt='lofi girl panel'
            src={LofiGirlPanel}
            quality={100}
            priority={true}
          />
        </div>
      </div>
      {clickTransitionIII ? (
        <div className={styles.bottomPanel}>
          <div className={styles.bottomPanelWrapper}>
            <div
              className={`${styles.bottomText} ${
                clickTransitionII ? styles.bottomTextTransition : null
              }`}
            >
              <IoInformationCircleOutline />
              <p>
                To download this track, please log in or
                <br />
                sign up for a free account.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <div
                className={`${styles.onButton} ${
                  clickTransition ? styles.onButtonTransition : null
                }`}
              >
                <button
                  onClick={() => {
                    setClickTransition(true);
                    setPanelState('login');
                  }}
                >
                  LOG IN
                </button>
                <button
                  onClick={() => {
                    setClickTransition(true);
                    setPanelState('signUp');
                  }}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {panelState === 'login' ||
          panelState === 'loginToForgotPassword' ||
          panelState === 'loginToSignUp' ? (
            <LoginPanel
              login={fromPanel}
              transition={transition}
              transitionPanel={transitionPanel}
              clickTransitionIV={clickTransitionIV}
              seePassword={seePassword}
              setPanelState={(x: panelState) => setPanelState(x)}
              setSeePassword={() => setSeePassword(!seePassword)}
            />
          ) : null}
          {panelState === 'signUp' || panelState === 'signUpToLogin' ? (
            <SignUpPanel
              signUp={fromPanel}
              transition={transition}
              transitionPanel={transitionPanel}
              clickTransitionIV={clickTransitionIV}
              seePassword={seePassword}
              setSeePassword={() => setSeePassword(!seePassword)}
              setPanelState={(x: panelState) => setPanelState(x)}
            />
          ) : null}
          {panelState === 'forgotPassword' ||
          panelState === 'forgotPasswordToLogin' ? (
            <ForgotPasswordPanel
              transition={transition}
              transitionPanel={transitionPanel}
              panelState={panelState}
              clickTransitionIV={clickTransitionIV}
              setPanelState={(x: panelState) => setPanelState(x)}
            />
          ) : null}
        </>
      )}
    </div>
  );
};
export default Panel;
