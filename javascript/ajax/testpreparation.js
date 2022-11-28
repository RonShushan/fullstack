let usersUrl = "https://jsonplaceholder.typicode.com/users"
let PostsUri = "https://jsonplaceholder.typicode.com/posts"
let users = []
let posts = []


function callToAjax(callbackfn, url) {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        success: function (data) {
            callbackFn(data)
        },
        error: function (error) {
            console.log('error: ', error)
        },
    })
}

function printUsersToHtmI(usersData) {
    users = usersData;

    users.map((user, index) => {
        printSingleUser(user)
    })
    console.log('printUsersToHtmI: ', users)
}

function setPosts(postsData) {
    posts = postsData
    console.log('posts: ', posts)
}
