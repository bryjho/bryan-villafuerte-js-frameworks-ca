import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function GameCard({ id, name, background_image, rating, released, description }) {
  return (
    <Card className="bg-dark text-light h-100">
      <Card.Img variant="top" src={background_image} alt="GamePhoto" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <div className="overlay-container">
          <Card.Title className="text-warning">{name}</Card.Title>
          <Row>
            <Col sm={9}>
              <Card.Text>
                <b>Rating:</b> {rating} <i className="fas fa-star text-warning"></i>
              </Card.Text>
              <Card.Text>
                <b>Release Date:</b> {released}
              </Card.Text>
            </Col>
            <Col sm={3}>
              <div className="heart-container text-light d-flex justify-content-end">
                <Button variant="danger">
                  <i class="fas fa-heart"></i>
                </Button>
              </div>
            </Col>
          </Row>
          <Link to={"game/" + id}>
            <Button variant="warning" className="text-dark" block><b>Game Details</b></Button>
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  )
}

GameCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
};

export default GameCard;