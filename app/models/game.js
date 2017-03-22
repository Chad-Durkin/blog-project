import DS from 'ember-data';

export default DS.Model.extend({
    category: DS.attr(),
    tag: DS.attr(),
    name: DS.attr(),
    description: DS.attr(),
    playerCount: DS.attr(),
    image: DS.attr(),
    review: DS.attr()
});
