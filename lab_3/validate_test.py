import unittest
from zad3_d import Day
from zad3_t import Term
from lesson import Lesson

class Test_move_days(unittest.TestCase):
    def test_day(self):
        l1 = Lesson(Term(Day.MON, 8, 30, 90), "Test", "Test", 2)
        l2 = Lesson(Term(Day.FRI, 8, 30, 90), "Test", "Test", 2)
        self.assertFalse(l1.earlierDay())
        self.assertTrue(l1.laterDay())
        self.assertTrue(l2.earlierDay())
        
    def test_time(self):
        l1 = Lesson(Term(Day.MON, 8, 30, 90), "Test", "Test", 2)
        l2 = Lesson(Term(Day.SAT, 19, 30, 90), "Test", "Test", 2)
        self.assertTrue(l1.laterTime())
        self.assertFalse(l2.laterTime())
        self.assertTrue(l2.earlierTime())
        self.assertFalse(l2.laterTime())
        
if __name__ == '__main__':
    unittest.main()