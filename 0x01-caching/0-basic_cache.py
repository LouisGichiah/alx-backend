#!/usr/bin/python3
""" Module for class BasicCache """

from base_caching import BaseCaching

class BasicCache(BaseCaching):
    """ inherits from BaseCaching and is a caching system """

    def put(self, key, item):
        """
        Add an item in the cache
        """
        if key is None or item is None:
            pass

        else:
            self.cache_data[key] = item

    def get(self, key):
        """
        Get an item by key
        """
        if key is None:
            None

        elif key not in self.cache_data:
            None

        else:
            return self.cache_data.get(key)