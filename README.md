## ❕AVISO ❕

**Gostaria de informar que precisei remover o vídeo de background da tela de login do arquivo principal `index.html`. O motivo é que o arquivo de vídeo estava excedendo o limite de tamanho permitido pelo GitHub, o que estava impedindo o push do projeto para o repositório remoto.**

- Caso queira ver como ficaria o projeto original com o vídeo no fundo, estou disponibilizando o arquivo no Google Drive. Se alguém for fazer um clone do repositório, basta adicionar o vídeo na pasta `img` ou criar uma subpasta `video` e arrastar o arquivo.
```html
<video autoplay muted loop id="bg-video">
    <source src="pasta/nome do arquivo" type="video/mp4">
</video>

<!--Project_09-05_Full HD.mp4-->
```
- Segue o link: https://drive.google.com/file/d/1u3uJgSL1ZH8y2uQn04sATlJwNVIcBaoA/view?usp=drive_link

## Cult film production

**Durante os 5 dias de imersão da Alura, meu projeto consistiu em criar uma aplicação de filmes com o objetivo de permitir pesquisas sem ajuda de APIs externas.**

 Basicamente, criei uma constante com o nome `movies`, e dentro dela coloquei alguns filmes de base.

```javascript
const movies = [
    {
        title: "Spider-Man 2",
        year: 2004,
        director: "Sam Raimi",
        genre: "Superhero, Drama, Action, Adventure",
        rating: 7.5,
        poster: "capa_do_filme"
    },
    {
        title: "The Last of Us",
        year: 2023,
        director: "N/A",
        genre: "Action, Adventure",
        rating: 8.7,
        poster: "capa_do_filme"
    },
    {
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        genre: "Sci-Fi",
        rating: 8.6,
        poster: "capa_do_filme"
    },
   ......................................................
];
```

**Mas antes, precisamos criar uma função para chamar essas informações.** 

Para isso, aplicamos um id="movieTitle" ao input e id="searchButton" ao botão, com a função onclick, quando eu digitar o nome do filme e clicar no botão, ele me retorna o filme que escolhi.
```javascript
function searchMovie() {
    const input = document.getElementById('movieTitle').value.toLowerCase();
    const movieDetails = document.getElementById('movieDetails');
    const mainContent = document.getElementById('mainContent');
    movieDetails.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(input));

    if (filteredMovies.length > 0) {
        mainContent.style.display = 'none'; // Oculta a seção principal
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="Poster do filme">
                <h3>${movie.title} (${movie.year})</h3>
                <p>Diretor: ${movie.director}</p>
                <p>Gênero: ${movie.genre}</p>
                <p>Nota IMDb: ${movie.rating}</p>
            `;

            movieDetails.appendChild(movieCard);
        });
    } else {
        movieDetails.innerHTML = '<p>Nenhum filme encontrado.</p>';
    }
}
```
**Por que usei `const` em vez de `let`?**

Na programação em JavaScript, `const` e `let` são usados para declarar variáveis, mas eles têm diferenças importantes em como são usados e como se comportam.

**Imutabilidade do Identificador:**
- Const: Utilizei `const` para declarar o array `movies` porque o identificador `movies` deve permanecer o mesmo ao longo da execução do código. Com `const`, estou indicando que a variável `movies` não deve ser reatribuída a um novo array. Isso significa que você não pode fazer algo como `movies = outroArray`, e isso ajuda a evitar erros acidentais que podem surgir ao tentar reatribuir variáveis.

- Let: Se eu usasse `let`, poderia reatribuir a variável `movies` a um novo valor, o que não é necessário ou desejável neste caso. A escolha de `const` é mais adequada aqui porque o conteúdo da variável pode ser modificado, mas o identificador (ou seja, o nome da variável) deve permanecer constante.

**Intenção do Código:**

- Utilizar `const` reflete a intenção de que a variável não deve ser reatribuída. Mesmo que o conteúdo do array `movies` possa mudar (por exemplo, adicionar ou remover filmes), o próprio array não deve ser substituído por outra coisa. Isso torna o código mais previsível e menos propenso a erros, pois os desenvolvedores sabem que `movies` sempre se refere ao mesmo array.

**Segurança e Manutenção:**

- Ao usar `const`, o código se torna mais seguro e fácil de manter. Ao indicar que a variável não deve ser reatribuída, você reduz a chance de bugs relacionados a mudanças acidentais no identificador. Isso ajuda a garantir que a estrutura de dados não seja inadvertidamente substituída, mantendo a integridade dos dados.


**Responsividade**
O site está responsivo para qualquer dispositivo, seja ele desktop ou mobile.

Aqui não teve muito mistério, apenas utilizei `@media` e fui ajustando tamanhos consideráveis para os objetos não ficarem quebrados.

## Página de Login

**Faixa Promocional**

- Uma faixa na parte superior da página exibindo uma oferta especial de planos trimestrais.
- A estrutura é simples, com um parágrafo (`<p>`) que exibe o texto promocional.
```html
<section class="promo-banner">
    <p>Plano trimestral a partir de 38,90</p>
</section>
```
**Vídeo de Fundo**

- Um vídeo em formato `mp4` é utilizado como fundo para a página, reproduzido automaticamente, sem som e em loop.
```html
<video autoplay muted loop id="bg-video">
    <source src="img/Project_09-05_Full HD.mp4" type="video/mp4">
</video>
```

**Formulário de Login**
- O formulário de login permite que o usuário insira seu e-mail e senha. Ao clicar no botão de "Entrar", o formulário valida as credenciais. Se o e-mail for `Alura` e a senha `alura223`, o usuário será redirecionado para a página de filmes.
- O código JavaScript associado impede o envio do formulário por padrão e faz a verificação das credenciais.
```javascript
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (email === 'Alura' && password === 'alura223') {
        window.location.href = 'movie.html';
    } else {
        alert('Email ou senha inválidos.');
    }
});
```

**Modal de Preços**

- O site inclui um modal que exibe as opções de planos de assinatura. O modal é aberto ao clicar no link "Veja nossos planos" e pode ser fechado ao clicar no botão de fechar (`&times;`) ou fora do modal.
- A estrutura do modal inclui três planos: Mensal Básico, Trimestral e Anual Vip, cada um com seus respectivos benefícios.

```html
<a href="#" id="open-modal">Veja nossos planos</a>
<div id="price-modal" class="modal">
    <!-- Conteúdo do modal com planos -->
</div>
```
O comportamento do modal é controlado por JavaScript, que mostra e esconde o modal e o fundo de sobreposição (`overlay`).
```javascript
openModalButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    overlay.style.display = 'block';
});
```

**Consentimento de Cookies**

- A página inclui uma faixa de consentimento de cookies que aparece ao carregar o site. O usuário pode aceitar os cookies clicando no botão.
- O código JavaScript gerencia o comportamento da faixa, verificando se o usuário já aceitou os cookies antes de exibir a mensagem.

```javascript
if (!getCookie('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
}
```

**Como usar?**

- Faça o download do projeto ou clone o repositório.
- Abra o arquivo `index.html` em um navegador.
- Use o formulário de login com as credenciais: E-mail: `Alura` Senha: `alura223`

Navegue pelos planos de preços clicando em "Veja nossos planos".

**Tecnologias Utilizadas**

- HTML5
- CSS3
- JavaScript

**Melhorias Futuras**

- Adicionar validação mais robusta no login, integrando com um backend real.
- Implementar a funcionalidade de cadastro de novos usuários.
- Melhorar mais ainda o design responsivo para telas ainda menores.
