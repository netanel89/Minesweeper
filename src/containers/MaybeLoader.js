import React from "react";
import { connect } from "react-redux";
import { Loader } from "../components";

const MaybeLoader = ({ loading }) => {
  return loading && <Loader />;
};

const mapStateToProps = store => {
  return {
    loading: store.game.loading
  };
};

export default connect(mapStateToProps)(MaybeLoader);
