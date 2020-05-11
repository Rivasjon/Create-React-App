import { connect } from "react-redux";
import Listing from "../components/allListing";
import { deleteListing } from "../redux/actions";

const mapStateToProps = state => {
  return {
    listings: state.listings,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteListing: index => dispatch(deleteListing(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
