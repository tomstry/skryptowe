import sys; print(len(list(filter(lambda x: int(x) % 2 == 0, sum(list(map(lambda y: open(y, 'r').read().split(),sys.argv[1:])),[])))))