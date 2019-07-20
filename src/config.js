
let _url = null;
if (typeof ENV == 'undefined') {
  _url = 'http://localhost:8080';
} else {
  _url = 'https://ssl-mam-23701.apps.us-west-2.online-starter.openshift.com/people';
};

export const URL = _url;
