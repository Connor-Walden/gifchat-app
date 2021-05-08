import React from 'react';

function SignupForm(props) {
  const { signupData, updateSignUpData, signup } = props;

  return (
    <div>
      <h1>Sign up!</h1>
      <form onSubmit={(event) => signup(event)}>
        <div className="mb-3">
          <label htmlFor="usernamesu" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="usernamesu"
            aria-describedby="usernamesu"
            name="username"
            value={signupData.username}
            onChange={(event) => updateSignUpData(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordsu" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="passwordsu"
            name="password"
            value={signupData.password}
            onChange={(event) => updateSignUpData(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordsu2" className="form-label">Password Again:</label>
          <input
            type="password"
            className="form-control"
            id="passwordsu2"
            name="password2"
            value={signupData.password2}
            onChange={(event) => updateSignUpData(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    </div>
  );
}

export default SignupForm;