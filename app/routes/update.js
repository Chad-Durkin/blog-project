import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('game', params.game_id);
 },
 actions: {
   update(game) {
     // declare params variable here because not defined through component. comes directly from update route
     var params = {
       name: this.get('name'),
       playerCount: this.get('playerCount'),
       description: this.get('description'),
       image: this.get('image')
     };
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         game.set(key,params[key]);
       }
     });
     game.save();
     this.transitionTo('dash');
   },
 }
});
