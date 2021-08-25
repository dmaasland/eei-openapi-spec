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
import RuleCreateRequestDefinitionOperationsOperation from './RuleCreateRequestDefinitionOperationsOperation';

/**
 * The RuleCreateRequestDefinitionOperations model module.
 * @module model/RuleCreateRequestDefinitionOperations
 * @version 1.6-oas3
 */
class RuleCreateRequestDefinitionOperations {
    /**
     * Constructs a new <code>RuleCreateRequestDefinitionOperations</code>.
     * @alias module:model/RuleCreateRequestDefinitionOperations
     */
    constructor() { 
        
        RuleCreateRequestDefinitionOperations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleCreateRequestDefinitionOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleCreateRequestDefinitionOperations} obj Optional instance to populate.
     * @return {module:model/RuleCreateRequestDefinitionOperations} The populated <code>RuleCreateRequestDefinitionOperations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleCreateRequestDefinitionOperations();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = RuleCreateRequestDefinitionOperationsOperation.constructFromObject(data['operation']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RuleCreateRequestDefinitionOperationsOperation} operation
 */
RuleCreateRequestDefinitionOperations.prototype['operation'] = undefined;






export default RuleCreateRequestDefinitionOperations;
