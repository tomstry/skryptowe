import sys
import getopt

try:
        opts, args = getopt.getopt(sys.argv[1:], '', ['moduł='])
except:
        print("Błąd składni")
        sys.exit()

# if opts[0][1] =="lista":
#     import lista
#     lista.zapisz()
#     lista.wypisz()
# elif opts[0][1] == "slownik":
#     import slownik
#     slownik.zapisz()
#     slownik.wypisz()
# else:
#     print("Błąd składni") 
print(opts)