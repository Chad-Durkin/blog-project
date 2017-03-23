import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      games: this.store.findAll('game'),
      categories: this.store.findAll('category')
    });
  },
actions: {
  saveGame(params) {
    var newGame = this.store.createRecord('game', params);
    var category = params.category;
    category.get('games').addObject(newGame);
    newGame.save().then(function(){
      return category.save();
    });
    this.transitionTo('dash');
  },

  delete(game) {
    // var comment_deletions = article.get('comments').map(function(comment) {
    //   return comment.destroyRecord();
    // });
    // Ember.RSVP.all(comment_deletions).then(function(){
      // return
       game.destroyRecord();
    // });
    this.transitionTo('dash');
  }
}
});
