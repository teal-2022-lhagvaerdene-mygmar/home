fetch('https://dummyjson.com/posts')
.then((res) => res.json())
.then((data) => {
    const one = data.posts.filter((item1, index) => index < 1  )
    console.log(one)
    const onep = one
    .map(
        (item1) =>
                `<p> 
                    <a href="single.html?id=${item1.id}">
                    ${item1.title}
                    </a>
                </p>`
    ).join('')
    document.getElementById('card-para').innerHTML = onep

})