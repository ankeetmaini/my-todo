import Ember from 'ember';

export default Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        var todo = this.get('model');
        if(value === true) {
            todo.set('isCompleted', true);
            todo.save();
            return value;
        } 
        if(value === false){
            todo.set('isCompleted', false);
            todo.save();
            return value;
        }
        return todo.get('isCompleted');
    }.property('isCompleted'),

    actions: {
        remove: function(params) {
            this.send('deleteTodo', params.id);
        },

        edit: function() {
            this.set('isEditing', true);
        },

        update: function() {
            this.send('updateTodo', {
                description: this.get('model.description'),
                id: this.get('model.id')
            });
            this.set('isEditing', false);
        }
    }
});
