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
import ExclusionListResponseValue from './ExclusionListResponseValue';

/**
 * The ExclusionListResponse model module.
 * @module model/ExclusionListResponse
 * @version 1.6-oas3
 */
class ExclusionListResponse {
    /**
     * Constructs a new <code>ExclusionListResponse</code>.
     * @alias module:model/ExclusionListResponse
     */
    constructor() { 
        
        ExclusionListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExclusionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExclusionListResponse} obj Optional instance to populate.
     * @return {module:model/ExclusionListResponse} The populated <code>ExclusionListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExclusionListResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [ExclusionListResponseValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
ExclusionListResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/ExclusionListResponseValue>} value
 */
ExclusionListResponse.prototype['value'] = undefined;






export default ExclusionListResponse;

