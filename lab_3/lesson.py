from zad3_d import Day
from zad3_t import Term

class Lesson():
    
    def __init__(self,term,name,teacherName,year):
        self.term = term
        self.name = name
        self.teacherName = teacherName
        self.year = year
        self.fullTime = (term.day == Day.MON or term.day == Day.THU or term.day == Day.WED or term.day == Day.THU or term.day == Day.FRI)
    
    
    def Validate(self):
        return self.val(self.term.hour, self.term.minute) and self.val(self.term.hour + self.term.duration // 60, self.term.minute + self.term.duration % 60)
    
    def val2(self,hour,minute):
        if self.fullTime == True:
            if self.term.day.value > 5:
                return False
            elif self.term.day.value == 5:
                if hour < 8 or hour > 17:
                    return False
                elif hour == 8 or hour == 17:
                    if minute > 0:
                        return False
            elif hour < 8 or hour > 20:
                return False
            elif hour == 8 or hour == 20:
                if minute > 0:
                    return False
            return True
        if self.fullTime == False:
            if self.term.day.value < 5 or self.term.day.value > 7:
                return False
            elif self.term.day.value == 5:
                if hour < 17 or hour > 20:
                    return False
                elif hour == 17 or hour == 20:
                    if minute > 0:
                        return False
            elif hour < 8 or hour > 20:
                return False
            elif hour == 8 or hour == 20:
                if minute > 0:
                    return False
            return True
            
    
    def __str__(self):
        if self.year == 1:
            y = 'Pierwszy rok'
        elif self.year == 2:
            y = 'Drugi rok'
        elif self.year == 3:
            y = 'Trzeci rok'
        elif self.year == 4:
            y = 'Czwarty rok'
        elif self.year == 5:
            y = 'Piąty rok'

        return f'{self.name} ({self.term})\n{y} studiów {"stacjonarnych" if self.fullTime else "niestacjonarnych"}\nProwadzący: {self.teacherName}'
       
    
    def earlierDay(self):
        if self.term.day == Day.MON or self.term.day == Day.SAT:
            return False
        
        self.term.day = Day(self.term.day.value - 1)
        
        if not self.Validate():
            self.laterDay()
            return False
        
        return True
    
    def laterDay(self):
        if self.term.day == Day.FRI or self.term.day == Day.SUN:
            return False
        
        self.term.day = Day(self.term.day.value + 1)

        if not self.Validate():
            self.earlierDay()
            return False
        
        return True
    
    def laterTime(self):
        x = self.term.hour
        y = self.term.minute
        deltah = self.term.duration // 60
        deltamin = self.term.duration % 60
        self.term.hour += deltah
        self.term.minute += deltamin
        
        if self.term.minute > 59:
            self.term.hour += 1
            self.term.minute -= 60
        
        if not self.Validate():
            self.term.hour = x
            self.term.minute = y
            return False
        
        return True        
    
    def earlierTime(self):
        x = self.term.hour
        y = self.term.minute
        deltah = self.term.duration // 60
        deltamin = self.term.duration % 60
        self.term.hour -= deltah
        self.term.minute -= deltamin
        
        if self.term.minute < 0:
            self.term.hour -= 1
            self.term.minute += 60
        
        if not self.Validate():
            self.term.hour = x
            self.term.minute = y
            return False
        
        return True
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
