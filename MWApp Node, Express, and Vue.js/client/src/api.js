const axios = require("axios")
const apiUrl = process.env.VUE_APP_API_URL

function buildUrl(path) {
    return `${apiUrl};${path}`
}

module.exports = {
    autorization(data) {
        let url = buildUrl('login')
        return axios.post(url, data).then(res => res.data)


    }
}