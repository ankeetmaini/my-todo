import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add: function() {
            this.send('createTodo', this.get('newTodo'));
            //make the field empty
            this.set('newTodo', null);
        } 
    }
});
