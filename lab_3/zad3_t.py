from zad3_d import Day
import re

class Term():
    def __init__(self, day, hour, min, dur = 90):
        self.day = day
        self.hour = hour
        self.minute = min
        self.duration = dur

    def __str__(self):
        return f'{self.day} {self.hour}:{self.minute:02d} [{self.duration}]'

    def getDay(self):
        return self.day

    def earlierThan(self, term):
        if self.day.difference(term.getDay()) < 0:
            return False
            
        if self.day.difference(term.getDay()) > 0:
            return True
            
        if term.hour < self.hour:
            return False
        
        if term.hour > self.hour:
            return True
            
        if term.minute <= self.minute:
            return False
        
        return True

    def laterThan(self, term):
        if self.day.difference(term.getDay()) > 0:
            return False
            
        if self.day.difference(term.getDay()) < 0:
            return True
        
        if term.hour > self.hour:
            return False
        
        if term.hour < self.hour:
            return True
            
        if term.minute >= self.minute:
            return False
        
        return True

    def equals(self, term):
        if term.hour == self.hour and term.minute == self.minute and term.duration == self.duration and self.day == term.getDay():
            return True
        else:
            return False
        
    def __lt__(self,term):
        return self.earlierThan(term)

    def __le__(self, term):
        return self.earlierThan(term) or self.equals(term)
    
    def __gt__(self,term):
        return self.laterThan(term)
    
    def __ge__(self,term):
        return self.laterThan(term) or self.equals(term)
    
    def __eq__(self,term):
        return self.equals(term)
    
    def __sub__(self,term):
        return Term(term.day, term.hour, term.minute,(self.day.value - term.day.value)*24*60 + (self.hour - term.hour)*60 + (self.minute - term.minute) + self.duration)
    
