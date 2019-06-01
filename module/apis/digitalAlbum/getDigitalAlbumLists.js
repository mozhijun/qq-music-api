const y_common = require('../y_common');
module.exports = ({ method = 'get', params = {}, option = {} }) => {
  let options = Object.assign(option, { params, });
  return y_common({ url: '/v8/fcg-bin/musicmall.fcg', method, options, });
}