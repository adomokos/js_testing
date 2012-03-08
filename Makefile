test: test-bdd

test-bdd:
	@./node_modules/jasmine-node/bin/jasmine-node \
		spec

test-doc:
	@./node_modules/jasmine-node/bin/jasmine-node \
		spec \
		--verbose
