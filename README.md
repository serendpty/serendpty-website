# Serendipity Website Source

Source files for the Serendipity website ([https://github.com/serendpty/serendpty.github.io](https://github.com/serendpty/serendpty.github.io)) hosted as GitHub pages.

## Theme
[https://github.com/alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book)

**Details**
[https://themes.gohugo.io//theme/hugo-book/](https://themes.gohugo.io//theme/hugo-book/)

## OpenAPI to Markdown

The [openapi3-generator](https://github.com/openapi-contrib/openapi3-generator) npm package is used to generate `markdown` documentation using `openapi` spec files of different repositories. The `generate.js` script holds all the logic to generate these docs.

You need `NodeJS` to run the markdown generation script.

Use `npn install` to set everything up.

Then run `npm run generate` to generate api documentation.

All the templates and intermediary directories are in `md-gen` directory. You will have to manually create `api_docs` and `api_specs` directories if they does not exist.

You can configure what repositories to be used to create api documentation using the `apiDocs` object in `generate.js`

```javascript
// repo list
// NOTE: the spec file shold be named `openapi.yaml` and it should be in `./docs/api` dir in the repo.
const apiDocs = {
    school_api: "https://github.com/serendpty/edu-school-api.git",
}
```