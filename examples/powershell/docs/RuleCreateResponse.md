# RuleCreateResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **String** |  | [optional] 
**Enabled** | **Boolean** |  | [optional] 
**Id** | **Int32** |  | [optional] 
**Name** | **String** |  | [optional] 
**Severity** | **Int32** |  | [optional] 
**SeverityScore** | **Int32** |  | [optional] 
**Uuid** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleCreateResponse = Initialize-PSOpenAPIToolsRuleCreateResponse  -Body null `
 -Enabled null `
 -Id null `
 -Name null `
 -Severity null `
 -SeverityScore null `
 -Uuid null
```

- Convert the resource to JSON
```powershell
$RuleCreateResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

