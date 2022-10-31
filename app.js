const crypto = require("crypto")

function base64(json) {
    const stringified = JSON.stringify(json)
    // JSON을 문자열화
    const base64Encoded = Buffer.from(stringified).toString("base64")
    // 문자열화 된 JSON 을 Base64 로 인코딩
    const paddingRemoved = base64Encoded.replaceAll("=", "")
    // Base 64 의 Padding(= or ==) 을 제거
  
    return paddingRemoved
  }

  const header = {
    alg: "HS256",
    typ: "JWT",
  }
  
  const encodedHeader = base64(header)
  document.write(encodedHeader)

  const payload = {
    email: "devhudi@gmail.com",
    name: "Hudi",
    isAdmin: true,
  }
  
  const encodedPayload = base64(payload)
  document.write(encodedPayload)