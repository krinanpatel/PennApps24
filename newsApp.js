const apiKey = '7a9c9485a0e2755ac8c1b38f1cd6251b';
const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=technology&programming=en`;

console.log('Hello, console!');

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(response);


        if (data) {
            console.log("Ayo");
            const articles = data.articles;
            const newsList = document.getElementById('news-app');

            articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsList.appendChild(listItem);
            });
            console.log(array);
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchNews();