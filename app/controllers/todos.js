import Ember from 'ember';

export default Ember.ArrayController.extend({
    remaining: function() {
    	return this.get('model').filterBy('isCompleted', false).get('length');
    }.property('model.@each.isCompleted'),

    completed: function() {
        return this.get('model').filterBy('isCompleted', true).get('length');
    }.property('model.@each.isCompleted'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),

    actions: {
        add: function() {
            this.send('createTodo', this.get('newTodo').trim());
            //make the field empty
            this.set('newTodo', null);
        } 
    }
});