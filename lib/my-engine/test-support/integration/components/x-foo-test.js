import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

module('[my-engine] Integration | Component | x-foo', function(hooks) {
  setupRenderingTest(hooks, {resolver: engineResolverFor('my-engine')});

  test('without breakpoints initializer', async function(assert) {
    this.set('dummyAction', () => {});
    await render(hbs` <XFoo /> `);
    assert.dom(this.element).includesText('this is XFoo');
  });

  test('with breakpoints initializer', async function(assert) {
    this.owner.registerOptionsForType('breakpoints', { instantiate: false });
    this.set('dummyAction', () => {});
    await render(hbs` <XFoo /> `);
    assert.dom(this.element).includesText('this is XFoo');
  });

});
