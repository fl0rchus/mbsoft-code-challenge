import React, { Suspense, lazy, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Router } from "@reach/router";
import Footer from "./components/Footer";
import State from "./components/State";
import { Container } from "react-bootstrap";

const SeriesLoading = lazy(() => import("./pages/Series"));
const MoviesLoading = lazy(() => import("./pages/Movies"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Container className="d-flex flex-wrap justify-content-center mt-5 mb-5">
            <State message="Loading, please wait" variant="primary" />
          </Container>
        }
      >
        <Router>
          <Home path="/" />
          <SeriesLoading path="/series" />
          <MoviesLoading path="/movies" />
        </Router>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
