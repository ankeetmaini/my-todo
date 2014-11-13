import Ember from 'ember';

export default Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        var model = this.get('model');
        if(value) {
            model.set('isCompleted', true);
            model.save();
            return value;
        } else {
            return model.get('isCompleted')
        }
    }.property('isCompleted')
});
