test:
	@NODE_ENV=test CONFO_FILE=./test/confo.json ./node_modules/mocha/bin/mocha --reporter nyan 	test/

.PHONY: test
