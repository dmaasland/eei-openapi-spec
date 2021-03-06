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
    instance = new EsetEnterpriseInspector.DetectionDetailsResponse();
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

  describe('DetectionDetailsResponse', function() {
    it('should create an instance of DetectionDetailsResponse', function() {
      // uncomment below and update the code to test DetectionDetailsResponse
      //var instane = new EsetEnterpriseInspector.DetectionDetailsResponse();
      //expect(instance).to.be.a(EsetEnterpriseInspector.DetectionDetailsResponse);
    });

    it('should have the property DETECTION (base name: "DETECTION")', function() {
      // uncomment below and update the code to test the property DETECTION
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
