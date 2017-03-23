import Ember from 'ember';

export default Ember.Component.extend({
  newGameForm: false,
  actions: {
    gameFormShow() {
      if(this.newGameForm) {
        this.set('newGameForm', false);
      } else {
        this.set('newGameForm', true);
      }
    },

    saveGame() {
      var params = {
        category: this.get('category'),
        name: this.get('name'),
        description: this.get('description'),
        playerCount: this.get('playerCount'),
        image: this.get('image')
      };
      this.set('addNewGame', false);
      this.sendAction('saveGame', params);
    }
  }
});
