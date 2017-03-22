import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm() {
    this.set('updateGameForm', true);
  },
  update(game) {
    var params = {
      category: this.get('category'),
      name: this.get('name'),
      description: this.get('description'),
      playerCount: this.get('playerCount'),
      image: this.get('image'),
      review: [{author: this.get('author'), note: this.get('note')}],
      tag: [this.get('tag')]
    };
    this.set('addNewGame', false);
    this.sendAction('saveGame2', game, params);
  }
  });
});
