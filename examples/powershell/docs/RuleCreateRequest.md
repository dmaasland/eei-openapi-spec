# RuleCreateRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | [**RuleCreateRequestDefinition**](RuleCreateRequestDefinition.md) |  | [optional] 
**Description** | [**RuleCreateRequestDescription**](RuleCreateRequestDescription.md) |  | [optional] 
**Actions** | [**RuleCreateRequestActions**](RuleCreateRequestActions.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleCreateRequest = Initialize-PSOpenAPIToolsRuleCreateRequest  -Definition null `
 -Description null `
 -Actions null
```

- Convert the resource to JSON
```powershell
$RuleCreateRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

