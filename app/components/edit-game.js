import Ember from 'ember';

export default Ember.Component.extend({

  updateGameForm() {
    this.set('updateGameForm', true);
  },

  update1(game) {
    var params = {
      category: this.get('category'),
      name: this.get('name'),
      description: this.get('description'),
      playerCount: this.get('playerCount'),
      image: this.get('image'),
      review: [{author: this.get('author'), note: this.get('note')}],
      tag: [this.get('tag')]
    };
    this.set('updateGameForm', false);
    this.sendAction('update2', game, params);
  }
});
