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
 * The RuleDetailsResponseRULE model module.
 * @module model/RuleDetailsResponseRULE
 * @version 1.6-oas3
 */
class RuleDetailsResponseRULE {
    /**
     * Constructs a new <code>RuleDetailsResponseRULE</code>.
     * @alias module:model/RuleDetailsResponseRULE
     */
    constructor() { 
        
        RuleDetailsResponseRULE.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleDetailsResponseRULE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDetailsResponseRULE} obj Optional instance to populate.
     * @return {module:model/RuleDetailsResponseRULE} The populated <code>RuleDetailsResponseRULE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDetailsResponseRULE();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'Number');
            }
            if (data.hasOwnProperty('severityScore')) {
                obj['severityScore'] = ApiClient.convertToType(data['severityScore'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
RuleDetailsResponseRULE.prototype['body'] = undefined;

/**
 * @member {Boolean} enabled
 */
RuleDetailsResponseRULE.prototype['enabled'] = undefined;

/**
 * @member {Number} id
 */
RuleDetailsResponseRULE.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RuleDetailsResponseRULE.prototype['name'] = undefined;

/**
 * @member {module:model/RuleDetailsResponseRULE.SeverityEnum} severity
 */
RuleDetailsResponseRULE.prototype['severity'] = undefined;

/**
 * @member {Number} severityScore
 */
RuleDetailsResponseRULE.prototype['severityScore'] = undefined;

/**
 * @member {String} uuid
 */
RuleDetailsResponseRULE.prototype['uuid'] = undefined;





/**
 * Allowed values for the <code>severity</code> property.
 * @enum {Number}
 * @readonly
 */
RuleDetailsResponseRULE['SeverityEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3
};



export default RuleDetailsResponseRULE;

