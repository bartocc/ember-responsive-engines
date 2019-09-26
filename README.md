## How to test components of an ember-engine when they use ember-responsive ?

[This example app](https://github.com/bartocc/ember-responsive-engines) contains an in-repo engine, and this engine only displays the XFoo component.

This component uses the `media` helper provided by `ember-responsive`.

XFoo has 2 **almost** identical integration tests that you can find at: http://lvh.me:4200/tests?moduleId=ef7715a3.

On is failing with the error

```
Failed to create an instance of 'breakpoints:main'. Most likely an improperly defined class or an invalid module export
```

The other test adds the following line and does not fail:

```js
this.owner.registerOptionsForType('breakpoints', { instantiate: false });
```

ember-responsive does the same thing in [an initializer](https://github.com/freshbooks/ember-responsive/blob/master/addon/initializers/responsive.js#L8), but this is not enough to make the integration test work out of the box.

Do you believe there is a way to have the integration tests work without re-doing the `registerOptionsForType` call?
