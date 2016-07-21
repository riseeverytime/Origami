import request from 'superagent';
const appConfig  = require('../../../outCalls/config');

export function modifyDeployed(repoData) {
  let URL = `http://${appConfig.CLIENT_IP}:${appConfig.CLIENT_PORT}/api/githubdemomodel/${repoData.id}`;
  return new Promise((resolve, reject) => {
    request
      .put(URL)
      .send(repoData)
      .set('Content-Type', 'application/json')
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
