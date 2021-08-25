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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EsetEnterpriseInspector);
  }
}(this, function(expect, EsetEnterpriseInspector) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EsetEnterpriseInspector.DetectionUpdateRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DetectionUpdateRequest', function() {
    it('should create an instance of DetectionUpdateRequest', function() {
      // uncomment below and update the code to test DetectionUpdateRequest
      //var instane = new EsetEnterpriseInspector.DetectionUpdateRequest();
      //expect(instance).to.be.a(EsetEnterpriseInspector.DetectionUpdateRequest);
    });

    it('should have the property resolved (base name: "resolved")', function() {
      // uncomment below and update the code to test the property resolved
      //var instance = new EsetEnterpriseInspector.DetectionUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new EsetEnterpriseInspector.DetectionUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new EsetEnterpriseInspector.DetectionUpdateRequest();
      //expect(instance).to.be();
    });

  });

}));