# RuleCreateRequestDefinition
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ancestor** | [**RuleCreateRequestDefinitionAncestor**](RuleCreateRequestDefinitionAncestor.md) |  | [optional] 
**Parentprocess** | [**SystemCollectionsHashtable**](.md) |  | [optional] 
**VarProcess** | [**SystemCollectionsHashtable**](.md) |  | [optional] 
**Operations** | [**RuleCreateRequestDefinitionOperations**](RuleCreateRequestDefinitionOperations.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RuleCreateRequestDefinition = Initialize-PSOpenAPIToolsRuleCreateRequestDefinition  -Ancestor null `
 -Parentprocess null `
 -VarProcess null `
 -Operations null
```

- Convert the resource to JSON
```powershell
$RuleCreateRequestDefinition | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

