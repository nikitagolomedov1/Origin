import React from "react";
import { connect } from "react-redux";
import { getHistoryDetails } from "../../store/actions";
import TableRow from "../../shared/Table";
import Header from "../components/Header";

class HistoryDetails extends React.Component {
  renderTable() {
    if (!this.props.details) return;
    const elem = this.props.details;
    return <TableRow weather={elem.table} />;
  }
  renderList() {
    if (!this.props.details) return <div>Loading...</div>;
    return (
      <div className="row">
        <div className="col">{this.props.details.city}</div>
        <div className="col">{this.props.details.date}</div>
      </div>
    );
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    this.props.getHistoryDetails();
  }
  render() {
    return (
      <div>
        <Header />
        {this.renderList()}
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.historyDetails.payload,
    auth: state.auth
  };
};
export default connect(mapStateToProps, { getHistoryDetails })(HistoryDetails);
