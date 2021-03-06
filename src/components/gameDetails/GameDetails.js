import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import { Spinner, Container, Row, Col, Image, Button, Badge } from "react-bootstrap";

function GameDetails() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  
  let { id } = useParams();

  const detailUrl = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(detailUrl)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [detailUrl]);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>;
  }
  
  return (
    <div className="game-detail-container" style={{ background: `-webkit-linear-gradient(bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7)), url(${detail.background_image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Container>
        <Heading title={detail.name_original} />
        <Row>
          <Col md={6}>
            <div className="game-image-container"><Image src={detail.background_image} className="game-detail-image"></Image></div>

            <div className="website-container">
              <p className="text-light"><i className="fas fa-globe text-primary"></i> Official Site: <a href={detail.website} dangerouslySetInnerHTML={{ __html: detail.website }} /></p>
            </div>

            <div className="badge-container">
              <h5 className="text-secondary">Genre</h5>
              {detail.genres.map(genre => {
                const  { id } = genre;

                return (
                  <Badge key={id} variant="light" className="genre-badge">{genre.name}</Badge>
                )
              })}
            </div>

            <div className="platform-container">
              <h5 className="text-secondary">Platforms</h5>
              {detail.platforms.map(platform => {
                const  { id } = platform;

                return (
                  <Badge key={id} variant="light" className="platform-badge">{platform.platform.name}</Badge>
                )
              })}
            </div>
          </Col>
          <Col md={6}>
            <h3 className="text-light">About</h3>
            <div dangerouslySetInnerHTML={{ __html: detail.description }} className="text-light" />
          </Col>
        </Row>
        <Link to="/">
          <Button variant="warning" className="home-link" block><b>Back to Games List</b></Button>
        </Link>
      </Container>
    </div>
    
  );
}

export default GameDetails;