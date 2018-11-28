BIN_DIR = ${DESTDIR}/usr/local/bin

.PHONY: all clean
all: eagle

eagle:
	gcc eagle.c -o eagle

install: eagle
	mkdir -p ${BIN_DIR}
	install -c -m 755 eagle $(BIN_DIR)

clean:
	rm -f eagle