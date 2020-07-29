import React from "react";

import {Screen} from "../utils/const.js";

import Main from "../components/main/main.jsx";
import MoviePage from "../components/movie-page/movie-page.jsx";
import withReviews from "./with-reviews.jsx";

const MoviePageWrapped = withReviews(MoviePage);

const withFilmPopup = (Component) => {
  return class WithFilmPopup extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        screen: Screen.MAIN,
        currentFilm: null,
      };

      this._renderApp = this._renderApp.bind(this);
      this._handleFilmCardClick = this._handleFilmCardClick.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          renderApp={this._renderApp}
          onFilmCardClick={this._handleFilmCardClick}
        />
      );
    }

    _renderApp(promo, films, onFilmCardClick) {
      const {
        screen,
        currentFilm,
      } = this.state;

      switch (screen) {
        case Screen.MAIN:
          return (
            <Main
              promo={promo}
              films={films}
              onFilmCardClick={onFilmCardClick}
            />
          );

        case Screen.DETAILS:
          return (
            <MoviePageWrapped
              film={currentFilm}
            />
          );

        default:
          return null;
      }
    }

    _handleFilmCardClick(film) {
      this.setState({
        screen: Screen.DETAILS,
        currentFilm: film,
      });
    }
  };
};

export default withFilmPopup;