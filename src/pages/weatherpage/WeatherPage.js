import React from "react";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import { weatherpage, makeHistory } from "../../store/actions";
import TableRow from "../../shared/Table";
import Header from "../../components/Header";
class WeatherPage extends React.Component {
  renderTable = () => {
    if (!this.props.weather) {
      return;
    }
    return <TableRow weather={this.props.weather.list} />;
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    const city = this.props.weather.city;
    const table = this.props.weather.list;

    this.props.makeHistory(city, table);
  }

  render() {
    return (
      <div>
        <Header />
        <Autocomplete
          style={{ width: "90%" }}
          onPlaceSelected={place => {
            this.props.weatherpage(place);
          }}
          types={["(regions)"]}
        />
        {this.renderTable()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weatherInfo.payload,
    auth: state.auth
  };
};
// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

export default connect(mapStateToProps, { weatherpage, makeHistory })(
  WeatherPage
);
