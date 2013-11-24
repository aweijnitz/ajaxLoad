/**
 * Ajax url download module.
 * Example use:
 *
 * ajax.load('http://some.url/api/data.json',
 *          function onOk(result) { console.log(result); },
 *          function onErr(statusCode) { console.log("Server error: "+statusCode); });
 *
 * The error callback is invoked on status 500 errors. Optional argument.
 */
(function () {

    // Module entrypoint
    ajax = function () {};


    ajax.prototype.load = function (url, callback, errCallback) {
        var xmlhttp;
        var errCB = null;

        if(typeof errCallback != 'undefined') errCB = errCallback;

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            } else if (xmlhttp.readyState == 4 && ((xmlhttp.status - 500) >= 0 && (xmlhttp.status - 500) < 100)
                && errCB) {
                errCB(xmlhttp.status);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

}());
