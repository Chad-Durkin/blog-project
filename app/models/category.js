import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  games: DS.hasMany('game', {async: true})
});
