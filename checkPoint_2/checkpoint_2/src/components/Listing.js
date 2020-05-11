import React from "react";
import { Container } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Listing = props => {
  const id = props.match.params.id;
  const listing = props.listings.find(c => c.id == id);

  return (
    <Container maxWidth="sm" className="listing-container">
      <h2>Name: {listing.name}</h2>
      <h4>Address: {listing.address}</h4>
      <h4>Hours: {listing.hours}</h4>
      <h4>Description: {listing.description}</h4>
      <Container style={{ height: "400px", width: "450px" }}></Container>
    </Container>
  );
};

export default Listing;
