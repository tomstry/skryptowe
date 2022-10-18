import sys
print('Ładowanie modułu "{0}"'.format(__name__))
############################################
def wypisz():
    print('Wywołano funkcję "wypisz()" modułu "{0}"'.format(__name__))
    text = ""
    for item in range(0,len(listarg)):
        text += "{0}:{1},".format(listarg[item],listfreq[item])
    print(text)
        
############################################
def zapisz():
    for args in sys.argv[2::]:
        if args not in listarg:
            listarg.append(args)
            listfreq.append(0)
        index = listarg.index(args)
        listfreq[index] += 1

listarg = []
listfreq =[]