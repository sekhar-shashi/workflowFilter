
const manifest = {
  connections: [
    {
      port: process.env.PORT || 8000,
      routes: {
        cors: {
            origin: ['*']
        },
        payload: {
          maxBytes: 1048576 * 5 // 5MB
        }
      }
    }],
  registrations: [
    { plugin: 'inert' }, { plugin: 'vision' }, {
      plugin: {
        $filter: 'env',
        $default: 'chairo',
        test: '../test/mocks/chairo.mock'
      }
    },
    {
      plugin: {
        register: 'good',
        options: {
          reporters: {
            $filter: 'env',
            $default: {
              devReporter: [
                {
                  module: 'good-squeeze',
                  name: 'Squeeze',
                  args: [{ log: '*', response: '*', request: '*', error: '*' }]
                },
                { module: 'good-console' },
                'stdout'
              ]
            },
            production: {
              prodReporter: [
                {
                  module: 'good-squeeze',
                  name: 'Squeeze',
                  args: [{ error: '*' }]
                },
                { module: 'good-console' },
                'stdout'
              ]
            },
            test: {
              prodReporter: [{ module: 'good-squeeze', name: 'Squeeze' }, { module: 'good-console' }, 'stdout']
            }
          }
        }
      }
    },
    {
      plugin:
    {register: 'hapi-swagger',
      options: {
        info: {
          title: 'Shashi Api Service',
          description: 'This service exposes functionality provided by the underlying microservices.',
          version: '1.0.0'
        }
      },
      securityDefinations: {}
    }
    }]
};

module.exports = manifest;
