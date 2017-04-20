import axios from 'axios';
import Mock from 'mockjs';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

const articleList = {
  'data|20': [{
    id: '@id',
    title: '@ctitle(10, 20)',
    author: '@cname',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
}
const data = JSON.stringify(Mock.mock(articleList))
mock.onGet('/article/list').reply(200, data);
export default mock;