#
# ESET Enterprise Inspector
# ESET Enterprise Inspector REST API definition
# Version: 1.6-oas3
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER Body
No description available.
.PARAMETER AutoResolve
No description available.
.PARAMETER Name
No description available.
.PARAMETER RuleIds
No description available.
.PARAMETER RuleUuids
No description available.
.PARAMETER Note
No description available.
.OUTPUTS

ExclusionCreateRequest<PSCustomObject>
#>

function Initialize-ExclusionCreateRequest {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Body},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [Boolean]
        ${AutoResolve},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [Int32[]]
        ${RuleIds},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${RuleUuids},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Note}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ExclusionCreateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        if ($Body -eq $null) {
            throw "invalid value for 'Body', 'Body' cannot be null."
        }

        if ($AutoResolve -eq $null) {
            throw "invalid value for 'AutoResolve', 'AutoResolve' cannot be null."
        }

        if ($Name -eq $null) {
            throw "invalid value for 'Name', 'Name' cannot be null."
        }


        $PSO = [PSCustomObject]@{
            "body" = ${Body}
            "autoResolve" = ${AutoResolve}
            "name" = ${Name}
            "ruleIds" = ${RuleIds}
            "ruleUuids" = ${RuleUuids}
            "note" = ${Note}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ExclusionCreateRequest<PSCustomObject>

.DESCRIPTION

Convert from JSON to ExclusionCreateRequest<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ExclusionCreateRequest<PSCustomObject>
#>
function ConvertFrom-JsonToExclusionCreateRequest {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ExclusionCreateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ExclusionCreateRequest
        $AllProperties = ("body", "autoResolve", "name", "ruleIds", "ruleUuids", "note")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        If ([string]::IsNullOrEmpty($Json) -or $Json -eq "{}") { # empty json
            throw "Error! Empty JSON cannot be serialized due to the required property 'body' missing."
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "body"))) {
            throw "Error! JSON cannot be serialized due to the required property 'body' missing."
        } else {
            $Body = $JsonParameters.PSobject.Properties["body"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "autoResolve"))) {
            throw "Error! JSON cannot be serialized due to the required property 'autoResolve' missing."
        } else {
            $AutoResolve = $JsonParameters.PSobject.Properties["autoResolve"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "name"))) {
            throw "Error! JSON cannot be serialized due to the required property 'name' missing."
        } else {
            $Name = $JsonParameters.PSobject.Properties["name"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "ruleIds"))) { #optional property not found
            $RuleIds = $null
        } else {
            $RuleIds = $JsonParameters.PSobject.Properties["ruleIds"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "ruleUuids"))) { #optional property not found
            $RuleUuids = $null
        } else {
            $RuleUuids = $JsonParameters.PSobject.Properties["ruleUuids"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "note"))) { #optional property not found
            $Note = $null
        } else {
            $Note = $JsonParameters.PSobject.Properties["note"].value
        }

        $PSO = [PSCustomObject]@{
            "body" = ${Body}
            "autoResolve" = ${AutoResolve}
            "name" = ${Name}
            "ruleIds" = ${RuleIds}
            "ruleUuids" = ${RuleUuids}
            "note" = ${Note}
        }

        return $PSO
    }

}

