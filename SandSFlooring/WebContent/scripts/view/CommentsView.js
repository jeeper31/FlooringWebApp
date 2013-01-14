define([
    "jquery",
    "underscore",
    "backbone",
    "text!view/comments.html"],
function ($, _, backbone, template){
    return backbone.View.extend(
    {
        initialize : function() {
            _.bindAll( this );
        },
        
        events:{
        },
        
        render : function()
        {
            this.$el.html( template );
            return this;
        }
    });
});