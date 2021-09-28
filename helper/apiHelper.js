require("dotenv").config()
const supertest = require("supertest")

exports.sendGETRequest =  (baseUrl, apiEndPoint, auth) => {
    try {
        const res =  supertest(baseUrl)
            .get(apiEndPoint)
            .retry(2)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", auth)
        return res
    } catch (err) {
        console.log("Error in sending GET Request: ", err)
        return err
    }
}

exports.sendPOSTRequest =  (baseUrl, apiEndPoint, auth, requestBody) => {
    try {
        const res =  supertest(baseUrl)
            .post(apiEndPoint)
            .retry(2)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`)
            .send(requestBody)
        return res
    } catch (err) {
        console.log("Error in sending POST Request: ", err)
        return err
    }
}

exports.sendPOSTWithFileRequest =  (baseUrl, apiEndPoint, auth, file) => {
    try {
        const res =  supertest(baseUrl)
            .post(apiEndPoint)
            .retry(2)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`)
            .attach("file", file)
        return res
    } catch (err) {
        console.log("Error in sending POST Request: ", err)
        return err
    }
}

exports.sendPUTRequest =  (baseUrl, apiEndPoint, auth, requestBody) => {
    try {
        const res =  supertest(baseUrl)
            .put(apiEndPoint)
            .retry(2)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`)
            .send(requestBody)
        return res
    } catch (err) {
        console.log("Error in sending PUT Request: ", err)
        return err
    }
}
exports.sendDELETERequest =  (baseUrl, apiEndPoint, auth) => {
    try {
        const res =  supertest(baseUrl)
            .delete(apiEndPoint)
            .retry(2)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`)
        return res
    } catch (err) {
        console.log("Error in sending DELETE Request: ", err)
        return err
    }
}
