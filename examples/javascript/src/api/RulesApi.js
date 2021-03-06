/**
 * ESET Enterprise Inspector
 * ESET Enterprise Inspector REST API definition
 *
 * The version of the OpenAPI document: 1.6-oas3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuleCreateRequest from '../model/RuleCreateRequest';
import RuleCreateResponse from '../model/RuleCreateResponse';
import RuleDetailsResponse from '../model/RuleDetailsResponse';
import RuleListResponse from '../model/RuleListResponse';
import RuleUpdateRequest from '../model/RuleUpdateRequest';
import UnauthorizedError from '../model/UnauthorizedError';

/**
* Rules service.
* @module api/RulesApi
* @version 1.6-oas3
*/
export default class RulesApi {

    /**
    * Constructs a new RulesApi. 
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRule operation.
     * @callback module:api/RulesApi~createRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new rule
     * @param {module:model/RuleCreateRequest} ruleCreateRequest 
     * @param {module:api/RulesApi~createRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleCreateResponse}
     */
    createRule(ruleCreateRequest, callback) {
      let postBody = ruleCreateRequest;
      // verify the required parameter 'ruleCreateRequest' is set
      if (ruleCreateRequest === undefined || ruleCreateRequest === null) {
        throw new Error("Missing the required parameter 'ruleCreateRequest' when calling createRule");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/xml'];
      let accepts = ['application/json'];
      let returnType = RuleCreateResponse;
      return this.apiClient.callApi(
        '/api/v1/rules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRule operation.
     * @callback module:api/RulesApi~deleteRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a rule
     * @param {String} id ID or UUID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idType if $idType=uuid {id} in URL is interpreted as uuid
     * @param {module:api/RulesApi~deleteRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRule(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRule");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        '$idType': opts['idType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/rules/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editRule operation.
     * @callback module:api/RulesApi~editRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edits rule body
     * @param {String} id ID or UUID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idType if $idType=uuid {id} in URL is interpreted as uuid
     * @param {module:api/RulesApi~editRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleDetailsResponse}
     */
    editRule(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editRule");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        '$idType': opts['idType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleDetailsResponse;
      return this.apiClient.callApi(
        '/api/v1/rules/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRuleDetails operation.
     * @callback module:api/RulesApi~getRuleDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a single rule
     * @param {String} id ID or UUID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idType if $idType=uuid {id} in URL is interpreted as uuid
     * @param {module:api/RulesApi~getRuleDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleDetailsResponse}
     */
    getRuleDetails(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRuleDetails");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        '$idType': opts['idType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleDetailsResponse;
      return this.apiClient.callApi(
        '/api/v1/rules/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRules operation.
     * @callback module:api/RulesApi~listRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List rules
     * @param {Object} opts Optional parameters
     * @param {Number} opts.top system query option requests the number of items in the queried collection to be included in the result
     * @param {Number} opts.skip system query option requests the number of items in the queried collection that are to be skipped and not included in the result
     * @param {module:model/Number} opts.count system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned.
     * @param {String} opts.orderBy system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way
     * @param {String} opts.filter system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, ???resolved eq 0??? will report only unresolved detections.
     * @param {module:api/RulesApi~listRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleListResponse}
     */
    listRules(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$count': opts['count'],
        '$orderBy': opts['orderBy'],
        '$filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleListResponse;
      return this.apiClient.callApi(
        '/api/v1/rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRule operation.
     * @callback module:api/RulesApi~updateRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates particular rule
     * @param {String} id ID or UUID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idType if $idType=uuid {id} in URL is interpreted as uuid
     * @param {module:model/RuleUpdateRequest} opts.ruleUpdateRequest 
     * @param {module:api/RulesApi~updateRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateRule(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['ruleUpdateRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRule");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        '$idType': opts['idType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/rules/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
