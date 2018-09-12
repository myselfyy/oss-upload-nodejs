import config from '../../../config';
module.exports = {
  port: 3602,
  oss: {
    OSSAccessKeyId: config.OSSAccessKeyId,
    secret: config.secret,
    host: config.host // 填你自己阿里云OSS的外网域名
  }
}
