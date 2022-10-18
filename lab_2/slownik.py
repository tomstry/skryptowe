import math
import sys

print('Ładowanie modułu "{0}"'.format(__name__))
############################################
def wypisz():
    print('Wywołano funkcję "wypisz()" modułu "{0}"'.format(__name__))
    text = ""
    for c in dictionaty:
        text += "{0}:{1},".format(c,dictionaty[c])
    print(text)

def zapisz():
    for args in sys.argv[1::]:
        if args.isnumeric():
            if args not in dictionaty:
                dictionaty[args] = 1
            else:
                dictionaty[args] += 1
            
############################################
print('Załadowano moduł "{0}"'.format(__name__))
dictionaty = {}