import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    saveGame3(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    },
    update(game, params) {
      console.log("third spot");
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          game.set(key,params[key]);
        }
      });
      game.save();
      this.transitionTo('index');
    },
    destroyGame(game) {
      game.destroyRecord();
      this.transitionTo('index');
    }
  }
});
