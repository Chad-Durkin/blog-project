import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Ember.RSVP.has(
    return {
      games: this.store.findAll('game'),
      categories: this.store.findAll('category')
    };
  }
});
