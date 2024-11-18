import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: 'consumer',
  remotes: [
    {
      name: 'remote',
      entry: 'https://google.com',
      type: 'module',
    },
  ],
});

loadRemote('remote').catch(() => console.log('Remote loading failed'));
