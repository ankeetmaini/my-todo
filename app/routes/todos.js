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
        }
    }
});
