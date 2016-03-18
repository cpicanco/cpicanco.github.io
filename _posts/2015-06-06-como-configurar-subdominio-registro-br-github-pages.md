---
title: 'Configurando o Registro.br para o GitHub Pages.'
excerpt: 'como configurar um subdomínio do Registro.br para o GitHub Pages'
tags: ['passo a passo', 'web design']
language: pt-BR
copyright: <!--Copyright (c) 2015-2016 Carlos Rafael Fernandes Picanço.-->
---

### GitHub Pages

O [GitHub](http://github.com) é um excelente serviço de gestão e lançamento de *softwares*. Além disso ele pode servir para gerir e publicar uma infinidade de outros produtos que envolvam texto. Por exemplo, algumas pessoas inclusive tem usado o serviço para gerir receitas e tarefas do lar. O GitHub Pages, por outro lado, tem o objetivo formal de hospedar *sites* ou *blogs* de documentação de *softwares*. Se você for daqueles afeito ao Open Science, ou simplesmente gosta de compartilhar os produtos de sua atividade profissional, o GitHub Pages hospeda sua página gratuitamente. Há também a opção de comprar reservatórios privados, caso você assim prefira.

### Registro.br

O [Registro.br](http://www.registro.br/) é um serviço de [DNS](http://pt.wikipedia.org/wiki/Domain_Name_System), e assim como outros serviços do gênero, com ele você pode comprar um domínio. Por exemplo, eu comprei o domínio `rafael.picanco.nom.br` para personalizar os domínios gratuitos oferecidos pelo GitHub Pages (`cpicanco.github.io` e `cpicanco.github.com`). Essa personalização exigiu que eu configurasse o Registro.br de acordo com as [instruções e recomendações](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) do GitHub Pages.

> O Registro.br é o departamento do NIC.br responsável pelas atividades de registro e manutenção dos nomes de domínios que usam o .br. Também executamos o serviço de distribuição de endereços IPv4 e IPv6 e de números de Sistemas Autônomos (ASN) no país. "http://www.registro.br/sobre/"


### Configurar o Registro.br

Uma das recomendações mais úteis foi a de personalizar um subdomínio do Registro.br como domínio do GitHub Pages afim de tomar vantagem do [CDN](http://pt.wikipedia.org/wiki/Content_Delivery_Network) do GitHub Pages. Por exemplo, personalizar com este `sub.dominío.exemplo.br` que refere-se a este `dominío.exemplo.br`. Na prática, isso significou maior facilidade de compartilhar conteúdos de mídia (fotos e vídeos) nas redes sociais. O Facebook, por exemplo, possui diretrizes rigorosas para a entrega de conteúdos de mídia por meio do [Open Graph](https://developers.facebook.com/docs/sharing/opengraph). Para mais informações confira as [instruções oficiais](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/).

### Pré-requisitos

Pois bem, após criar uma página no GitHub Pages e comprar o tal domínio (pré-requisitos para os passos seguintes), como configurá-lo no Registro.br?

### Passo 1

Na sua página no GitHub (ou por meio de comandos `git` em um terminal), caso ainda não tenha feito isto, crie um novo arquivo chamado `CNAME` na raiz do seu diretório.

### Passo 2

Adicione apenas uma linha nesse arquivo com o `sub.dominío.exemplo.br` de sua preferência. O subdomínio que eu escolhi, por exemplo, foi `www.rafael.picanco.nom.br`. Caso ainda tenha dúvidas, [siga as instruções](https://help.github.com/articles/adding-a-cname-file-to-your-repository/) do GitHub Pages. O blog do [Willian Justen](http://willianjusten.com.br/) também pode ajudar.

### Passo 3

Faça login na sua conta no Registro.br.

### Passo 4

Clique sobre o domínio de sua preferência:
<p><img class="img-responsive center-block" src="../../../media/blog/registro-br-dominios-pagina-inicial.png" alt="Registro.br > Domínios - Página inicial" /></p>

### Passo 5

Clique sobre `Editar Zona`:
<p><img class="img-responsive center-block" src="../../../media/blog/registro-br-dominios-editar-zona.png" alt="Registro.br > Domínios - Editar Zona" /></p>

### Passo 6

Adicione os seguintes registros:

- o seu `dominío.exemplo.br` deve receber dois registros `A` (apex) com os ip's dos servidores do GitHub Pages (`192.30.252.153` e `192.30.252.154`);

- o seu `sub.dominío.exemplo.br` deve receber um registro `CNAME` com o nome da `suapágina.github.io` no GitHub Pages.

As minhas configurações ficaram assim:
<p><img class="img-responsive center-block" src="../../../media/blog/registro-br-dominios-edicao-de-zona.png" alt="Registro.br > Domínios - Edição de Zona" /></p>

### Passo 7

Tudo Pronto! Para conferir os efeitos, aguarde o tempo recomendado pelo Registro.br (`de 24h`) para a atualização dos servidores e propagação das novas configurações.