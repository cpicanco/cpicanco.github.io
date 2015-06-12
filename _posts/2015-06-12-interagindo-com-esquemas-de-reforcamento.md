---
layout: Post
title: Interagindo com Esquemas de Reforçamento
excerpt: um protótipo para o ensino de esquemas de reforçamento
tags: ['software', 'protótipo']
published: True
language: pt-BR
copyright: <!--Copyright (c) 2015 Carlos Rafael Fernandes Picanco-->
image: rat-press-bar-skinner-box.jpg
---

Já faz um bom tempo que escrevi um programa chamado *Schedules of Reinforcement*. Como o nome sugere, deve ter alguma coisa haver com `Esquemas de Reforçamento`. O programa permite você interagir com alguns esquemas. A medida que você emite respostas sobre um `Operando`, um gráfico de frequência acumulada vai sendo construído. Considero-o como um protótipo de um programa para o ensino de Esquemas de Reforço de maneira interativa. Você pode baixar ele clicando [AQUI](https://github.com/cpicanco/validation_project/releases/download/v0.0.2.2/schedules_test.exe). Se preferir, você também pode ver o [código fonte](https://github.com/cpicanco/validation_project/tree/master/tests/schedules) (GPL 3). Até então os seguintes esquemas foram implementados:

- `EXT`, extinção;
	- não há consequência programada.

- `CRF`, reforçamento contínuo (*continuous reinforcement*);
	- programa-se a apresentação de uma consequência para cada resposta.

- `FR x`, razão fixa (*fixed ratio*);
	- programa-se a apresentação de uma consequência para `x` respostas

- `VR x d`, razão variável (*variable ratio*);
	- programa-se a apresentação de uma consequência para `r` respostas onde `r = x +- d`:
		- sendo `x` a média de respostas esperada;
		- sendo `d` um desvio em relação a média;

- `FI t`, intervalo fixo (*fixed interval*);
	- programa-se a apresentação de uma consequência para a primeira resposta após transcorrido um intervalo de tempo `t`.

- `VI t d`, intervalo variável (*variable interval*);
	- programa-se a apresentação de uma consequência para a primeira resposta após transcorrido um intervalo de tempo `T` onde `T = t +- d`.
		- sendo `t` a média de intervalos esperada;
		- sendo `d` um desvio em relação a média;

- `DRH r t`, reforçamento diferencial de taxas altas (differential reinforcement of high rates);
	- programa-se a apresentação de uma consequência para `x` respostas se, e apenas se, elas forem emitidas dentro de um intervalo de tempo `t`. Isto é, há o reinício da contagem de respostas ao final do tempo `t` sempre que o número de respostas for menor do que `r`.

- `DRL t`, reforçamento diferencial de taxas baixas (differential reinforcement of low rates);
	- programa-se a apresentação de uma consequência para uma resposta se, e somente se, essa resposta tiver side precedida de um intervalo de tempo `t` sem emissão dessa resposta.

E é isso! Faça bom proveito!

P.S.: Aproveito para deixar meus agradecimentos e dar crédito ao Dráusio Capobianco (desenvolvedor de grande parte do código), sem seu trabalho esse programa não existiria. Grato!