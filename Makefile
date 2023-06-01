# References:
# - https://makefiletutorial.com/

# generate the api doc and serve
run: gen_apidoc serve

run_nfr:
	hugo server --disableFastRender

# build and serve in development mode
run_dev:
	hugo server --navigateToChanged --disableFastRender --buildDrafts

serve:
	hugo server

gen_apidoc:
# generate
	widdershins drafts/openapi.yaml -o drafts/openapi.md --omitHeader --code
# clean
	sed -i "12q" "content/docs/qbank/docs/api.md"
# inject
	cat drafts/openapi.md >> content/docs/qbank/docs/api.md
