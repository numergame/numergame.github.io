function initI18n(folder, callback) {
	'use strict';
	var i18n = $.i18n();

    if (i18n.locale === 'ru-RU' || i18n.locale === 'ru') {
        i18n.locale = 'ru';
    } else {
        i18n.locale = 'en';
    }
	i18n.load(folder + i18n.locale + '.json', i18n.locale).done(function() {
        $('head').i18n();
        $('body').i18n();
        callback();
    });
}
// Enable debug
// $.i18n.debug = true;