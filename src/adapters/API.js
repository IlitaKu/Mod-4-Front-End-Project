const post = (url, body) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(body)
        }
        ).then(resp => resp.json())
}

const get = url => {
    fetch(url)
    .then(resp => resp.json())
}

export default {
    post,
    get
}