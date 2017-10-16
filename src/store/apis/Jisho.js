import Vue from 'vue'
const base_url = "http://jisho.org/api/v1/search/words?"
// http://jisho.org/api/v1/search/words?keyword=house
export default {
  get_word: (word) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(base_url + "keyword=" + word + "&callback=foo").then(response => {
        log(response)
        resolve(response.body)
      }, error => {
        reject(error)
      })
    })
  },
}
