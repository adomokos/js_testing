REPORTER = dot

test: test-bdd

test-exports:
	@./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--ui exports \

test-bdd:
	@./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--ui bdd \

test-doc:
	@./node_modules/mocha/bin/mocha \
		--reporter list \
		--ui bdd \

test-landing:
	@./node_modules/mocha/bin/mocha \
		--reporter landing \
		--ui bdd \

test-progress:
	@./node_modules/mocha/bin/mocha \
		--reporter progress \
		--ui bdd \

test-spec:
	@./node_modules/mocha/bin/mocha \
		--reporter spec \
		--ui bdd \

test-json:
	@./node_modules/mocha/bin/mocha \
		--reporter json \
		--ui bdd \

test-teamcity:
	@./node_modules/mocha/bin/mocha \
		--reporter teamcity \
		--ui bdd \
