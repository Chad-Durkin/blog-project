import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,

  actions: {
    updateGameForm() {
      this.set('updateGameForm', true);
    },

    update(game) {
      var params = {
        category: this.get('category'),
        name: this.get('name'),
        description: this.get('description'),
        playerCount: this.get('playerCount'),
        image: this.get('image')
      };
      this.set('updateGameForm', false);
      this.sendAction('update', game, params);
    }
  }
});
