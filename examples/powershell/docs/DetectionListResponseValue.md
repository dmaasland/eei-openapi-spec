# DetectionListResponseValue
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComputerId** | **Int32** |  | [optional] 
**ComputerName** | **String** |  | [optional] 
**ComputerUuid** | **String** |  | [optional] 
**CreationTime** | **System.DateTime** |  | [optional] 
**Id** | **Int32** |  | [optional] 
**ModuleId** | **Int32** |  | [optional] 
**ModuleLgAge** | **Int32** |  | [optional] 
**ModuleLgPopularity** | **Int32** |  | [optional] 
**ModuleLgReputation** | **Int32** |  | [optional] 
**ModuleName** | **String** |  | [optional] 
**ModuleSha1** | **String** |  | [optional] 
**ModuleSignatureType** | **Int32** |  | [optional] 
**ModuleSigner** | **String** |  | [optional] 
**Note** | **String** |  | [optional] 
**Priority** | **Int32** |  | [optional] 
**ProcessCommandLine** | **String** |  | [optional] 
**ProcessId** | **Int32** |  | [optional] 
**ProcessUser** | **String** |  | [optional] 
**Resolved** | **Boolean** |  | [optional] 
**RuleId** | **Int32** |  | [optional] 
**RuleName** | **String** |  | [optional] 
**RuleUuid** | **String** |  | [optional] 
**Severity** | **Int32** |  | [optional] 
**SeverityScore** | **Int32** |  | [optional] 
**ThreatName** | **String** |  | [optional] 
**ThreatUri** | **String** |  | [optional] 
**Type** | **Int32** |  | [optional] 
**Uuid** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DetectionListResponseValue = Initialize-PSOpenAPIToolsDetectionListResponseValue  -ComputerId null `
 -ComputerName null `
 -ComputerUuid null `
 -CreationTime null `
 -Id null `
 -ModuleId null `
 -ModuleLgAge null `
 -ModuleLgPopularity null `
 -ModuleLgReputation null `
 -ModuleName null `
 -ModuleSha1 null `
 -ModuleSignatureType null `
 -ModuleSigner null `
 -Note null `
 -Priority null `
 -ProcessCommandLine null `
 -ProcessId null `
 -ProcessUser null `
 -Resolved null `
 -RuleId null `
 -RuleName null `
 -RuleUuid null `
 -Severity null `
 -SeverityScore null `
 -ThreatName null `
 -ThreatUri null `
 -Type null `
 -Uuid null
```

- Convert the resource to JSON
```powershell
$DetectionListResponseValue | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

