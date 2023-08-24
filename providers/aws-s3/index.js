// aws-s3 provider

module.exports = {
    init: (config) => {
      const s3 = new AWS.S3(config);
  
      return {
        async upload(file) {
          // code to upload file to S3
        },
  
        async delete(file) {
          // code to delete file from S3
        },
  
        async isPrivate() {
          return true;
        },
  
        async getSignedUrl(file) {
          const params = {
            Bucket: config.params.Bucket,
            Key: file.path,
            Expires: 60, // URL expiration time in seconds
          };
  
          const signedUrl = await s3.getSignedUrlPromise("getObject", params);
          return { url: signedUrl };
        },
      };
    },
  };