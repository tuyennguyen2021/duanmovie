import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { actFetchData } from "./reducer/actions";
import Loader from "components/Loaders";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return data?.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
  };

  render() {
    return (
      <div className="container">
        <h1>ListMoviePage</h1>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(actFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
