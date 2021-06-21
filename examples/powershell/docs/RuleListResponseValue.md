# RuleListResponseValue
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** |  | [optional] 
**Id** | **Int32** |  | [optional] 
**Name** | **String** |  | [optional] 
**Severity** | **Int32** |  | [optional] 
**SeverityScore** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleListResponseValue = Initialize-PSOpenAPIToolsRuleListResponseValue  -Enabled null `
 -Id null `
 -Name null `
 -Severity null `
 -SeverityScore null
```

- Convert the resource to JSON
```powershell
$RuleListResponseValue | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

