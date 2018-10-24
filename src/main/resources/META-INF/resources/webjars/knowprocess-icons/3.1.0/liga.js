/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'new-tab': '&#xea7e;',
            'out2': '&#xea7e;',
            'link': '&#xe9cb;',
            'chain': '&#xe9cb;',
            'qrcode': '&#xe938;',
            'barcode': '&#xe937;',
            'clock': '&#xe94e;',
            'time2': '&#xe94e;',
            'share': '&#xea7d;',
            'out': '&#xea7d;',
            'eye': '&#xe9ce;',
            'views': '&#xe9ce;',
            'eye-blocked': '&#xe9d1;',
            'views4': '&#xe9d1;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'compass': '&#xe949;',
            'direction': '&#xe949;',
            'compass2': '&#xe94a;',
            'direction2': '&#xe94a;',
            'map': '&#xe94b;',
            'guide': '&#xe94b;',
            'map2': '&#xe94c;',
            'guide2': '&#xe94c;',
            'target': '&#xe9b3;',
            'goal': '&#xe9b3;',
            'bullhorn': '&#xe91a;',
            'megaphone': '&#xe91a;',
            'folder-plus': '&#xe931;',
            'directory3': '&#xe931;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'play3': '&#xea1c;',
            'player8': '&#xea1c;',
            'pause2': '&#xea1d;',
            'player9': '&#xea1d;',
            'stop2': '&#xea1e;',
            'player10': '&#xea1e;',
            'backward2': '&#xea1f;',
            'player11': '&#xea1f;',
            'forward3': '&#xea20;',
            'player12': '&#xea20;',
            'first': '&#xea21;',
            'player13': '&#xea21;',
            'last': '&#xea22;',
            'player14': '&#xea22;',
            'previous2': '&#xea23;',
            'player15': '&#xea23;',
            'next2': '&#xea24;',
            'player16': '&#xea24;',
            'eject': '&#xea25;',
            'player17': '&#xea25;',
            'attachment': '&#xe9cd;',
            'paperclip': '&#xe9cd;',
            'bubble': '&#xe96b;',
            'comment': '&#xe96b;',
            'bubbles': '&#xe96c;',
            'comments': '&#xe96c;',
            'bubbles2': '&#xe96d;',
            'comments2': '&#xe96d;',
            'bubble2': '&#xe96e;',
            'comment2': '&#xe96e;',
            'bubbles3': '&#xe96f;',
            'comments3': '&#xe96f;',
            'pencil': '&#xe914;',
            'write': '&#xe914;',
            'credit-card': '&#xe93f;',
            'money5': '&#xe93f;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'wrench': '&#xe991;',
            'tool': '&#xe991;',
            'file-text': '&#xe922;',
            'file': '&#xe922;',
            'file-empty': '&#xe924;',
            'file3': '&#xe924;',
            'files-empty': '&#xe925;',
            'files': '&#xe925;',
            'file-text2': '&#xe927;',
            'file4': '&#xe927;',
            'file-picture': '&#xe928;',
            'file5': '&#xe928;',
            'file-music': '&#xe929;',
            'file6': '&#xe929;',
            'file-play': '&#xe92a;',
            'file7': '&#xe92a;',
            'file-video': '&#xe92b;',
            'file8': '&#xe92b;',
            'copy': '&#xe92c;',
            'duplicate': '&#xe92c;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'equalizer2': '&#xe993;',
            'sliders2': '&#xe993;',
            'meter': '&#xe9a6;',
            'gauge': '&#xe9a6;',
            'meter2': '&#xe9a7;',
            'gauge2': '&#xe9a7;',
            'flag': '&#xe9cc;',
            'report': '&#xe9cc;',
            'spinner11': '&#xe984;',
            'loading12': '&#xe984;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
            'loop2': '&#xea2e;',
            'repeat2': '&#xea2e;',
            'file-zip': '&#xe92d;',
            'file9': '&#xe92d;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/kp-icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
