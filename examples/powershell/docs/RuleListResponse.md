# RuleListResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int32** |  | [optional] 
**Value** | [**RuleListResponseValue[]**](RuleListResponseValue.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleListResponse = Initialize-PSOpenAPIToolsRuleListResponse  -Count null `
 -Value null
```

- Convert the resource to JSON
```powershell
$RuleListResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

