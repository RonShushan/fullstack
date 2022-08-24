var albums = [{
        user: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
        user: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
]

for (var i = 0; i < posts.length; i++) {

    printUser(posts[i].user)
    PrintId(posts[i].id)
        // printTitle(posts[i].title)
        // printBody(posts[i].body)
}

function printUser(user) {
    console.log('user: ', user)
}

function PrintId(id) {
    console.log('id: ', id)
}