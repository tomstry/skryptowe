import unittest
from zad3_d import Day
from zad3_t import Term


class Test_TestDeanerySystem(unittest.TestCase):
    def test_earlierThan(self):
        self.assertFalse(Term(Day.MON, 11, 15).earlierThan(Term(Day.MON, 10, 50)))
        self.assertTrue(Term(Day.MON, 11, 00).earlierThan(Term(Day.MON, 11, 10)))

    def test_laterThan(self):
        self.assertTrue(Term(Day.TUE, 10, 15).laterThan(Term(Day.MON, 10, 00)))
        self.assertTrue(Term(Day.MON, 11, 15).laterThan(Term(Day.MON, 11, 14)))

    def test_term_equals(self):
        self.assertTrue(Term(Day.MON, 7, 00).equals(Term(Day.MON, 7, 00)))
        self.assertFalse(Term(Day.WED, 10, 15).equals(Term(Day.WED, 10, 20)))

    def test_term_str(self):
        self.assertEqual(str(Term(Day.MON, 7, 8)), "Poniedziałek 7:08 [90]")
        self.assertEqual(str(Term(Day.WED, 10, 30)), "Środa 10:30 [90]")

if __name__ == '__main__':
    unittest.main()