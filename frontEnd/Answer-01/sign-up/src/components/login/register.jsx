import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-gender">
              <label htmlFor="password">Gender <br/></label>
              <input type="checkbox" value="Male" name="gender" /> Male
              <input type="checkbox" value="Female" name="gender" /> Female
              <input type="checkbox" value="Other" name="gender" /> Other
            </div>
           
            <div className="form-group">
              <label htmlFor="password">About</label>
              <input type="text" name="about" placeholder="about" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Terms and conditions</label>
              <input type="text" name="terms and conditions" placeholder="terms and coditions" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
