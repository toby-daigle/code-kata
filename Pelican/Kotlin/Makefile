GRADLEW = ./gradlew

.PHONY: setup
setup:
	@asdf plugin update java || asdf plugin add java
	@asdf plugin update gradle || asdf plugin add gradle
	@asdf install

.PHONY: test
test:
	${GRADLEW} test

.PHONY: execute
execute:
	${GRADLEW} run

.PHONY: compile
compile:
	${GRADLEW} classes
