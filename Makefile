CFLAGS ?= $(shell pkg-config --cflags simple-tiles pangocairo) $(shell gdal-config --cflags)
LDLIBS ?= $(shell pkg-config --libs simple-tiles pangocairo) $(shell gdal-config --libs)

all: stex
stex: stex.o
stex.o: stex.c

.PHONY: all
