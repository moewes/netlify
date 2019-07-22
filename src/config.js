
let _url = null;
if (typeof ENV == 'undefined') {
  _url = 'http://localhost:8080';
} else {
  _url = ENV;
};

export const URL = _url;
