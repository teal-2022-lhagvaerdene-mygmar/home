fetch('https://dummyjson.com/users')
.then((res) => res.json())
.then((data) => {
    const one = data.users.filter((item1, index) => index < 5)
    console.log(data.users)
    console.log(one)
    const onep = one
    .map(
        (item1) =>
                `
                <li id="js"> 
                    <a href="simple.html?id=${item1.id}">
                    ${item1.lastName}
                    </a>
                </li>`
    ).join('')
    document.getElementById('card-para').innerHTML = onep

})