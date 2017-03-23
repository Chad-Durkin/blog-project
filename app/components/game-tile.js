import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(game, params) {
      console.log("game-tile js, you made it");
      this.sendAction('update', game, params);
    }
  }

});
