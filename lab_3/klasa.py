import sys

class Klasa(object):
    
    tab = [1,2,3]
    
    def __init__(self, arr, zm1, zm2):
        print("wywołano metodę '__init__()'")
        self.tab = arr
        self._zmienna1 = zm1
        self.__zmienna2 = zm2
    
    def print_z2(self):
        print(self.__zmienna2)
    
    def __del__(self):
        print("wywołano metodę '__del__()'")

    def __str__(self):
        return print("wywołano metodę '__str__()'")

    def __repr__(self):
        return print("wywołano metodę '__repr__()'")

    def metodaInstancyjna(self):
        print("wywołano metodę 'metodaInstalacyjna()'")
        print("Zmienna klasowa -> ", self.__class__.tab)
        print("zmienna instalacyjna -> ", self.tab)
        
    #print(obiekt._Klasa__zmienna2)

    @classmethod
    def metodaKlasowa(cls):
        print("Wywołano metodę \033[1m{name:^17}\033[0m klasy   \033[1m{cls}\033[0m".format(
            name = sys._getframe().f_code.co_name,
            cls  = cls.__name__)
        )

    @staticmethod
    def metodaStatyczna():
        print("Wywołano metodę \033[1m{name:^17}\033[0m klasy   \033[1m{cls}\033[0m".format(
            name = sys._getframe().f_code.co_name,
            cls  = __class__.__name__)
        )
##################################
print("Załadowano zawartość pliku '{name}'".format(name=__file__))