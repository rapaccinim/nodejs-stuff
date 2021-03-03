/*
**
** This is a simple code for downloading an object from Google Cloud Storage in NodeJS.
** Before downloading, remember to set up a GOOGLE_APPLICATION_CREDENTIALS environment variable that points to your service-account.json key.
**
*/ 

// import the Google Cloud Storage client library
const {Storage} = require('@google-cloud/storage');

// define the Google Cloud Storage bucket name
const bucketName = 'bucket-name';

// define the path and name of Google Cloud Storage object to download
const srcFilename = 'path/to/object/to/download/file.format';

// define the destination folder of downloaded object
const destFilename = './path/to/downloaded/objects/folder/downloaded-file.format';

// create a client
const storage = new Storage();

// define the function for file download
async function downloadFile() {

    // passing the options
    const options = {
        destination: destFilename,
    };

    // download object from Google Cloud Storage bucket
    await storage.bucket(bucketName).file(srcFilename).download(options);

    // [optional] a good log can help you in debugging
    console.log(
        "The object " + srcFilename +
        " coming from bucket " +  bucketName +
        " has been downloaded to " + destFilename
    );
}

// call the download function and be ready to catch errors
downloadFile().catch(console.error);