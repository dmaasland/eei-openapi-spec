# RuleCreateRequestDescription
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** |  | [optional] 
**Category** | **String** |  | [optional] 
**Explanation** | **String** |  | [optional] 
**Os** | **String** |  | [optional] 
**Mitreattackid** | **String** |  | [optional] 
**MaliciousCauses** | **String** |  | [optional] 
**BenignCauses** | **String** |  | [optional] 
**RecommendedActions** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleCreateRequestDescription = Initialize-PSOpenAPIToolsRuleCreateRequestDescription  -Name null `
 -Category null `
 -Explanation null `
 -Os null `
 -Mitreattackid null `
 -MaliciousCauses null `
 -BenignCauses null `
 -RecommendedActions null
```

- Convert the resource to JSON
```powershell
$RuleCreateRequestDescription | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

