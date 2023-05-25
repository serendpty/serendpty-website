run:
	hugo serve

run_nfr:
	hugo server --disableFastRender

# build and serve in development mode
run_dev:
	hugo server --navigateToChanged --disableFastRender --buildDrafts
