const fs = require('fs');
const {execSync} = require('child_process');

// repo list
// NOTE: the spec file shold be named `openapi.yaml` and it should be in `./docs/api` dir in the repo.
const apiDocs = {
    school_api: "https://github.com/serendpty/edu-school-api.git",
}

// temp dir
const tempDir = "./temp";
// openapi specs from cloned repos are copied to this dir
const specsDir = "./md_gen/api_specs";
// generated md file are placed in this dir
const apisDir = "./md_gen/api_docs";
// actual api docs dir in hugo site
const apiDocsDir = "./content/docs/education/apis";

// get latest version of the openapi file from each repository
getAPISpecs(apiDocs, tempDir, specsDir);

// generate new files
convertSpecs(apiDocs, specsDir, apisDir);

// copy generated api docs
copyAPIDocs(apisDir, apiDocsDir);

// Remove all files in the dir.
function emptyDir(dir) {

    let files = fs.readdirSync(dir);

    for (let file of files) {

        fs.unlinkSync(`${dir}/${file}`);
        console.log(`Removed ${dir}/${file}`);
    }
}

// get latest api docs from repositories.
function getAPISpecs(apiDocs, tempDir, specsDir) {

    // remove existing openapi schemas
    emptyDir(specsDir);

    // clone repo
    for(const prop in apiDocs) {

        let cmd = `git clone ${apiDocs[prop]} ${tempDir}/${prop}`;
        execSync(cmd, {stdio: "inherit"});
        
        fs.copyFileSync(`${tempDir}/${prop}/docs/api/openapi.yaml`, `${specsDir}/${prop}.yaml`);
        fs.rmdirSync(`${tempDir}/${prop}`, { recursive: true });
    }
}

// Convert openapi specs referred in apiDocs array in to markdown files.
function convertSpecs(apiDocs, specsDir, apisDir) {

    // remove old files from apisDir
    emptyDir(apisDir);

    for(const prop in apiDocs) {
    
        // convert
        let cmd = `./node_modules/.bin/og -o ${apisDir} -t ./md_gen/templates ${specsDir}/${prop}.yaml markdown`;
        execSync(cmd);
    
        // rename file 
        fs.renameSync(`${apisDir}/openapi.md`, `${apisDir}/${prop}.md`);
    
        console.log(`Converted ${specsDir}/${prop}.yaml -> ${apisDir}/${prop}.md`);
    }    
}

// copy generated api documents to the actual directory where hugo has access to.
function copyAPIDocs(apisDir, apiDocsDir) {

    emptyDir(apiDocsDir);

    let files = fs.readdirSync(apisDir);

    for (let file of files) {

        fs.copyFileSync(`${apisDir}/${file}`, `${apiDocsDir}/${file}`);

        console.log(`Copied ${apisDir}/${file} -> ${apiDocsDir}/${file}`);
    }
}
