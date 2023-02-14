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
    '/api/v1/banner/all': {
      get: {
        tags: ['Banner'],
        summary: 'Show all banners',
        description: 'Show all banners',
        operationId: 'createBanner',
        responses: {
          200: {
            description: 'Show all banners',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Banner fetched successfully!',
                    },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                            example: '5f9f5b9b0b9b9b0b9b0b9b0b',
                          },
                          image_path: {
                            type: 'string',
                            example: 'https://dnayskin.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-19-at-10.02.05-AM.jpeg',
                          },
                          createdAt: {
                            type: 'string',
                            example: '2020-10-27T09:00:43.000Z',
                          },
                          updatedAt: {
                            type: 'string',
                            example: '2020-10-27T09:00:43.000Z',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Banner not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'No Banner found!',
                    },
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
                      example: 'Some error occurred while fetching the Banner.',
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