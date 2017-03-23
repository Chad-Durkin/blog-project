import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,

  actions: {
    updateGameForm() {
      this.set('updateGameForm', true);
    },

    update(game) {
      console.log("first spot");
      var params = {
        category: this.get('category'),
        name: this.get('name'),
        description: this.get('description'),
        playerCount: this.get('playerCount'),
        image: this.get('image')
        // review: [{author: this.get('author'), note: this.get('note')}],
        // tag: [this.get('tag')]
      };
      console.log("second spot");
      this.set('updateGameForm', false);
      this.sendAction('update', game, params);
    }
  }
});
