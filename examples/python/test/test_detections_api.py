"""
    ESET Enterprise Inspector

    ESET Enterprise Inspector REST API definition  # noqa: E501

    The version of the OpenAPI document: 1.6-oas3
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.detections_api import DetectionsApi  # noqa: E501


class TestDetectionsApi(unittest.TestCase):
    """DetectionsApi unit test stubs"""

    def setUp(self):
        self.api = DetectionsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_detection_details(self):
        """Test case for get_detection_details

        Get detection details  # noqa: E501
        """
        pass

    def test_list_detections(self):
        """Test case for list_detections

        List of detections  # noqa: E501
        """
        pass

    def test_update_detection(self):
        """Test case for update_detection

        Update detection  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
