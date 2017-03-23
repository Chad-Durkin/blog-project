import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(game) {
      if (confirm('do you wish to delete this game')) {
        this.sendAction('destroyGame', game);
      }
    }
  }
});
