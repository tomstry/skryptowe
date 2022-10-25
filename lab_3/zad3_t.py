from zad3_d import Day
import re

class Term():
    def __init__(self, day, hour, min):
        self._day = day
        self.hour = hour
        self.minute = min
        self.duration = 90

    def __str__(self):
        return f'{self._day} {self.hour}:{self.minute:02d} [{self.duration}]'

    def getDay(self):
        return self._day

    def earlierThan(self, term):
        if self._day.difference(term.getDay()) < 0:
            return False
            
        if self._day.difference(term.getDay()) > 0:
            return True
            
        if term.hour < self.hour:
            return False
        
        if term.hour > self.hour:
            return True
            
        if term.minute <= self.minute:
            return False
        
        return True

    def laterThan(self, term):
        if self._day.difference(term.getDay()) > 0:
            return False
            
        if self._day.difference(term.getDay()) < 0:
            return True
        
        if term.hour > self.hour:
            return False
        
        if term.hour < self.hour:
            return True
            
        if term.minute >= self.minute:
            return False
        
        return True

    def equals(self, term):
        if term.hour == self.hour and term.minute == self.minute and term.duration == self.duration and self._day == term.getDay():
            return True
        else:
            return False
