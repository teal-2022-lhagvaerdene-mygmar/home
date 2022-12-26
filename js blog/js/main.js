fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    if(res.ok){
        return res.json()
    }
})
.then((data) => {
    console.log(data)
})