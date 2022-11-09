from enum import Enum

class Day(Enum):
    MON = 1
    TUE = 2
    WED = 3
    THU = 4
    FRI = 5
    SAT = 6
    SUN = 7
    
    def __str__(self):
        days = {
            1: "Poniedziałek",
            2: "Wtorek",
            3: "Środa",
            4: "Czwartek",
            5: "Piątek",
            6: "Sobota",
            7: "Niedziela"
        }
        return days[self.value]

    def difference(self, day):
        n = day.value - self.value
        if n < -3:
            n += 7
        elif n > 3:
            n -= 7
        return n
    
def nthDayFrom(n, day):
    n = n % 7 + day.value
    
    return Day(n)