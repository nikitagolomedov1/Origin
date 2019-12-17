import React from "react";
import { connect } from "react-redux";
import { historyList, getHistoryDetails } from "../../store/actions";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

class HistoryList extends React.Component {
  renderList() {
    if (!this.props.list) return <div>Loading...</div>;
    const listItems = this.props.list.map(elem => (
      <div className="row" key={elem._id}>
        <div className="col">
          <Link to="/history/details">
            <button
              onClick={() => {
                this.props.getHistoryDetails(elem._id);
              }}
              className="btn btn-link"
            >
              {elem.city}
            </button>
          </Link>
        </div>
        <div className="col">{elem.date}</div>
      </div>
    ));
    return <div className="container">{listItems}</div>;
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    console.log(this.props.historyList());
    this.props.historyList();
  }
  render() {
    return (
      <div>
        {" "}
        <Header />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.historyList.payload,
    auth: state.auth
  };
};
export default connect(mapStateToProps, { historyList, getHistoryDetails })(
  HistoryList
);
