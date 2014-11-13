import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        add: function() {
            this.send('createTodo', this.get('newTodo'));
            //make the field empty
            this.set('newTodo', null);
        } 
    }
});
