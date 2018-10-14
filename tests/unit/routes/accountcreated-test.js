import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | accountcreated', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:accountcreated');
    assert.ok(route);
  });
});
