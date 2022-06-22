import signUpPanel from './signUpStyles.module.css';

import { GiBleedingEye } from 'react-icons/gi';
import { RiEyeCloseFill } from 'react-icons/ri';

type props = {
  signUp: boolean;
  clickTransitionIV: boolean;
  transition: boolean;
  transitionPanel: boolean;
  seePassword: boolean;
  setSeePassword: Function;
  setPanelState: Function;
};
export default function SignUpPanel({
  signUp,
  transition,
  transitionPanel,
  clickTransitionIV,
  seePassword,
  setSeePassword,
  setPanelState,
}: props) {
  return (
    <div className={`${signUpPanel.wrapper}`}>
      <div className={signUpPanel.body}>
        <h3
          className={`${signUpPanel.greet} ${
            transitionPanel ? signUpPanel.greetOut : signUpPanel.greetIn
          }`}
        >
          Sign Up
        </h3>
        <div
          className={`${signUpPanel.panelComponent} ${
            clickTransitionIV
              ? transition
                ? null
                : signUpPanel.panelComponentTransition
              : null
          }`}
        >
          <div
            className={`${signUpPanel.formSignUp} 
            ${transitionPanel ? signUpPanel.formSignUpOut : signUpPanel.formSignUpIn}
            ${signUp ? signUpPanel.formDelay : signUpPanel.formTo}`}
          >
            <form  className={`${transitionPanel ? signUpPanel.formInputOut : signUpPanel.formInputIn}`}>
              <input
                type='text'
                placeholder='First Name'
                style={{ width: transitionPanel ? '90%' :'45%' }}
              />
              <input
                type='text'
                placeholder='Last Name'
                style={{ width: transitionPanel ? '80%' : '30%' }}
              />
              <input
                type='email'
                placeholder='Email'
                style={{ width: transitionPanel ? '60%' : '15%' }}
              />
              <input
                type={seePassword ? 'text' : 'password'}
                placeholder='Password'
                style={{ width: transitionPanel ? '40%' : '0%' }}
              />
              <span
                className={`${signUpPanel.passwordEye} ${
                  transitionPanel
                    ? signUpPanel.passwordEyeOut
                    : signUpPanel.passwordEyeIn
                }`}
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? (
                  <GiBleedingEye size={20} />
                ) : (
                  <RiEyeCloseFill size={20} />
                )}
              </span>
              <button style={{ width: transitionPanel ? '100%' : '30%' }} >CREATE</button>
            </form>
          </div>
          <div className={`${signUpPanel.textSection} ${transitionPanel ? signUpPanel.textOut : signUpPanel.textIn}`}>
            <p>
              By signing up, you agree to receive occasional emails about
              special offers, new products and exclusive promotions
            </p>
            <p>
              Already a member? Please{' '}
              <span onClick={() => setPanelState('signUpToLogin')}>log in</span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
