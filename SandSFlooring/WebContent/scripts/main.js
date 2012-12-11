require(["jquery", "underscore", "backbone", "view/MainView"], 
        function($, _, backbone, MainView) {
    $(document).ready(function () {

        var MainRouter = backbone.Router.extend({
            _$el:null,
            _mainView:null,

            initialize:function (el) {
                _.bindAll(this);
                this._$el = $(el);
                _mainView = new MainView({el:el});
            },

            routes:{
                "":"displayMainScreen"
            },

            displayMainScreen:function () {
                this.switchView(_mainView);
            },

            currentView:null,

            switchView:function (view) {
                this._$el.empty();
                this.currentView = view;
                view.render();
            }
        });

        var app_router = new MainRouter($('#content'));
        backbone.history.start();
    });
});