import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('category-games', {path: '/category-games/:category_id'});
  this.route('game', {path: '/game/:game_id'});
  this.route('dash');
  this.route('update', {path: '/update/:game_id'});
});

export default Router;
