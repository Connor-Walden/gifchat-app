
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

function HomeHero({ loggedIn, login, updateLoginInfo, loginData, signup, updateSignUpData, signupData }) {
    return (
        <div>
            {loggedIn ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <img src='./assets/logo.gif' style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <LoginForm
                        login={(event) => login(event)}
                        updateLoginInfo={(event) => updateLoginInfo(event)}
                        loginData={loginData}
                    />

                    <br />

                    <SignupForm
                        signup={event => signup(event)}
                        updateSignUpData={event => updateSignUpData(event)}
                        signupData={signupData}
                    />
                    <br />
                </div>
            )}
        </div>
    );
}

export default HomeHero;