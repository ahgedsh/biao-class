
import axios from 'axios';


const APP_KEY  = 'dc6309d541393705674aa31b1844dd14fd50672695ed4836602c3f75a98da89d';
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

