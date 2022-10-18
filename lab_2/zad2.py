import re

def read(str):
    y = re.findall('[a-ząćęóśźżł]+',str,re.IGNORECASE)
    x = re.findall('[0-9]+', str)
    return (x,y)

if __name__ == '__main__':
    while True:
        text = input(">> ")
        t = read(text)
        print('Wyrazy: ' + str(t[0]))
        print('Liczby: ' + str(t[1]))
