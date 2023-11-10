const { init } = require("./index");
const fs = require("fs");

const options = {
  region: process.env.R2_REGION,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_ACCESS_SECRET,
  bucket: process.env.R2_BUCKET,
  accountId: process.env.R2_ACCOUNT_ID,
  publicUrl: process.env.R2_PUBLIC_URL,
  folder: process.env.R2_FOLDER,
};

const { upload, uploadStream, delete: deleteFile } = init(options);

const runner = async () => {
  const file = fs.readFileSync("test.txt");
  await upload({
    buffer: file,
    hash: "test",
    ext: ".txt",
    mime: "text/plain",
  });
};

runner();
