import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const Listings = props => {
  return (
    <Container maxWidth="lg" className="listing-container">
      {document.cookie == "loggedIn=true" ? (
        <div>
          <h2>Welcome, Username</h2>
        </div>
      ) : null}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Description</TableCell>
            {document.cookie == "loggedIn=true" ? (
              <TableCell>Delete</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, index) => (
            <TableRow key={listing.id}>
              <TableCell component="th" scope="row">
                {listing.id}
              </TableCell>
              <TableCell>
                <Link to={`/listing/${listing.id}`}>{listing["name"]}</Link>
              </TableCell>
              <TableCell>{listing["address"]}</TableCell>
              <TableCell>{listing["hours"]}</TableCell>
              <TableCell>{listing["description"]}</TableCell>
              {document.cookie == "loggedIn=true" ? (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.deleteListing(index)}
                    className="icon text-red"
                  />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
