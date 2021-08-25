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

.PARAMETER Definition
No description available.
.PARAMETER Description
No description available.
.PARAMETER Actions
No description available.
.OUTPUTS

RuleCreateRequest<PSCustomObject>
#>

function Initialize-RuleCreateRequest {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Definition},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Description},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Actions}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => RuleCreateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "definition" = ${Definition}
            "description" = ${Description}
            "actions" = ${Actions}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to RuleCreateRequest<PSCustomObject>

.DESCRIPTION

Convert from JSON to RuleCreateRequest<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

RuleCreateRequest<PSCustomObject>
#>
function ConvertFrom-JsonToRuleCreateRequest {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => RuleCreateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in RuleCreateRequest
        $AllProperties = ("definition", "description", "actions")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "definition"))) { #optional property not found
            $Definition = $null
        } else {
            $Definition = $JsonParameters.PSobject.Properties["definition"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "description"))) { #optional property not found
            $Description = $null
        } else {
            $Description = $JsonParameters.PSobject.Properties["description"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "actions"))) { #optional property not found
            $Actions = $null
        } else {
            $Actions = $JsonParameters.PSobject.Properties["actions"].value
        }

        $PSO = [PSCustomObject]@{
            "definition" = ${Definition}
            "description" = ${Description}
            "actions" = ${Actions}
        }

        return $PSO
    }

}
