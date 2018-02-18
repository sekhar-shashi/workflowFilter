const { filterHandler } = require('../handlers/filterHandler');
const { filterJsonValidator } = require('../validation/index');

// failAction: function (request, reply, source, error) {
//   error.output.payload.message = 'custom';
//   return reply(error).code(400);
// }
module.exports = [
  {
    method: 'POST',
    path: '/',
    handler: filterHandler,
    config: {
      validate: {
        payload: filterJsonValidator
        },
      description: 'Tries to filter Input Json Based on Workflow completed and type as htv',
      notes: 'Returns an array of possible matches',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            '500': {
              description: 'BadImplementation'
            },
            '401': {
              description: 'Unauthorized'
            },
            '400': {
              description: 'BadRequest'
            },
            '200':
            {
              description: 'OK',
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean',
                    description: 'Whether the application record was created or not'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply().redirect('/documentation#').permanent().rewritable();  
    }
  }
];