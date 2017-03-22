import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card-game', 'Unit | Model | card game', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
