import React from "react";

import pt from "../../prop-types-cover.js";

import Catalog from "../catalog/catalog.jsx";

const Main = (props) => {
  const {
    userInfo,
    promo,
    onPlayButtonClick,
    onMyListButtonClick,
  } = props;

  const {
    poster,
    background,
    backgroundColor,
  } = promo.image;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={background}
            alt={promo.filmTitle}
            style={{backgroundColor}}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a
              className="logo__link"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          {userInfo && (
            <div className="user-block">
              <div className="user-block__avatar">
                <img
                  src={userInfo.avatar}
                  alt="User avatar"
                  width="63" height="63"
                />
              </div>
            </div>
          )}
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={poster}
                alt={`${promo.filmTitle} poster`}
                width="218" height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">
                {promo.filmTitle}
              </h2>

              <p className="movie-card__meta">
                <span className="movie-card__genre">
                  {promo.genre}
                </span>

                <span className="movie-card__year">
                  {promo.release}
                </span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={onPlayButtonClick}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  onClick={onMyListButtonClick}
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <Catalog />

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  userInfo: pt.userInfo,
  promo: pt.film,
  onPlayButtonClick: pt.func,
  onMyListButtonClick: pt.func,
};

export default Main;
