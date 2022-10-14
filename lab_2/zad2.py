import re

def read():
    str = input(">> ")
    y = re.findall('[a-ząćęóśźżł]+',str,re.IGNORECASE)
    x = re.findall('[0-9]+', str)
    print("Wyrazy:")
    print(*y)
    print("Liczby: ")
    print(*x)

while True:
    read()
    
