
let _url = ENV;
if (typeof ENV == 'undefined' && _url == 'undefined') {
  _url = 'http://localhost:8080';
} else {
  _url = ENV;
};

export const URL = _url;
