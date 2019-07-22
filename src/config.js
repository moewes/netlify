
let _url = 'x';
if (typeof ENV == 'undefined' && _url == 'x') {
  _url = 'http://localhost:8080';
} else {
  _url = ENV;
};

export const URL = _url;
