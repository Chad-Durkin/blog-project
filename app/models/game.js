import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    playerCount: DS.attr(),
    image: DS.attr(),
    category: DS.belongsTo('category', {async: true})
});
