"""
    ESET Enterprise Inspector

    ESET Enterprise Inspector REST API definition  # noqa: E501

    The version of the OpenAPI document: 1.6-oas3
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import openapi_client
from openapi_client.model.rule_create_request_actions import RuleCreateRequestActions
from openapi_client.model.rule_create_request_definition import RuleCreateRequestDefinition
from openapi_client.model.rule_create_request_description import RuleCreateRequestDescription
globals()['RuleCreateRequestActions'] = RuleCreateRequestActions
globals()['RuleCreateRequestDefinition'] = RuleCreateRequestDefinition
globals()['RuleCreateRequestDescription'] = RuleCreateRequestDescription
from openapi_client.model.rule_create_request import RuleCreateRequest


class TestRuleCreateRequest(unittest.TestCase):
    """RuleCreateRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testRuleCreateRequest(self):
        """Test RuleCreateRequest"""
        # FIXME: construct object with mandatory attributes with example values
        # model = RuleCreateRequest()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
