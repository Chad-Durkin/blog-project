import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(game) {
    if(confirm('Are you sure you want to delete this game?')){
      this.sendAction('delete', game);
    }
  }
}
});
