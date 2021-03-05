import React from "react";
import Subtitle from "../components/Subtitle";
import { entries } from "../data/data";
import CardItem from "../components/CardItem";
import { Container } from "react-bootstrap";
import State from "../components/State";

const Movies = () => {
  let filteredMovies = entries
    .filter((item) => item.releaseYear > 2010 && item.programType == "movie")
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20);

  return (
    <main>
      <Subtitle subtitle="Popular Movies" />
      <Container
        fluid
        className="fluid d-flex flex-wrap justify-content-center mt-5 mb-5"
      >
        {filteredMovies.length != 0 ? (
          filteredMovies.map((item, index) => {
            return (
              <CardItem
                url={item.images["Poster Art"].url}
                title={item.title}
                key={index}
              />
            );
          })
        ) : (
          <State message="Oops, something went wrong" variant="danger" />
        )}
      </Container>
    </main>
  );
};
export default Movies;
