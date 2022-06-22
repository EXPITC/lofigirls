import { FaFacebookF, FaTwitter, FaGoogle, FaSpotify } from 'react-icons/Fa';
import { GiBleedingEye } from 'react-icons/gi';
import { RiEyeCloseFill } from 'react-icons/ri';

import loginPanel from './LoginStyles.module.css';

type props = {
  transition: boolean;
  clickTransitionIV: boolean;
  transitionPanel: boolean;
  seePassword: boolean;
  setPanelState: Function;
  setSeePassword: Function;
  login: boolean;
};
export default function LoginPanel({
  login,
  transition,
  clickTransitionIV,
  transitionPanel,
  seePassword,
  setPanelState,
  setSeePassword,
}: props) {
  return (
    <div className={loginPanel.wrapper}>
      <div className={loginPanel.body}>
        <h3
          className={`${loginPanel.greet} ${
            transitionPanel ? loginPanel.greetOut : loginPanel.greetIn
          }`}
        >
          Log In
        </h3>
        <div
          className={`${loginPanel.panelComponent} ${
            clickTransitionIV
              ? transition
                ? null
                : loginPanel.panelComponentTransition
              : null
          }`}
        >
          <div
            className={`${loginPanel.loginWith} ${
              transitionPanel ? loginPanel.loginWithOut : loginPanel.loginWithIn
            } ${login ? loginPanel.fromLoginDelay : loginPanel.loginToDelay}`}
          >
            <ul>
              <li style={{ backgroundColor: '#4267B2' }}>
                <button>Facebook Login</button>
                <i className={loginPanel.icons}>
                  <FaFacebookF size={20} color={'white'} />
                </i>
              </li>
              <li style={{ background: '#55acee' }}>
                <button>Twitter Login</button>
                <i className={loginPanel.icons}>
                  <FaTwitter size={20} color={'white'} />
                </i>
              </li>
              <li style={{ backgroundColor: '#dd4b39' }}>
                <button>Google Login</button>
                <i className={loginPanel.icons}>
                  <FaGoogle size={20} color={'white'} />
                </i>
              </li>
              <li style={{ backgroundColor: '#000000' }}>
                <button>Spotify Login</button>
                <i className={loginPanel.icons}>
                  <FaSpotify size={20} color={'#1DB954'} />
                </i>
              </li>
            </ul>
          </div>
          <div className={loginPanel.memberLogin}>
            <div
              className={`${loginPanel.memberLoginInput} ${
                transitionPanel ? null : loginPanel.inputIn
              }`}
            >
              <input
                className={`${transitionPanel ? loginPanel.inputOut : null}`}
                type='email'
                placeholder='Email'
                autoCorrect='off'
              />
              <input
                className={`${transitionPanel ? loginPanel.inputOutII : null}`}
                style={{ width: '25%' }}
                type={seePassword ? 'text' : 'password'}
                placeholder='Password'
                autoCorrect='off'
              />
              <span
                className={`${loginPanel.passwordEye}
                  ${
                    transitionPanel
                      ? loginPanel.passwordEyeOut
                      : loginPanel.passwordEyeIn
                  }
                  `}
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? (
                  <GiBleedingEye size={20} />
                ) : (
                  <RiEyeCloseFill size={20} />
                )}
              </span>
            </div>
            <div
              className={`${loginPanel.optional} ${
                transitionPanel ? loginPanel.optionalOut : loginPanel.optionalIn
              }`}
            >
              <span onClick={() => setPanelState('loginToSignUp')}>
                Sing Up
              </span>
              <span onClick={() => setPanelState('loginToForgotPassword')}>
                Forgot your password?
              </span>
            </div>
            <button
              className={`${loginPanel.loginButton} ${
                transitionPanel
                  ? loginPanel.loginButtonOut
                  : loginPanel.loginButtonIn
              }`}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
