```javascript
const AWS = require('aws-sdk');
const awsConfig = require('../config/awsConfig');

AWS.config.update(awsConfig);

const s3 = new AWS.S3();

const uploadToS3 = async (file) => {
  const params = {
    Bucket: awsConfig.bucketName,
    Key: file.name,
    Body: file.data,
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const deleteFromS3 = async (fileName) => {
  const params = {
    Bucket: awsConfig.bucketName,
    Key: fileName,
  };

  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  uploadToS3,
  deleteFromS3,
};
```