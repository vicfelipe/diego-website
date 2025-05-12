# Diego Blog

Este é o repositório do site pessoal de Diego Corrêa, um designer gráfico especializado em identidade visual. O site foi desenvolvido para apresentar seus projetos, compartilhar informações sobre seu trabalho e permitir que visitantes entrem em contato ou solicitem orçamentos.

## Tecnologias Utilizadas

- **Nuxt.js**: Framework para Vue.js utilizado para criar o site.
- **Tailwind CSS**: Framework CSS para estilização.
- **Netlify CMS**: Gerenciador de conteúdo integrado para facilitar a criação e edição de posts no blog.
- **Vue Typed.js**: Biblioteca para animações de texto digitado.
- **Markdown**: Utilizado para criar e renderizar conteúdo dinâmico no blog.

## Estrutura do Projeto

- **Páginas**:
  - `/`: Página inicial com introdução e projetos.
  - `/sobre`: Página com informações sobre Diego Corrêa.
  - `/etapas`: Explicação das etapas do processo de criação de identidade visual.
  - `/contato`: Informações de contato e redes sociais.
  - `/blog`: Listagem de posts do blog.
  - `/blog/[slug]`: Página individual para cada post do blog.

- **Conteúdo**:
  - Os posts do blog estão localizados em `site/content/blog` no formato JSON.
  - As páginas estáticas estão configuradas no diretório `pages`.

- **Estilização**:
  - Configurações de fontes e breakpoints estão definidas em `tailwind.config.js`.
  - Fontes personalizadas são carregadas em `assets/css/tailwind.css`.

- **Plugins**:
  - O plugin `vue-typed-js` é utilizado para animações de texto na página inicial.

## Funcionalidades

- **Blog Dinâmico**: Os posts são gerados dinamicamente a partir de arquivos JSON.
- **Gerenciamento de Conteúdo**: Netlify CMS permite que o proprietário do site adicione ou edite posts diretamente.
- **Responsividade**: O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run generate`: Gera arquivos estáticos para deploy.

## Deploy

O site é configurado para ser hospedado no Netlify. O arquivo `netlify.toml` contém as configurações necessárias para o build e publicação.

## Autor

O site foi desenvolvido por [Victor Alencastro](https://www.victoralencastro.com.br) para Diego Corrêa.

## Licença

Este projeto está licenciado sob a licença MIT.