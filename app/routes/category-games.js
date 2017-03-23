import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      games: this.store.findAll('game'),
      categories: this.store.findAll('category'),
      cateogry: this.store.findRecord('category', params.category_id)
    });
  }
});
