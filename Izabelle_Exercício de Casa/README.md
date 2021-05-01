# Desafio: Biblioteca

---
## Instruções para a realização do projeto:

1. Entre no repositório aqui mencionado (https://github.com/reprograma/On10-TodasEmTech-JavascriptII).

2. **Forkem o repositório para a conta pessoal de vocês**.

3. **Clonem no computador de vocês o repositório forkado em suas contas particulares**.

```
git clone [nome-do-repositorio-forkado-em-sua-conta-particular-no-GitHub]
```

**_ATENÇÃO_: Não modifiquem o conteúdo do projeto original forkado, apenas a que você copiou e renomeou!**

4. Crie uma `branch` com o seu nome

```
git checkout -b "seu-nome"`
```

5. Entrem na branch criada e resolva o desafio proposto. Para verificar em qual branch voce está:

```
git branch
```

Se estiver na master...

```
git checkout "seu-nome"
```

6. Ao finalizar a resolução do desafio proposto, façam o `commit` e o `push` da branch criada para a master do projeto que vocês forkaram em suas contas particulares.
(Verifique que você está na sua branch)

```
git add .
git commit -m "texto do seu commit"
git push origin master
```

7. Em *Settings*, desçam a página até o submenu *GitHub Pages*, e clique em *Check it out here*.
   
   ![settings](../assets/settings-github.png)

   ![github-pages-link](../assets/github-pages-link.png)

8. Em Github Pages, selecione em *source* a branch `main` e apertem em save.

![github-pages](../assets/githubpages-source-selection.png)

9.  Enviem o link do GitHub do projeto que vocês forkaram em suas contas particulares.

---

## 1. Introdução

O nosso cliente - Biblioteca - recebeu o site que criamos, mas pediu algumas alterações na versão que entregamos. São essas:

1. O cliente forneceu um array -  `let books` - que contem alguns títulos que eles deseja ver exibidos na tela;
   
2. O cliente deseja que seja retirada da listagem de livros adicionados pelo usuário a informação de "Data da inserção" - que continha a data e horário em que o livro foi adicionado no sistema.

Assim, vamos produzir uma nova versão do site previamente elaborado.

## 2. Detalhes Técnicos do Projeto:

1. A estrutura em HTML e CSS criada anteriormente pode ser mantida.
   
2. Contudo, a lógica do JavaScript será alterada, de acordo com o item 4 abaixo.

## 3. Tecnologias Utilizadas:

- HTML;
- CSS;
- *Vanilla.js*: não será permitida a utilização de bibliotecas nesse projeto.

## 4. Critérios Técnicos do Projeto: 

1. O formulário de inserção dos livros continuará contendo os seguintes campos obrigatórios: **Autor, Título, ISBN e Data de Publicação**. Contudo, sintam-se à vontade para inserirem novos campos no formulário caso prefiram.

2. O tratamento de erros para a adição de livros deve ser mantido - logo, um livro não pode ser adicionado sem as seguintes informações obrigatórias *(Autor, Título, ISBN e Data de Publicação)*. 

3. **No trecho responsável por listar os livros, deverá ser iterado o array `books` de forma a exibir na tela o acervo de livros disponibilizado pelo cliente. Esse array está declarado no arquivo `script.js`**.

4. Ao clicar no botão responsável por adicionar o livro, **as informações agora devem ser imediatamente inseridas no array `books.js` e visualizadas na listagem localizada abaixo do formulário**. 
   
5. Na propriedade *published* do array `books.js`, constam as datas e horários em que os livros foram publicados. **Essa propriedade deve ser tratada usando o objeto Date() para que seja exibida na listagem apenas a data**. 
   
6. O livro adicionado permanecerá podendo ser deletado pelo usuário.
   
7. A informação de data de inserção deverá ser removida da listagem de livros.**Na listagem dos livros inseridos, deverá vir uma informação nova, denominada "Data da inserção", contendo a data e o horário em que o livro foi inserido no sistema**.
   
8. É preciso seguir a estrutura de repositório contida nessa pasta "Exercício de Casa".
   
9.  *Estilização*: a estilização da página fica a critério da aluna. O CSS deve ser Responsivo. 
   
## 5. Itens Adicionais e não Obrigatórios do Projeto: 

1. Permanência dos Dados: encontrar um meio para que as informações permaneçam na tela do usuário mesmo após a atualização da página.

## 6. Links Úteis: 

**Sobre iteração de array e inserção de dados em um array:**

https://www.youtube.com/watch?v=vLfqrEP6weo

**Sobre eventuais erros na inserção de datas:**

https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_ahead



