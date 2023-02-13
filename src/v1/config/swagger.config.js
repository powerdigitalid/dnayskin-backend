const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'DnaySkin API',
    version: '1.0.0',
    description: 'DnaySkin API built with Node.js, Express, and MongoDB.',
    contact: {
      name: 'Power Digital Technology',
      url: 'https://powerdigital.id',
    }
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/v1/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register new user',
        description: 'Register new user',
        operationId: 'register',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    example: 'foo',
                  },
                  password: {
                    type: 'string',
                    example: 'password123',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Register new user',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'User created successfully!',
                    },
                    data: {
                      type: 'object',
                    }
                  },
                },
              },
            },
          },
          500: {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Some error occurred while creating the User.',
                    },
                  },
                },
              },
            },
          },
        },
      }
    },
    '/api/v1/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login user',
        description: 'Login user',
        operationId: 'login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    example: 'foo',
                  },
                  password: {
                    type: 'string',
                    example: 'password123',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Login user',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Login successfully!',
                    },
                    data: {
                      type: 'object',
                      properties: {
                        username: {
                          type: 'string',
                          example: 'foo',
                        },
                      },
                    },
                    token: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Wrong password',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Wrong password!',
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'User not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'User not found with username foo',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
const options = {
  swaggerDefinition,
  apis: ['./src/v1/routes/*.route.js'],
};

exports.swaggerSpec = swaggerJSDoc(options);