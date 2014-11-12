import DS from 'ember-data';

var Todo = DS.Model.extend({
    description: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
    FIXTURES: [
        {id: 1, description: 'finish this todo-app', isCompleted: false},
        {id: 2, description: 'eat proper dinner', isCompleted: false},
        {id: 3, description: 'organize your life', isCompleted: false}
    ]
});

export default Todo;