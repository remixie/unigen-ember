import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | base64gen', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:base64gen');
    assert.ok(route);
  });
});
