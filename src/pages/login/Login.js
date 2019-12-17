import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { Link } from "react-router-dom";
class Login extends React.Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };
  renderInput = ({ input, label, type }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input
            {...input}
            placeholder={label}
            type={type}
            className="form-control"
          />
        </div>
      </div>
    );
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/weatherpage");
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="needs-validation"
        >
          <Field
            name="username"
            type="text"
            component={this.renderInput}
            label="Username"
          />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            label="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/">Registration</Link>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const formWrapped = reduxForm({
  form: "login",
  validate
})(Login);

export default connect(mapStateToProps, { login })(formWrapped);
