import zad2
import unittest

class Test_read(unittest.TestCase):
    def test_tomek(self):
        self.assertEqual(zad2.read("Tomek"),([],['Tomek']))
    
    def test_1kota(self):
        self.assertEqual(zad2.read("1kota"),(['1'],['kota']))
    
    def test_50(self):
        self.assertEqual(zad2.read("50"),(['50'],[]))
    
    def test_test(self):
        self.assertEqual(zad2.read("ala60 tomek 50"),(['60', '50'],['ala', 'tomek']))
if __name__ == '__main__':
    unittest.main()