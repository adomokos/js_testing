test: test-bdd

test-bdd:
	@./node_modules/jasmine-node/bin/jasmine-node \
		spec/string_calculator_spec.js

test-doc:
	@./node_modules/jasmine-node/bin/jasmine-node \
		spec/string_calculator_spec.js \
		--verbose
