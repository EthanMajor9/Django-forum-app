console.log('hello world');

const helloworldBox = document.getElementById('hello-world');
const postsBox = document.getElementById('posts-box');

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success: ', response.text);
        helloworldBox.textContent = response.text;
    },
    error: function(error){
        console.log('error: ', error);
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        const data = response.data;
        console.log(data)
        data.forEach(idx => {
            postsBox.innerHTML += `
                ${idx.title} - <b>${idx.body}</b><br>
            `
        });
    },
    error: function(error){
        console.log('error', error);
    }
})