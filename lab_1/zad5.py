from cmath import sqrt
import sys
import math

def Prime(number):
    if number <= 1:
        return False
    sqrt = int(math.sqrt(number))
    for i in range(2, sqrt + 1):
        if number % i == 0:
            return False
    return True

for args in sys.argv[1::]:
    if Prime(int(args)) == True:
        print(args)
