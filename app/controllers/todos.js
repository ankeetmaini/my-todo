import Ember from 'ember';

export default Ember.ArrayController.extend({
    remaining: function() {
    	return this.get('model').filterBy('isCompleted', false).get('length');
    }.property('model.@each.isCompleted'),

    actions: {
        add: function() {
            this.send('createTodo', this.get('newTodo').trim());
            //make the field empty
            this.set('newTodo', null);
        } 
    }
});