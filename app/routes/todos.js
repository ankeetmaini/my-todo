import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    },
    
    actions: {
        createTodo: function(description){
            if(!description) {
                return;
            }
            var todo = this.store.createRecord('todo', {
                description: description,
                isCompleted: false
            });
            todo.save();
        },

        deleteTodo: function(id){
            this.store.find('todo', id).then(function(todo){
                todo.destroyRecord();
            });
        },

        updateTodo: function(toBeSavedTodo) {
            this.store.find('todo', toBeSavedTodo.id).then(function(todo){
                todo.set('description', toBeSavedTodo.description);
                todo.save();
            });
        },

        clearCompleted: function() {
            this.store.filter('todo', function(todo){
                return todo.get('isCompleted');      
            }).then(function(todos){
                todos.invoke('destroyRecord');
            });
        }
    }
});
