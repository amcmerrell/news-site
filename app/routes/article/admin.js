import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('article', this.paramsFor('article').article_id);
  },
  actions: {
    update(article, params) {
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            article.set(key,params[key]);
          }
        });
        article.save();
        this.transitionTo('admin');
    },
  }
});
