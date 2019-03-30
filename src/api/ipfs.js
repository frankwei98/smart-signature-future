import axios from 'axios';
import qs from 'qs';
import { apiServer } from './backend.js';


function sendPost({
  title, author, desc, content,
}) {
  const url = `${apiServer}/ipfs/addJSON`;

  const stringifyData = qs.stringify({
    'data[title]': title,
    'data[author]': author,
    'data[desc]': desc,
    'data[content]': content,
  });
  return axios({
    method: 'post',
    url,
    data: stringifyData,
    config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  });
}

// eslint-disable-next-line import/prefer-default-export
export { sendPost };
