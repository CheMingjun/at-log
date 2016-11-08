/*!
 * 
 * Author: CheMingjun
 */
'use strict';

module.exports = function (_cfg) {
    _cfg = _cfg || {
            name: 'at-log',
            appender: {type: 'console'}
        }

    var lg = require('log4js');
    lg.configure({
        appenders: _cfg.appenders
    });
    var logger = lg.getLogger(_cfg.name);
    logger.info('log4js is running...');

    module.exports.logger = logger;

    require('at-js').defAnnotation('logger', {
        scope: 'var', build: function () {
            return "return require('at-log').logger;"
        }
    })
}