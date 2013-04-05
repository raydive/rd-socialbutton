/**
 * rd-socialbutton
 *
 * Date: 2013/04/05
 * Time: 11:17
 *
 */

'use strict';

/**
 * jquery.colorbox.jsのAngularJSラッパー
 *
 * TODO: 属性指定で値の設定をできるようにすること
 */
angular.module('socialbutton', []).
    directive('twitterbutton', [function() {
        // Tweetボタン
        return {
            element : 'AC',
            link : function(scope, element, attrs) {
                $(element).socialbutton('twitter', { button : 'horizontal' });
            }
        };
    }]).
    directive('facebookLike', [function() {
        // facebook Like
        return {
            element : 'AC',
            link : function(scope, element, attrs) {
                $(element).socialbutton('facebook_like', { button : 'button_count'});
            }
        };
    }]).
    directive('googleplusOne', [function() {
        return {
            element: 'AC',
            link: function(scope, element, attrs) {
                $(element).socialbutton('google_plusone');
            }
        };
    }]).
    directive('hatena', [function() {
        return {
            element: 'AC',
            link: function(scope, element, attrs) {
                $(element).socialbutton('hatena');
            }
        };
    }]);
