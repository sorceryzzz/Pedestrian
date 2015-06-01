define("app/ui/expanding_nav",["module","require","exports","core/component"],function(module, require, exports) {
function expandingNav(){this.defaultAttrs({nodeSelector:".js-expandingNavNode",expandingListSelector:".js-expandingNavList",disabledNodeClass:"js-expandingNavNodeDisabled",expandedClassSelector:".navExpanded",expandedClass:"navExpanded"}),this.toggleExpand=function(a){var b=$(a.target).parent();b.hasClass(this.attr.disabledNodeClass)||(b.toggleClass(this.attr.expandedClass),b.find(this.attr.expandingListSelector).slideToggle(300),this.collapseAll(b.index()))},this.collapseAll=function(a){var b=this.$node.find(this.attr.expandedClassSelector).filter(function(){return $(this).index()!=a});b.removeClass(this.attr.expandedClass),b.find(this.attr.expandingListSelector).slideToggle(300)},this.after("initialize",function(){this.on(document,"uiPageChanged",this.collapseAll),this.on("click",{nodeSelector:this.toggleExpand})})}var defineComponent=require("core/component");module.exports=defineComponent(expandingNav)
});
define("app/data/frontpage_scribe",["module","require","exports","core/component","app/data/with_scribe"],function(module, require, exports) {
function frontpageScribe(){this.scribeFrontpageLink=function(a,b){var c=a.target.className;c=="signup-welcome-link"?this.scribe({component:"lifeline",element:"welcome_text",action:"signup_click"}):c.indexOf("app-store")!=-1?this.scribe({page:"front",section:"front",component:"download",element:"ios",action:"click"}):c.indexOf("google-play")!=-1?this.scribe({page:"front",section:"front",component:"download",element:"android",action:"click"}):$(a.target).parent().hasClass("devices-link")?this.scribe({page:"front",section:"front",component:"download",element:"other",action:"click"}):c.indexOf("tweet-text")!=-1?this.scribe({page:"front",section:"front",component:"tweet",element:"lohp_tweet_text",action:"click"}):c.indexOf("tweet-username")!=-1?this.scribe({page:"front",section:"front",component:"tweet",element:"lohp_tweet_username",action:"click"}):c.indexOf("tweet-time")!=-1&&this.scribe({page:"front",section:"front",component:"tweet",element:"lohp_tweet_time",action:"click"})},this.after("initialize",function(){this.on("click",this.scribeFrontpageLink)})}var defineComponent=require("core/component"),withScribe=require("app/data/with_scribe");module.exports=defineComponent(frontpageScribe,withScribe)
});
define("app/ui/signup/signup_call_out_expander",["module","require","exports","core/component","app/data/with_scribe"],function(module, require, exports) {
function signupCallOutExpander(){this.defaultAttrs({expandButtonSelector:".SignupCallOut-expand",formSelector:".SignupForm"}),this.expandForm=function(){this.select("formSelector").slideDown(),this.select("expandButtonSelector").slideUp(),this.scribe({element:"signup_call_out_expand",action:"click"})},this.after("initialize",function(a){this.on("click",{expandButtonSelector:this.expandForm})})}var defineComponent=require("core/component"),withScribe=require("app/data/with_scribe");module.exports=defineComponent(signupCallOutExpander,withScribe)
});
define("app/ui/streams/stream_hero_buttons",["module","require","exports","core/component"],function(module, require, exports) {
function streamHeroButtons(){this.defaultAttrs({loginButtonSelector:".js-login"}),this.loginClicked=function(a,b){a.preventDefault(),this.trigger("uiOpenLoginDialog")},this.after("initialize",function(){this.on("click",{loginButtonSelector:this.loginClicked})})}var defineComponent=require("core/component");module.exports=defineComponent(streamHeroButtons)
});
define("app/boot/streams",["module","require","exports","app/boot/common","app/boot/logged_out","app/boot/app","app/data/client_event","app/utils/cookie","app/ui/login_form","app/ui/signin_dropdown","app/ui/expanding_nav","app/ui/navigation_links","app/data/frontpage_scribe","app/ui/gallery/gallery","app/data/gallery_scribe","app/ui/responsive_dashboard_width","app/ui/scroll_monitor","app/ui/search_input","app/data/search_input_scribe","app/ui/tweet_actions","app/data/typeahead/typeahead","app/data/typeahead/typeahead_scribe","app/ui/typeahead/typeahead_input","app/ui/typeahead/typeahead_dropdown","core/utils","app/ui/dialogs/uz_survey","app/ui/signup/signup_call_out_expander","app/ui/streams/stream_hero_buttons"],function(module, require, exports) {
var bootCommon=require("app/boot/common"),bootLoggedOut=require("app/boot/logged_out"),bootLoggedIn=require("app/boot/app"),clientEvent=require("app/data/client_event"),cookie=require("app/utils/cookie"),LoginForm=require("app/ui/login_form"),SigninDropdown=require("app/ui/signin_dropdown"),ExpandingNav=require("app/ui/expanding_nav"),NavigationLinks=require("app/ui/navigation_links"),FrontpageScribe=require("app/data/frontpage_scribe"),Gallery=require("app/ui/gallery/gallery"),GalleryScribe=require("app/data/gallery_scribe"),ResponsiveDashboardWidth=require("app/ui/responsive_dashboard_width"),ScrollMonitor=require("app/ui/scroll_monitor"),SearchInput=require("app/ui/search_input"),SearchInputScribe=require("app/data/search_input_scribe"),TweetActions=require("app/ui/tweet_actions"),TypeaheadData=require("app/data/typeahead/typeahead"),TypeaheadScribe=require("app/data/typeahead/typeahead_scribe"),TypeaheadInput=require("app/ui/typeahead/typeahead_input"),TypeaheadDropdown=require("app/ui/typeahead/typeahead_dropdown"),utils=require("core/utils"),UzSurvey=require("app/ui/dialogs/uz_survey"),SignupCallOutExpander=require("app/ui/signup/signup_call_out_expander"),StreamHeroButtons=require("app/ui/streams/stream_hero_buttons");module.exports=function(a){bootCommon(a),a.loggedIn?bootLoggedIn(a):bootLoggedOut(a),FrontpageScribe.attachTo(document,a),GalleryScribe.attachTo(document,{noTeardown:!0}),UzSurvey.attachTo("#uz_streams_survey");var b={itemType:"tweet",noTeardown:!0,loggedIn:a.loggedIn,eventData:{scribeContext:{component:"gallery"}}};Gallery.attachTo(".Gallery",a,b),TweetActions.attachTo(".Gallery",a,b);var c=$('input[name="remember_me"]');c.prop("checked",cookie("remember_checked_on")!=="0"),clientEvent.scribeData.context=a.streamId,SigninDropdown.attachTo(".js-session"),a.passwordResetAdvancedLoginForm&&LoginForm.attachTo(".js-front-signin"),StreamHeroButtons.attachTo(".StreamsHero-buttonContainer, .StreamsTopBar"),ExpandingNav.attachTo(".StreamsCategoryNav",{disabledNodeClass:"StreamsCategoryNav-item--active",expandedClassSelector:".StreamsCategoryNav-item--expanded",expandedClass:"StreamsCategoryNav-item--expanded"}),NavigationLinks.attachTo(".StreamsCategoryNav",{eventData:{scribeContext:{component:"category_nav"}}}),ResponsiveDashboardWidth.attachTo(document);var d="#global-nav-search",e="top_bar_searchbox";SearchInput.attachTo(d,{eventData:{scribeContext:{component:e,element:""}}}),SearchInputScribe.attachTo(d,{noTeardown:!0});var f=[["topics",["topics"]],["accounts",["accounts"]],["concierge",["concierge"]]];TypeaheadScribe.attachTo(document,{noTeardown:!0}),TypeaheadData.attachTo(document,a.typeaheadData,{noTeardown:!0}),TypeaheadInput.attachTo(d),TypeaheadDropdown.attachTo(d,{datasourceRenders:f,accountsShortcutShow:!0,autocompleteAccounts:!1,typeaheadSrc:"SEARCH_BOX",deciders:utils.merge(a.typeaheadData,{showSocialContext:a.typeaheadData.showSearchAccountSocialContext}),eventData:{scribeContext:{component:e,element:"typeahead"}}}),SignupCallOutExpander.attachTo(".SignupCallOut"),ScrollMonitor.attachTo(document,{autoStart:!0,scrollDelay:10})}
});
define("app/ui/cookie_warning",["module","require","exports","core/component"],function(module, require, exports) {
function cookieWarning(){this.cookiesEnabled=function(){var a=!!navigator.cookieEnabled;if(typeof navigator.cookieEnabled=="undefined"||$.browser.msie)document.cookie="cookies_enabled",a=document.cookie.indexOf("cookies_enabled")!=-1;return a},this.showWarning=function(){this.cookiesEnabled()||this.$node.show("fast")},this.after("initialize",function(){this.on(document,"uiSwiftLoaded",this.showWarning)})}var component=require("core/component");module.exports=component(cookieWarning)
});
define("app/ui/signin_focus",["module","require","exports","core/component"],function(module, require, exports) {
function SigninFocus(){this.defaultAttrs({signinEmailInputSelector:"#signin-email"}),this.after("initialize",function(){this.node.activeElement.tagName.toLowerCase()!="input"&&this.select("signinEmailInputSelector").focus()})}var defineComponent=require("core/component");module.exports=defineComponent(SigninFocus)
});
define("app/ui/streams/element_scroll_affixer",["module","require","exports","core/component"],function(module, require, exports) {
function ElementScrollAffixer(){this.defaultAttrs({fixedClass:"StreamsTopBar--fixed",scrollThreshold:310}),this.handleScroll=function(a,b){!this.isFixed&&b.scrollTop>=this.attr.scrollThreshold?(this.$node.addClass(this.attr.fixedClass),this.isFixed=!0):this.isFixed&&b.scrollTop<this.attr.scrollThreshold&&(this.$node.removeClass(this.attr.fixedClass),this.isFixed=!1)},this.after("initialize",function(){this.isFixed=!1,this.handleScroll(null,{scrollTop:$(document).scrollTop()}),this.on(document,"uiElementHasScrolled",this.handleScroll)})}var defineComponent=require("core/component");module.exports=defineComponent(ElementScrollAffixer)
});
define("app/pages/streams/home",["module","require","exports","app/boot/streams","app/ui/cookie_warning","app/ui/macaw_nymizer_signin_conversion","app/ui/navigation_links","app/ui/signin_focus","app/ui/streams/element_scroll_affixer"],function(module, require, exports) {
var bootStreams=require("app/boot/streams"),CookieWarning=require("app/ui/cookie_warning"),MacawNymizerSigninConversion=require("app/ui/macaw_nymizer_signin_conversion"),NavigationLinks=require("app/ui/navigation_links"),SigninFocus=require("app/ui/signin_focus"),ScrollAffixer=require("app/ui/streams/element_scroll_affixer");module.exports=function(a){bootStreams(a),SigninFocus.attachTo(document),CookieWarning.attachTo("#front-no-cookies-warn"),MacawNymizerSigninConversion.attachTo(".js-StreamsTopBarSignIn"),NavigationLinks.attachTo(".Streams-featuredStreamList",{eventData:{scribeContext:{component:"featured_streams"}}});var b=$(".StreamsTopBar").offset().top;ScrollAffixer.attachTo(".StreamsTopBar",{scrollThreshold:b});var c=$(".dashboard-right").offset().top-$(".StreamsTopBar").outerHeight();ScrollAffixer.attachTo(".dashboard-right",{fixedClass:"dashboard-right-fixed",scrollThreshold:c})}
});
define("app/pages/streams/stream",["module","require","exports","app/boot/streams","app/boot/tweet_timeline","app/boot/profile_popup","app/ui/navigation_links","core/utils","app/ui/timelines/tweet_visibility","app/data/tweet_visibility_scribe","app/ui/streams/element_scroll_affixer"],function(module, require, exports) {
var bootStreams=require("app/boot/streams"),bootTimeline=require("app/boot/tweet_timeline"),bootProfilePopup=require("app/boot/profile_popup"),NavigationLinks=require("app/ui/navigation_links"),utils=require("core/utils"),TweetVisibility=require("app/ui/timelines/tweet_visibility"),TweetVisibilityScribe=require("app/data/tweet_visibility_scribe"),ScrollAffixer=require("app/ui/streams/element_scroll_affixer");module.exports=function(a){bootStreams(a),bootTimeline(utils.merge(a,{useMinMaxPagination:!0,pollingEnabled:!1,endpoint:a.timeline_url,itemType:"tweet"})),bootProfilePopup({profileHoversEnabled:a.profileHoversEnabled,loggedIn:a.loggedIn}),TweetVisibility.attachTo("#timeline",{eventData:a.eventData}),TweetVisibilityScribe.attachTo(document),ScrollAffixer.attachTo(".dashboard-right",{scrollThreshold:30,fixedClass:"stream-dashboard-right-fixed"}),ScrollAffixer.attachTo(".StreamsTopBar-container",{scrollThreshold:10,fixedClass:"StreamsTopBar-container--collapsedHero"})}
});
define("app/ui/streams/stream_category_bar",["module","require","exports","core/component"],function(module, require, exports) {
var defineComponent=require("core/component");module.exports=defineComponent(function(){this.defaultAttrs({overlaySelector:".StreamsCategoryMoreOverlay",overlayDismissSelector:".StreamsCategoryMoreOverlay-dismiss",moreSelector:".StreamsCategoryBar-item.ItemMore"}),this.showOverlay=function(){var a=this.select("overlaySelector");a.show()},this.dismissOverlay=function(){var a=this.select("overlaySelector");a.hide()},this.after("initialize",function(){this.on("click",{moreSelector:this.showOverlay,overlayDismissSelector:this.dismissOverlay})})})
});
define("app/ui/streams/tweet_forward_gifs",["module","require","exports","app/ui/expando/with_animated_gifs","core/component"],function(module, require, exports) {
function lohpGifPlayer(){this.defaultAttrs({tweetSelector:".js-stream-tweet",mediaGifSelector:".js-media-preview",animatedGifSelector:".animated-gif"}),this.handleGifClick=function(a,b){var c=$(b.el).closest(this.attr.tweetSelector),d=c.find(this.attr.mediaGifSelector);d.hasClass("is-playing")?(this.trigger(c,"uiStopGif"),d.removeClass("is-playing")):(this.trigger(c,"uiStartGif"),d.addClass("is-playing"))},this.after("initialize",function(){this.on("click",{mediaGifSelector:this.handleGifClick,animatedGifSelector:this.handleGifClick})})}var withAnimatedGifs=require("app/ui/expando/with_animated_gifs"),defineComponent=require("core/component");module.exports=defineComponent(lohpGifPlayer,withAnimatedGifs)
});
define("app/ui/streams/tweet_forward_permalink_click",["module","require","exports","core/component"],function(module, require, exports) {
function tweetForwardPermalinkClick(){this.defaultAttrs({tweetSelector:".tweet",exculdesSelector:"a, .AdaptiveMedia, button"}),this.isDropdownOpen=function(){return $(document).find(".dropdown-menu:visible").size()>0},this.handleClick=function(a,b){!a.isDefaultPrevented()&&$(a.target).closest(this.attr.exculdesSelector).size()==0&&!this.isDropdownOpen()&&b.el&&$(b.el).data("permalink-path")&&$(b.el).trigger("uiNavigate",{href:$(b.el).data("permalink-path")})},this.after("initialize",function(){this.on("click",{tweetSelector:this.handleClick})})}var defineComponent=require("core/component");module.exports=defineComponent(tweetForwardPermalinkClick)
});
define("app/pages/streams/tweet_forward",["module","require","exports","app/boot/streams","app/ui/streams/stream_category_bar","app/ui/cookie_warning","core/component","app/ui/streams/tweet_forward_gifs","app/ui/macaw_nymizer_signin_conversion","app/ui/media/media_preview","app/data/media_thumbnails_scribe","app/ui/more_tweet_actions_dropdown","app/ui/navigation_links","app/ui/streams/element_scroll_affixer","app/ui/signin_focus","app/ui/tweet_actions","app/ui/streams/tweet_forward_permalink_click","app/boot/tweets","app/boot/profile_popup","core/utils","app/ui/gallery/with_adaptive_gallery","app/ui/gallery/with_gallery","app/ui/with_item_actions"],function(module, require, exports) {
var bootStreams=require("app/boot/streams"),CategoryBar=require("app/ui/streams/stream_category_bar"),CookieWarning=require("app/ui/cookie_warning"),defineComponent=require("core/component"),LOHPAnimatedGifs=require("app/ui/streams/tweet_forward_gifs"),MacawNymizerSigninConversion=require("app/ui/macaw_nymizer_signin_conversion"),MediaPreview=require("app/ui/media/media_preview"),MediaThumbnailsScribe=require("app/data/media_thumbnails_scribe"),MoreTweetActionsDropdown=require("app/ui/more_tweet_actions_dropdown"),NavigationLinks=require("app/ui/navigation_links"),ScrollAffixer=require("app/ui/streams/element_scroll_affixer"),SigninFocus=require("app/ui/signin_focus"),TweetActions=require("app/ui/tweet_actions"),TweetForwardPermalinkClick=require("app/ui/streams/tweet_forward_permalink_click"),tweetsBoot=require("app/boot/tweets"),bootProfilePopup=require("app/boot/profile_popup"),utils=require("core/utils"),withAdaptiveGallery=require("app/ui/gallery/with_adaptive_gallery"),withGallery=require("app/ui/gallery/with_gallery"),withItemActions=require("app/ui/with_item_actions"),AdaptiveGallery=defineComponent(withAdaptiveGallery),ItemActions=defineComponent(withItemActions);module.exports=function(a){var b=".AppContent",c="#timeline",d=$(".TweetForwardTimeline .InStreamSignup"),e=$('.TweetForwardTimeline .tweet[data-card2-type="animated_gif"]');bootStreams(a),tweetsBoot("#timeline",utils.merge(a,{excludeUserActions:!0,scrollTopOnNewItemsClick:!1,excludeExpandingTweets:!0,excludeConversations:!0})),bootProfilePopup({profileHoversEnabled:a.profileHoversEnabled,loggedIn:a.loggedIn}),SigninFocus.attachTo(document),CookieWarning.attachTo("#front-no-cookies-warn"),MacawNymizerSigninConversion.attachTo(".js-StreamsTopBarSignIn");var f;a.showSearchBox?f=$(".StreamsTopBar").offset().top:f=$(".StreamsCategoryBar").offset().top+$(".StreamsCategoryBar").outerHeight(),ScrollAffixer.attachTo(".StreamsTopBar",{scrollThreshold:f}),NavigationLinks.attachTo(".StreamsCategoryBar, .StreamsCategoryMoreOverlay",{eventData:{scribeContext:{component:"category_bar"}}}),NavigationLinks.attachTo(".TweetForwardTimeline",{eventData:{scribeContext:{component:"stream_label"}}});var g={itemType:"tweet",noTeardown:!0,loggedIn:a.loggedIn,eventData:{scribeContext:{component:"gallery"}}};TweetActions.attachTo(c,a,g),MoreTweetActionsDropdown.attachTo(".Gallery",a,g),MoreTweetActionsDropdown.attachTo(b,a),AdaptiveGallery.attachTo(b,utils.merge(a,{eventData:{scribeContext:{component:"tweet"}}})),ItemActions.attachTo(c,utils.merge(a,{itemType:"tweet"})),MediaPreview.attachTo(c,{tweetSelector:".tweet",mediaPreviewContainerSelector:".js-media-preview"}),MediaThumbnailsScribe.attachTo(document,a),LOHPAnimatedGifs.attachTo(".TweetForwardTimeline"),CategoryBar.attachTo(document);var h=$(".TweetForwardTimeline > .Grid-cell:nth-child(3) .tweet");h.length>2&&d.insertAfter(h[2]),TweetForwardPermalinkClick.attachTo(c)}
});