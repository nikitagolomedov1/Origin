import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { editProfile, getProfile } from "../../store/actions";
import Header from "../components/Header";
class EditProfile extends React.Component {
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
    const id = this.props.auth.user.id;
    this.props.editProfile(formValues, id);
  };
  renderInput = ({ input, label, type, meta, info, disabled }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input
            {...input}
            value={info}
            type={type}
            className="form-control"
            disabled={disabled}
          />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    const id = this.props.auth.user.id;
    this.props.getProfile(id);
  }
  render() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header />
        <h2>Edit Profile</h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="needs-validation"
        >
          <Field
            name="username"
            type="text"
            component={this.renderInput}
            label="Username"
            info={this.props.profile.username}
          />
          <Field
            name="email"
            type="email"
            component={this.renderInput}
            label="Email"
            info={this.props.profile.email}
            disabled={true}
          />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            label="Password"
          />
          <Field
            name="repeat_password"
            type="password"
            component={this.renderInput}
            label="Repeat password"
          />
          <button>Edit</button>
        </form>
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
  if (!formValues.repeat_password) {
    errors.repeat_password = "You must repeat password";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "editform",
  validate
})(EditProfile);

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  profile: state.profiles.payload
});
export default connect(mapStateToProps, { editProfile, getProfile })(
  formWrapped
);
