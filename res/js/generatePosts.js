// json validator: https://jsonlint.com/

const binId = '65464abf54105e766fcb5347';
const jsonbinUrl = 'https://api.jsonbin.io/v3/b/65464abf54105e766fcb5347';

document.addEventListener('DOMContentLoaded', function () {
    fetch(jsonbinUrl, {
        headers: {
            "X-Master-Key": "$2a$10$aCVNFRfTpR15iGL3gERs8uUvTOw6AMZ34z2KMS.WKgXbT6.75mbBu"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response failed");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.record.posts) {
                createPosts(data.record.posts);
            } else {
                console.error("JSON data missing the posts property");
            }
            
        })
        .catch (error => {
            console.error("There was problem with the fetch operation", error);
        })
});

function createPosts(posts) {
    const main = document.getElementsByTagName('main')[0];
    console.log(main);
    
    posts.forEach(element => {
        let post = document.createElement("div"); // the post element
        post.className = "post";
        
        let postHeader = document.createElement("ul");  // the post header element
        postHeader.className = "post-header";

        let pfp = document.createElement("li");
        pfp.style.float = "left";
        
        let pfpImg = document.createElement("img");
        pfpImg.src = element.profile_picture != null ? element.profile_picture : "res/img/no-profile-picture-icon.png"; 
        pfpImg.alt = 'img'
        pfp.appendChild(pfpImg);
        
        let date = document.createElement("li");
        date.textContent = formatDate(element.date);

        postHeader.appendChild(pfp);
        postHeader.appendChild(date);
        
        let content = document.createElement("div");    // the content of the post 
        
        if (element.content_type === 'image' || element.content_type === 'mixed') {
            let img = document.createElement("img");
            img.src = element.image_content;
            img.alt = 'image';
            content.appendChild(img);
        }
        if (element.content_type === 'text' || element.content_type === 'mixed') {
            let text = document.createElement("p");
            text.textContent = element.text_content;
            content.appendChild(text);
        }

        let postFooter = document.createElement('ul');  // the post footer element
        
        let like = document.createElement('li');
        let likeImg = document.createElement('img');
        likeImg.src = "res/img/like-icon.png";
        likeImg.alt = "like";
        like.appendChild(likeImg);
        
        postFooter.appendChild(like);
        postFooter.className = "post-footer";

        post.appendChild(postHeader);
        post.appendChild(content);
        post.appendChild(postFooter);

        main.appendChild(post);
    });
}

// Formats the date into a string
function formatDate(inputDate) {
    const parts = inputDate.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const formattedDate = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

    return formattedDate;
}





