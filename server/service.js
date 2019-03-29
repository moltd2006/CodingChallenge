import axios from 'axios'

export default {
  get(url, params) {
    return axios
    .get(url)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err;
    });
  }
}