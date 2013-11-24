ajaxLoad
========

A minilib for fetching the content of a URL using AJAX, without any external dependencies

Motivation
----------

I found myself often needing to do ajax calls, but not needing the full jQuery. This one-function lib is the result.

Example use

```javascript
ajax.load('http://some.url/api/data.json',
          function onOk(result) { console.log(result); },
          function onErr(statusCode) { console.log("Server error: "+statusCode); }); // Optional last argument
```


Original code from [this discussion](http://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery) at Stack Overflow.

