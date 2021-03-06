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
import DetectionDetailsResponseDETECTION from './DetectionDetailsResponseDETECTION';

/**
 * The DetectionDetailsResponse model module.
 * @module model/DetectionDetailsResponse
 * @version 1.6-oas3
 */
class DetectionDetailsResponse {
    /**
     * Constructs a new <code>DetectionDetailsResponse</code>.
     * @alias module:model/DetectionDetailsResponse
     */
    constructor() { 
        
        DetectionDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DetectionDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetectionDetailsResponse} obj Optional instance to populate.
     * @return {module:model/DetectionDetailsResponse} The populated <code>DetectionDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetectionDetailsResponse();

            if (data.hasOwnProperty('DETECTION')) {
                obj['DETECTION'] = DetectionDetailsResponseDETECTION.constructFromObject(data['DETECTION']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DetectionDetailsResponseDETECTION} DETECTION
 */
DetectionDetailsResponse.prototype['DETECTION'] = undefined;






export default DetectionDetailsResponse;

