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
      this.sendAction('update', game, params);
    },
    destroyGame(game) {
      this.sendAction('destroyGame', game);
    }
  }

});
