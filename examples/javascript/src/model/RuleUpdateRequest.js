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
 * The RuleUpdateRequest model module.
 * @module model/RuleUpdateRequest
 * @version 1.6-oas3
 */
class RuleUpdateRequest {
    /**
     * Constructs a new <code>RuleUpdateRequest</code>.
     * @alias module:model/RuleUpdateRequest
     * @param enabled {Boolean} 
     */
    constructor(enabled) { 
        
        RuleUpdateRequest.initialize(this, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled) { 
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>RuleUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleUpdateRequest} obj Optional instance to populate.
     * @return {module:model/RuleUpdateRequest} The populated <code>RuleUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleUpdateRequest();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
RuleUpdateRequest.prototype['enabled'] = undefined;






export default RuleUpdateRequest;

