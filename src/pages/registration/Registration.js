import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registration } from "../../store/actions";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = formValues => {
    this.props.registration(formValues);
  };
  renderInput = ({ input, label, type, meta }) => {
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
          {this.renderError(meta)}
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
        <h2>Registration</h2>
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
            name="email"
            type="email"
            component={this.renderInput}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            label="Password"
          />
          <Field
            name="confirm_password"
            type="password"
            component={this.renderInput}
            label="Confirm password"
          />
          <button>Registration</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }

  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (!formValues.confirm_password) {
    errors.confirm_password = "You must confirm password";
  }

  return errors;
};


const formWrapped = reduxForm({
  form: "registration",
  validate
})(Registration);

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { registration })(formWrapped);
