import sys
import getopt

try:
     opts, args = getopt.getopt(sys.argv[1:], "m:",["modul="])
except:
     print("Błąd składni")
     sys.exit()

for opt,arg in opts:
     if opt in ["-m","--modul"] and arg == "lista":
          import lista
          lista.zapisz()
          lista.wypisz()
     elif opt in ["-m","--modul"] and arg == "slownik":
          import slownik
          slownik.zapisz()
          slownik.wypisz()