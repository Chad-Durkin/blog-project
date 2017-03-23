import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveGame(params) {
      this.sendAction('saveGame', params);
    }
  }
});
