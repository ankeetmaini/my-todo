import Ember from 'ember';

export default Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        var model = this.get('model');
        if(value === true) {
            model.set('isCompleted', true);
            model.save();
            return value;
        } 
        if(value === false){
            model.set('isCompleted', false);
            model.save();
            return value;
        }
        return model.get('isCompleted');
    }.property('isCompleted')
});
