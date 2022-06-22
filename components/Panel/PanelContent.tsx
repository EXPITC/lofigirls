import { useState } from 'react';
import loginPanel from './LoginStyles.module.css';
import signUpPanel from './SignUpStyles.module.css';
import forgotPasswordPanel from './ForgotPasswordStyles.module.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaSpotify } from 'react-icons/Fa';
import { GiBleedingEye } from 'react-icons/gi';
import { RiEyeCloseFill } from 'react-icons/ri';
type panelState =
  | 'none'
  | 'login'
  | 'signUp'
  | 'loginToSingUp'
  | 'loginToForgotPassword'
  | 'signUpToLogin'
  | 'forgotPasswordToLogin';
type ContentHTML = JSX.Element | null;
export default function PanelContent(
  clickTransitionIV: any,
  panelState: panelState,
  setPanelState: any,
) {
  //   const [panelState, setPanelState] = useState<panelState>('none');
  const [transitionPanel, setTransitionPanel] = useState<boolean>(false);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [content, setContent] = useState<ContentHTML>(null);
  // Login
  function loginElement(transition: boolean): JSX.Element {
    return (
      <div className={`${loginPanel.wrapper}`}>
        <div className={loginPanel.body}>
          <h3 className={loginPanel.greet}>Log In</h3>
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
                transitionPanel
                  ? loginPanel.loginWithOut
                  : loginPanel.loginWithIn
              }`}
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
                  className={`${
                    transitionPanel ? loginPanel.inputOutII : null
                  }`}
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
                  transitionPanel
                    ? loginPanel.optionalOut
                    : loginPanel.optionalIn
                }`}
              >
                <span onClick={() => setPanelState('loginToSingUp')}>
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
  // Sign Up
  function signUpElement(transition: boolean): JSX.Element {
    return (
      <div className={`${signUpPanel.wrapper}`}>
        <div className={signUpPanel.body}>
          <h3 className={signUpPanel.greet}>Sign Up</h3>
          <div
            className={`${signUpPanel.panelComponent} ${
              clickTransitionIV ? signUpPanel.panelComponentTransition : null
            }`}
          >
            <div className={signUpPanel.formSignUp}>
              <form>
                <input
                  type='text'
                  placeholder='First Name'
                  style={{ width: '45%' }}
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  style={{ width: '30%' }}
                />
                <input
                  type='email'
                  placeholder='Email'
                  style={{ width: '15%' }}
                />
                <input
                  type={seePassword ? 'text' : 'password'}
                  placeholder='Password'
                  style={{ width: '0%' }}
                />
                <span
                  className={loginPanel.passwordEye}
                  onClick={() => setSeePassword(!seePassword)}
                >
                  {seePassword ? (
                    <GiBleedingEye size={20} />
                  ) : (
                    <RiEyeCloseFill size={20} />
                  )}
                </span>
                <button style={{ width: '30%' }}>CREATE</button>
              </form>
            </div>
            <div className={signUpPanel.textSection}>
              <p>
                By signing up, you agree to receive occasional emails about
                special offers, new products and exclusive promotions
              </p>
              <p>
                Already a member? Please{' '}
                <span onClick={() => setPanelState('signUpToLogin')}>
                  log in
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Forgot Password
  function forgotPasswordElement(transition: boolean): JSX.Element {
    return (
      <div className={`${forgotPasswordPanel.wrapper}`}>
        <div className={forgotPasswordPanel.body}>
          <h3 className={forgotPasswordPanel.greet}>Forgot Password</h3>
          <div
            className={`${forgotPasswordPanel.panelComponent} ${
              clickTransitionIV
                ? transition
                  ? null
                  : forgotPasswordPanel.panelComponentTransition
                : null
            }`}
          >
            <div className={forgotPasswordPanel.formEmail}>
              <p>
                Reset your password
                <br />
                We will send you an email to reset your password.
              </p>
              <input type='email' placeholder='Email' />
              <button>Submit</button>
              <button onClick={() => setPanelState('forgotPasswordToLogin')}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  switch (panelState) {
    case 'none':
      setContent(null);
      break;
    case 'login':
      setContent(loginElement(false));
      break;
    case 'signUp':
      setContent(signUpElement(false));
      break;
    case 'loginToSingUp':
      setContent(loginElement(true));
      // setContent(signUpElement(false));
      break;
    case 'loginToForgotPassword':
      setContent(loginElement(true));
      setTimeout(() => {
        setContent(forgotPasswordElement(false));
        console.log('loginToForgotPassword');
      }, 500);
      break;
    case 'signUpToLogin':
      setContent(signUpElement(true));
      // setContent(loginElement(false));
      break; 
    case 'forgotPasswordToLogin':
      setContent(forgotPasswordElement(true));
      setTimeout(() => {
        setContent(loginElement(false));
        console.log('forgotPasswordToLogin');
      }, 500);
      break;
    default:
      setContent(null);
  }
  return (
    <div>
      {content}
    </div>
  )
}
