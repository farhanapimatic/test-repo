/**
  * @module SwaggerPetstoreLib
  *
  * This is a sample server Petstore server.  You can find out more about Swagger at [http:
  * //swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
  * For this sample, you can use the api key `special-key` to test the authorization filters.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const PetController = require('./Controllers/PetController');
const StoreController = require('./Controllers/StoreController');
const UserController = require('./Controllers/UserController');
const Order = require('./Models/Order');
const User = require('./Models/User');
const Category = require('./Models/Category');
const Tag = require('./Models/Tag');
const Pet = require('./Models/Pet');
const ApiResponse = require('./Models/ApiResponse');
const StatusEnum = require('./Models/StatusEnum');
const Status1Enum = require('./Models/Status1Enum');
const Status2Enum = require('./Models/Status2Enum');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SwaggerPetstoreLib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of SwaggerPetstoreLib
    PetController,
    StoreController,
    UserController,
    // models of SwaggerPetstoreLib
    Order,
    User,
    Category,
    Tag,
    Pet,
    ApiResponse,
    StatusEnum,
    Status1Enum,
    Status2Enum,
    OAuthScopeEnum,
    // exceptions of SwaggerPetstoreLib
    APIException,
};

module.exports = initializer;
