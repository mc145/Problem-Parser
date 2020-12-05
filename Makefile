output: main.o
	g++ -std=c++17 -O2 -Wall -Wextra -pedantic -Wshadow -Wformat=2 -Wfloat-equal -Wconversion main.cpp

clean:
	rm *.o
test:
	g++ -std=c++17 -O2 -Wall -Wextra -pedantic -Wshadow -Wformat=2 -Wfloat-equal -Wconversion main.cpp 
	./a.out < 0.in > 0.outs	
	diff 0.out 0.outs
