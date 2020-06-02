const nx = require('@feizheng/next-js-core2');
require('../src/next-random-id');

describe('api.basic test', () => {
  test('nx.randomId', function() {
    expect(typeof nx.randomId(20)).toBe('string');
    expect(nx.randomId(10).length).toBe(10);
    expect(nx.randomId(12).length).toBe(12);
    expect(nx.randomId(20).length).toBe(13);

    console.log('random 5:',nx.randomId(5));
    console.log('random 8:',nx.randomId(8));
    console.log('random 12:',nx.randomId(12));
    console.log('random 100:',nx.randomId(100));
  });
});
