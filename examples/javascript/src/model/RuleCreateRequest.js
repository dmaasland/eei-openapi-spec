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
import RuleCreateRequestActions from './RuleCreateRequestActions';
import RuleCreateRequestDefinition from './RuleCreateRequestDefinition';
import RuleCreateRequestDescription from './RuleCreateRequestDescription';

/**
 * The RuleCreateRequest model module.
 * @module model/RuleCreateRequest
 * @version 1.6-oas3
 */
class RuleCreateRequest {
    /**
     * Constructs a new <code>RuleCreateRequest</code>.
     * @alias module:model/RuleCreateRequest
     */
    constructor() { 
        
        RuleCreateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleCreateRequest} obj Optional instance to populate.
     * @return {module:model/RuleCreateRequest} The populated <code>RuleCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleCreateRequest();

            if (data.hasOwnProperty('definition')) {
                obj['definition'] = RuleCreateRequestDefinition.constructFromObject(data['definition']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = RuleCreateRequestDescription.constructFromObject(data['description']);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = RuleCreateRequestActions.constructFromObject(data['actions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RuleCreateRequestDefinition} definition
 */
RuleCreateRequest.prototype['definition'] = undefined;

/**
 * @member {module:model/RuleCreateRequestDescription} description
 */
RuleCreateRequest.prototype['description'] = undefined;

/**
 * @member {module:model/RuleCreateRequestActions} actions
 */
RuleCreateRequest.prototype['actions'] = undefined;






export default RuleCreateRequest;
