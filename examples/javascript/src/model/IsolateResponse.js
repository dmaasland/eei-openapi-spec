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

import ApiClient from '../ApiClient';

/**
 * The IsolateResponse model module.
 * @module model/IsolateResponse
 * @version 1.6-oas3
 */
class IsolateResponse {
    /**
     * Constructs a new <code>IsolateResponse</code>.
     * @alias module:model/IsolateResponse
     */
    constructor() { 
        
        IsolateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IsolateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsolateResponse} obj Optional instance to populate.
     * @return {module:model/IsolateResponse} The populated <code>IsolateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsolateResponse();

            if (data.hasOwnProperty('taskUuid')) {
                obj['taskUuid'] = ApiClient.convertToType(data['taskUuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} taskUuid
 */
IsolateResponse.prototype['taskUuid'] = undefined;






export default IsolateResponse;
