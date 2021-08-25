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
import DetectionListResponseValue from './DetectionListResponseValue';

/**
 * The DetectionListResponse model module.
 * @module model/DetectionListResponse
 * @version 1.6-oas3
 */
class DetectionListResponse {
    /**
     * Constructs a new <code>DetectionListResponse</code>.
     * @alias module:model/DetectionListResponse
     */
    constructor() { 
        
        DetectionListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DetectionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetectionListResponse} obj Optional instance to populate.
     * @return {module:model/DetectionListResponse} The populated <code>DetectionListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetectionListResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [DetectionListResponseValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
DetectionListResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/DetectionListResponseValue>} value
 */
DetectionListResponse.prototype['value'] = undefined;






export default DetectionListResponse;
