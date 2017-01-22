import config from '../../../config';
import express from 'express';

import movies from '../movies/actions/movies';
import borrow from '../movies/actions/borrow';
import about from '../movies/actions/about';
import moviesCategory from '../movies/actions/moviesCategory';

export default function routes(app) {

  app.use('/public', express.static(config.APP_BUILD_DIRECTORY));

  app.use('/api/movies/:categoryId', moviesCategory);
  app.use('/api/movies', movies);
  app.use('/api/borrow', borrow);
  app.use('/api/about', about);

  app.use('/*', express.static(config.INDEX_HTML));
}
