# Documentation for ESET Enterprise Inspector

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://eei.example.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**authenticatePost**](Apis/AuthenticationApi.md#authenticatepost) | **POST** /api/v1/authenticate | Authentication
*AuthenticationApi* | [**authenticatePut**](Apis/AuthenticationApi.md#authenticateput) | **PUT** /api/v1/authenticate | Authentication
*ComputersApi* | [**integrateComputer**](Apis/ComputersApi.md#integratecomputer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
*ComputersApi* | [**isolateComputer**](Apis/ComputersApi.md#isolatecomputer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network
*DetectionsApi* | [**getDetectionDetails**](Apis/DetectionsApi.md#getdetectiondetails) | **GET** /api/v1/detections/{id} | Get detection details
*DetectionsApi* | [**listDetections**](Apis/DetectionsApi.md#listdetections) | **GET** /api/v1/detections | List of detections
*DetectionsApi* | [**updateDetection**](Apis/DetectionsApi.md#updatedetection) | **PATCH** /api/v1/detections/{id} | Update detection
*ExclusionsApi* | [**createExclusion**](Apis/ExclusionsApi.md#createexclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
*ExclusionsApi* | [**deleteExclusion**](Apis/ExclusionsApi.md#deleteexclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
*ExclusionsApi* | [**editExclusion**](Apis/ExclusionsApi.md#editexclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
*ExclusionsApi* | [**getExclusionDetails**](Apis/ExclusionsApi.md#getexclusiondetails) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
*ExclusionsApi* | [**getExclusionsByRule**](Apis/ExclusionsApi.md#getexclusionsbyrule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
*ExclusionsApi* | [**listExclusions**](Apis/ExclusionsApi.md#listexclusions) | **GET** /api/v1/exclusions | List exclusions
*RemediationApi* | [**blockExecutable**](Apis/RemediationApi.md#blockexecutable) | **POST** /api/v1/executables/{id}/block | Block an executable
*RemediationApi* | [**unblockExecutable**](Apis/RemediationApi.md#unblockexecutable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable
*RulesApi* | [**createRule**](Apis/RulesApi.md#createrule) | **POST** /api/v1/rules | Creates a new rule
*RulesApi* | [**deleteRule**](Apis/RulesApi.md#deleterule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
*RulesApi* | [**editRule**](Apis/RulesApi.md#editrule) | **PUT** /api/v1/rules/{id} | Edits rule body
*RulesApi* | [**getRuleDetails**](Apis/RulesApi.md#getruledetails) | **GET** /api/v1/rules/{id} | Gets a single rule
*RulesApi* | [**listRules**](Apis/RulesApi.md#listrules) | **GET** /api/v1/rules | List rules
*RulesApi* | [**updateRule**](Apis/RulesApi.md#updaterule) | **PATCH** /api/v1/rules/{id} | Updates particular rule


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AuthenticateRequest](./Models/AuthenticateRequest.md)
 - [DetectionDetailsResponse](./Models/DetectionDetailsResponse.md)
 - [DetectionDetailsResponseDETECTION](./Models/DetectionDetailsResponseDETECTION.md)
 - [DetectionListResponse](./Models/DetectionListResponse.md)
 - [DetectionListResponseValue](./Models/DetectionListResponseValue.md)
 - [DetectionUpdateRequest](./Models/DetectionUpdateRequest.md)
 - [ExclusionCreateRequest](./Models/ExclusionCreateRequest.md)
 - [ExclusionDetailsResponse](./Models/ExclusionDetailsResponse.md)
 - [ExclusionDetailsResponseEXCLUSION](./Models/ExclusionDetailsResponseEXCLUSION.md)
 - [ExclusionListResponse](./Models/ExclusionListResponse.md)
 - [ExclusionListResponseValue](./Models/ExclusionListResponseValue.md)
 - [ExecutableBlockRequest](./Models/ExecutableBlockRequest.md)
 - [ExecutableUnblockRequest](./Models/ExecutableUnblockRequest.md)
 - [IsolateResponse](./Models/IsolateResponse.md)
 - [RuleCreateRequest](./Models/RuleCreateRequest.md)
 - [RuleCreateRequestActions](./Models/RuleCreateRequestActions.md)
 - [RuleCreateRequestActionsAction](./Models/RuleCreateRequestActionsAction.md)
 - [RuleCreateRequestDefinition](./Models/RuleCreateRequestDefinition.md)
 - [RuleCreateRequestDefinitionAncestor](./Models/RuleCreateRequestDefinitionAncestor.md)
 - [RuleCreateRequestDefinitionOperations](./Models/RuleCreateRequestDefinitionOperations.md)
 - [RuleCreateRequestDefinitionOperationsOperation](./Models/RuleCreateRequestDefinitionOperationsOperation.md)
 - [RuleCreateRequestDescription](./Models/RuleCreateRequestDescription.md)
 - [RuleCreateResponse](./Models/RuleCreateResponse.md)
 - [RuleDetailsResponse](./Models/RuleDetailsResponse.md)
 - [RuleDetailsResponseRULE](./Models/RuleDetailsResponseRULE.md)
 - [RuleListResponse](./Models/RuleListResponse.md)
 - [RuleListResponseValue](./Models/RuleListResponseValue.md)
 - [RuleUpdateRequest](./Models/RuleUpdateRequest.md)
 - [UnauthorizedError](./Models/UnauthorizedError.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

