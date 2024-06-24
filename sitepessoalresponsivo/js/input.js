const colegas = {
    "nome": "bernardordm"
};

const apiUrl = `https://api.github.com/users/${colegas.nome}`;

async function fetchGitHubData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao obter dados do GitHub');
        }
        const data = await response.json();
        updateDOM(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function getParameterByName(name) {
    const url = new URL(window.location.href);
    const param = url.searchParams.get(name);
    return param ? param : '';
}

const nomeColega = getParameterByName('nome');

async function fetchGitHubData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao obter dados do GitHub');
        }
        const data = await response.json();
        updateDOM(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function updateDOM(data) {
    const avatarElement = document.getElementById('avatar');
    avatarElement.src = data.avatar_url;

    const nomeElement = document.getElementById('nomecolega');
    nomeElement.innerHTML = `<h4 style="color: #20BDFF;">${data.name}</h4>`;

    const identificadorElement = document.getElementById('identificador');
    identificadorElement.textContent = data.id;

    const linkGitHubElement = document.getElementById('linkgithub');
    linkGitHubElement.innerHTML = `<a style="text-decoration: none;" href="${data.html_url}">${data.html_url}</a>`;
}

fetchGitHubData();