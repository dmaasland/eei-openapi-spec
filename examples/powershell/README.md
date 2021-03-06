# PSOpenAPITools - the PowerShell module for the ESET Enterprise Inspector

ESET Enterprise Inspector REST API definition

This PowerShell module is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.6-oas3
- SDK version: 0.1.2
- Build package: org.openapitools.codegen.languages.PowerShellClientCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- PowerShell 6.2 or later

<a name="dependencies"></a>
## Dependencies

<a name="installation"></a>
## Installation


To install from the source, run the following command to build and install the PowerShell module locally:
```powershell
Build.ps1
Import-Module -Name '.\src\PSOpenAPITools' -Verbose
```

To avoid function name collision, one can use `-Prefix`, e.g. `Import-Module -Name '.\src\PSOpenAPITools' -Prefix prefix`

To uninstall the module, simply run:
```powershell
Remove-Module -FullyQualifiedName @{ModuleName = "PSOpenAPITools"; ModuleVersion = "0.1.2"}
```

<a name="tests"></a>
## Tests

To install and run `Pester`, please execute the following commands in the terminal:

```powershell
Install-module -name Pester -force

Invoke-Pester
```

For troubleshooting, please run `$DebugPreference = 'Continue'` to turn on debugging and disable it with `$DebugPreference = 'SilentlyContinue'` when done with the troubleshooting.

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**Invoke-AuthenticatePost**](docs/AuthenticationApi.md#Invoke-AuthenticatePost) | **POST** /api/v1/authenticate | Authentication
*AuthenticationApi* | [**Invoke-AuthenticatePut**](docs/AuthenticationApi.md#Invoke-AuthenticatePut) | **PUT** /api/v1/authenticate | Authentication
*ComputersApi* | [**ConvertTo-tegrateComputer**](docs/ComputersApi.md#ConvertTo-tegrateComputer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
*ComputersApi* | [**Invoke-IsolateComputer**](docs/ComputersApi.md#Invoke-IsolateComputer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network
*DetectionsApi* | [**Get-DetectionDetails**](docs/DetectionsApi.md#Get-DetectionDetails) | **GET** /api/v1/detections/{id} | Get detection details
*DetectionsApi* | [**Invoke-ListDetections**](docs/DetectionsApi.md#Invoke-ListDetections) | **GET** /api/v1/detections | List of detections
*DetectionsApi* | [**Update-Detection**](docs/DetectionsApi.md#Update-Detection) | **PATCH** /api/v1/detections/{id} | Update detection
*ExclusionsApi* | [**New-Exclusion**](docs/ExclusionsApi.md#New-Exclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
*ExclusionsApi* | [**Invoke-DeleteExclusion**](docs/ExclusionsApi.md#Invoke-DeleteExclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
*ExclusionsApi* | [**Edit-Exclusion**](docs/ExclusionsApi.md#Edit-Exclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
*ExclusionsApi* | [**Get-ExclusionDetails**](docs/ExclusionsApi.md#Get-ExclusionDetails) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
*ExclusionsApi* | [**Get-ExclusionsByRule**](docs/ExclusionsApi.md#Get-ExclusionsByRule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
*ExclusionsApi* | [**Invoke-ListExclusions**](docs/ExclusionsApi.md#Invoke-ListExclusions) | **GET** /api/v1/exclusions | List exclusions
*RemediationApi* | [**Block-Executable**](docs/RemediationApi.md#Block-Executable) | **POST** /api/v1/executables/{id}/block | Block an executable
*RemediationApi* | [**Unblock-Executable**](docs/RemediationApi.md#Unblock-Executable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable
*RulesApi* | [**New-Rule**](docs/RulesApi.md#New-Rule) | **POST** /api/v1/rules | Creates a new rule
*RulesApi* | [**Invoke-DeleteRule**](docs/RulesApi.md#Invoke-DeleteRule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
*RulesApi* | [**Edit-Rule**](docs/RulesApi.md#Edit-Rule) | **PUT** /api/v1/rules/{id} | Edits rule body
*RulesApi* | [**Get-RuleDetails**](docs/RulesApi.md#Get-RuleDetails) | **GET** /api/v1/rules/{id} | Gets a single rule
*RulesApi* | [**Invoke-ListRules**](docs/RulesApi.md#Invoke-ListRules) | **GET** /api/v1/rules | List rules
*RulesApi* | [**Update-Rule**](docs/RulesApi.md#Update-Rule) | **PATCH** /api/v1/rules/{id} | Updates particular rule


## Documentation for Models

 - [PSOpenAPITools/Model.AuthenticateRequest](docs/AuthenticateRequest.md)
 - [PSOpenAPITools/Model.DetectionDetailsResponse](docs/DetectionDetailsResponse.md)
 - [PSOpenAPITools/Model.DetectionDetailsResponseDETECTION](docs/DetectionDetailsResponseDETECTION.md)
 - [PSOpenAPITools/Model.DetectionListResponse](docs/DetectionListResponse.md)
 - [PSOpenAPITools/Model.DetectionListResponseValue](docs/DetectionListResponseValue.md)
 - [PSOpenAPITools/Model.DetectionUpdateRequest](docs/DetectionUpdateRequest.md)
 - [PSOpenAPITools/Model.ExclusionCreateRequest](docs/ExclusionCreateRequest.md)
 - [PSOpenAPITools/Model.ExclusionDetailsResponse](docs/ExclusionDetailsResponse.md)
 - [PSOpenAPITools/Model.ExclusionDetailsResponseEXCLUSION](docs/ExclusionDetailsResponseEXCLUSION.md)
 - [PSOpenAPITools/Model.ExclusionListResponse](docs/ExclusionListResponse.md)
 - [PSOpenAPITools/Model.ExclusionListResponseValue](docs/ExclusionListResponseValue.md)
 - [PSOpenAPITools/Model.ExecutableBlockRequest](docs/ExecutableBlockRequest.md)
 - [PSOpenAPITools/Model.ExecutableUnblockRequest](docs/ExecutableUnblockRequest.md)
 - [PSOpenAPITools/Model.IsolateResponse](docs/IsolateResponse.md)
 - [PSOpenAPITools/Model.RuleCreateRequest](docs/RuleCreateRequest.md)
 - [PSOpenAPITools/Model.RuleCreateRequestActions](docs/RuleCreateRequestActions.md)
 - [PSOpenAPITools/Model.RuleCreateRequestActionsAction](docs/RuleCreateRequestActionsAction.md)
 - [PSOpenAPITools/Model.RuleCreateRequestDefinition](docs/RuleCreateRequestDefinition.md)
 - [PSOpenAPITools/Model.RuleCreateRequestDefinitionAncestor](docs/RuleCreateRequestDefinitionAncestor.md)
 - [PSOpenAPITools/Model.RuleCreateRequestDefinitionOperations](docs/RuleCreateRequestDefinitionOperations.md)
 - [PSOpenAPITools/Model.RuleCreateRequestDefinitionOperationsOperation](docs/RuleCreateRequestDefinitionOperationsOperation.md)
 - [PSOpenAPITools/Model.RuleCreateRequestDescription](docs/RuleCreateRequestDescription.md)
 - [PSOpenAPITools/Model.RuleCreateResponse](docs/RuleCreateResponse.md)
 - [PSOpenAPITools/Model.RuleDetailsResponse](docs/RuleDetailsResponse.md)
 - [PSOpenAPITools/Model.RuleDetailsResponseRULE](docs/RuleDetailsResponseRULE.md)
 - [PSOpenAPITools/Model.RuleListResponse](docs/RuleListResponse.md)
 - [PSOpenAPITools/Model.RuleListResponseValue](docs/RuleListResponseValue.md)
 - [PSOpenAPITools/Model.RuleUpdateRequest](docs/RuleUpdateRequest.md)
 - [PSOpenAPITools/Model.UnauthorizedError](docs/UnauthorizedError.md)


## Documentation for Authorization


### bearerAuth


- **Type**: HTTP basic authentication

