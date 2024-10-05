VERSION=1.0.9

.PHONY: help
help: ## Display this help.
	@awk 'BEGIN {FS = ":.*#"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?#/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^#@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: build
build:
	@npm run build

.PHONY: lint
lint:
	@npm run lint

.PHONY: set-version
set-version:
	@npm version $(VERSION) --no-git-tag-version --allow-same-version

.PHONY: generate
generate:
	@echo "generating typescript..."
	@ts-node ./generate/generate.ts Items text/items/PostGen4.txt items/PostGen4.ts
	@npx prettier --log-level silent --write src/**/*


.PHONY: sync-resources
sync-resources: # Download text resources from the PKHex repository
	@echo "syncing PKHex resources..."
	@npx ts-node ./generate/syncPKHexResources.ts
	@echo "syncing finished"
