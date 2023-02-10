import ip from "ip";

export default {
  port: 9090,
  whitelist: [
    "http://localhost:3000",
    `http://${ip.address()}:3000`,
    "http://localhost:3001",
    `http://${ip.address()}:3001`,
    undefined,
  ],
  ACCESS_TOKEN_SECRET: "EiKf9vBVMW0Qiu6EWgzwU7PyCdD0BLxv7ks4kTe4fXvGPDYsS3QT3wugV4ReGopt",
  REFRESH_TOKEN_SECRET: "0ueUlWRDDjvu7188rORSqZVuwWUVvJSyPGWw84J3HxgWmW9VKRP4RFzW2Imvb1Jr"
};