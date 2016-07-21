import request from 'superagent';
const appConfig  = require('../../../outCalls/config');

export function deleteDeployed(repoId) {
  let URL = `http://${appConfig.CLIENT_IP}:${appConfig.CLIENT_PORT}/api/githubdemomodel/${repoId}`;
  return new Promise((resolve, reject) => {
    request
      .delete(URL)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.text);
        }
      });
  });
}
