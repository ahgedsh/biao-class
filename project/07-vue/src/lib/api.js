
import axios from 'axios';


const APP_KEY  = 'b5d1fff7ca8bc3eeff7917d364a1b8d493c8f07b5e62e1c89a432dae3fe16969';
const BASE_API = 'http://mock.biaoyansu.com/api/';

function sign (app_key, timestamp) {
  return btoa(app_key + timestamp);
}

 export default function api (url, params) {
  let timestamp = (new Date).getTime();
  let signature = sign(APP_KEY, timestamp);

  let opt = {
    headers : {
      'biao-mock-app-key'   : APP_KEY,
      'biao-mock-timestamp' : timestamp,
      'biao-mock-signature' : signature,
    },
  };

  url = BASE_API + url;
  return axios
    .post(url, params, opt)
    .then(r => {
      return r.data;
    });
};

