import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
import {Link} from 'react-router-dom'
class Logout extends React.Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <Link to="/login">  <button
              onClick={this.onLogout.bind(this)}
              className="btn btn-link"
            > 
          LogOut
     </button></Link>
      </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);
