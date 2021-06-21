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
    instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
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

  describe('DetectionDetailsResponseDETECTION', function() {
    it('should create an instance of DetectionDetailsResponseDETECTION', function() {
      // uncomment below and update the code to test DetectionDetailsResponseDETECTION
      //var instane = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be.a(EsetEnterpriseInspector.DetectionDetailsResponseDETECTION);
    });

    it('should have the property computerId (base name: "computerId")', function() {
      // uncomment below and update the code to test the property computerId
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property computerName (base name: "computerName")', function() {
      // uncomment below and update the code to test the property computerName
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property computerUuid (base name: "computerUuid")', function() {
      // uncomment below and update the code to test the property computerUuid
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property creationTime (base name: "creationTime")', function() {
      // uncomment below and update the code to test the property creationTime
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property handled (base name: "handled")', function() {
      // uncomment below and update the code to test the property handled
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleFirstSeenLocally (base name: "moduleFirstSeenLocally")', function() {
      // uncomment below and update the code to test the property moduleFirstSeenLocally
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleId (base name: "moduleId")', function() {
      // uncomment below and update the code to test the property moduleId
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleLastExecutedLocally (base name: "moduleLastExecutedLocally")', function() {
      // uncomment below and update the code to test the property moduleLastExecutedLocally
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleLgAge (base name: "moduleLgAge")', function() {
      // uncomment below and update the code to test the property moduleLgAge
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleLgPopularity (base name: "moduleLgPopularity")', function() {
      // uncomment below and update the code to test the property moduleLgPopularity
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleLgReputation (base name: "moduleLgReputation")', function() {
      // uncomment below and update the code to test the property moduleLgReputation
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleName (base name: "moduleName")', function() {
      // uncomment below and update the code to test the property moduleName
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleSha1 (base name: "moduleSha1")', function() {
      // uncomment below and update the code to test the property moduleSha1
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleSignatureType (base name: "moduleSignatureType")', function() {
      // uncomment below and update the code to test the property moduleSignatureType
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property moduleSigner (base name: "moduleSigner")', function() {
      // uncomment below and update the code to test the property moduleSigner
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property processCommandLine (base name: "processCommandLine")', function() {
      // uncomment below and update the code to test the property processCommandLine
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property processId (base name: "processId")', function() {
      // uncomment below and update the code to test the property processId
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property processPath (base name: "processPath")', function() {
      // uncomment below and update the code to test the property processPath
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property processUser (base name: "processUser")', function() {
      // uncomment below and update the code to test the property processUser
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property resolved (base name: "resolved")', function() {
      // uncomment below and update the code to test the property resolved
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property ruleName (base name: "ruleName")', function() {
      // uncomment below and update the code to test the property ruleName
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property ruleUuid (base name: "ruleUuid")', function() {
      // uncomment below and update the code to test the property ruleUuid
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property severityScore (base name: "severityScore")', function() {
      // uncomment below and update the code to test the property severityScore
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property threatName (base name: "threatName")', function() {
      // uncomment below and update the code to test the property threatName
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property threatUri (base name: "threatUri")', function() {
      // uncomment below and update the code to test the property threatUri
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new EsetEnterpriseInspector.DetectionDetailsResponseDETECTION();
      //expect(instance).to.be();
    });

  });

}));
