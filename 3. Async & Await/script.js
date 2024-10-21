//1.
const showPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
}
showPosts();


//-----------------------------------------------------
//2


//----------------------------------------------------
//3



