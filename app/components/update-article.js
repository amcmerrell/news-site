import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        image: this.get('image'),
        date: this.get('date'),
      };
      console.log("test");
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    },
    delete(article) {
      if(confirm('Are you sure you want to delete this article?')) {
        article.destroyRecord();
        this.transitionTo('/admin');
      }
    }
  }
});
