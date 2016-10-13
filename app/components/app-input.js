import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['app-input'],
  type: null,

  isTextarea: Ember.computed('type', function() {
    return this.get('type') === 'textarea';
  })
});
