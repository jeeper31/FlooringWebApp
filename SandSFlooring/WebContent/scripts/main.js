require(["jquery", "underscore", "backbone", "view/MainView", "view/CaroselView", "view/StainHelpView",
         "view/ContactView", "view/CommentsView"], 
        function($, _, backbone, MainView, CaroselView, StainHelpView, ContactView, CommentsView) {
    $(document).ready(function () {

        var MainRouter = backbone.Router.extend({
            _$el:null,
            _mainView:null,

            initialize:function (el) {
                _.bindAll(this);
                this._$el = $(el);
                _mainView = new MainView({el:el});
                _caroselView = new CaroselView({el:el});
                _stainHelpView = new StainHelpView({el:el});
                _contactView = new ContactView({el:el});
                _commentsView = new CommentsView({el:el});
            },

            routes:{
                "":"displayMainScreen",
                "home" : "displayMainScreen",
                "carosel" : "displayCarosel",
                "stainHelp" : "displayStainHelp",
                "contact" : "displayContact",
                "comments" : "displayComments"
            },
            

            displayMainScreen:function () {
                this.switchView(_mainView);
            },
            
            displayCarosel:function () {
                this.switchView(_caroselView);
            },
            
            displayStainHelp:function () {
                this.switchView(_stainHelpView);
            },
            
            displayContact:function () {
                this.switchView(_contactView);
            },
            
            displayComments:function () {
                this.switchView(_commentsView);
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