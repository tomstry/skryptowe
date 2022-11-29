from enum import Enum

class Day(Enum):
    MON = 1
    TUE = 2
    WED = 3
    THU = 4
    FRI = 5
    SAT = 6
    SUN = 7
    
    def difference(self, day):
        n = day.value - self.value
        if n < -3:
            n += 7
        elif n > 3:
            n -= 7
        return n
        

def nthDayFrom(n, day):
    n = n + day.value
    
    while n < 1:
        n = n + 7
    while n > 7:
        n = n - 7
    
    return Day(n)

