# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.artist import Artist  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_artists_get(self):
        """Test case for artists_get

        
        """
        response = self.client.open(
            '/cormacmchale3/ArtistAPI2/1.0/artists',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_artists_post(self):
        """Test case for artists_post

        
        """
        response = self.client.open(
            '/cormacmchale3/ArtistAPI2/1.0/artists',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
