import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

it(`Should FilmCardComponent render correctly`, () => {
  const filmTitle = `Fantastic Beasts: The Crimes of Grindelwald`;

  const tree = renderer.create(
      <FilmCard
        film={{
          id: filmTitle + 1,
          filmTitle,
          release: 2011,
          genre: APPROVED_GENRES[0],

          rating: {
            value: 6.3,
            votesCount: 2134,
          },

          image: {
            preview: `img/${toKebabCase(filmTitle)}.jpg`,
            background: `img/bg-${toKebabCase(filmTitle)}.jpg`,
            poster: `img/${toKebabCase(filmTitle)}-poster.jpg`,
          },

          movie: {
            preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            full: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          },

          description: [
            `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&rsquo;s friend and protege.`,

            `Gustave prides himself on providing first-class service to the hotel&rsquo;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&rsquo;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],

          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        }}
        onFilmCardClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
