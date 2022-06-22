import forgotPasswordPanel from './ForgotPasswordStyles.module.css'

type props = {
    clickTransitionIV: boolean,
    transition: boolean,
    transitionPanel: boolean,
    setPanelState: Function,
    panelState: string
}
export default function ForgotPasswordPanel({ panelState, clickTransitionIV, transition , transitionPanel, setPanelState }: props) {
    if (panelState === 'loginToForgotPassword') {
        setTimeout(() => {
            setPanelState('forgotPassword')
        },300)
    }
  return (
    <div className={`${forgotPasswordPanel.wrapper}`}>
        <div className={forgotPasswordPanel.body}>
          <h3 className={`${forgotPasswordPanel.greet} ${transitionPanel ? forgotPasswordPanel.greetOut : forgotPasswordPanel.greetIn}`}>Forgot Password</h3>
          <div
            className={`${forgotPasswordPanel.panelComponent} ${
              clickTransitionIV
                ? transition
                  ? null
                  : forgotPasswordPanel.panelComponentTransition
                : null
            }`}
          >
            <div className={`${forgotPasswordPanel.formEmail} ${transitionPanel ? forgotPasswordPanel.formEmailOut : forgotPasswordPanel.formEmailIn}`}>
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
  )
}
