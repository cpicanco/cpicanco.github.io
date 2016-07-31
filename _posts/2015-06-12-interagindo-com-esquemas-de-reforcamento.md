---
title: Interagindo com Esquemas de Reforçamento
excerpt: um protótipo para o ensino de esquemas de reforçamento
tags: ['ciência', 'software', 'programação']
language: pt-BR
en: /2015/06/12/interacting-with-schedules-of-reinforcement.html
copyright: <!--Copyright (c) 2015-2016 Carlos Rafael Fernandes Picanço-->
image: rat-press-bar-skinner-box.jpg
---

Já faz um bom tempo que escrevi um programa chamado *Schedules of Reinforcement*. Como o nome sugere, deve ter alguma coisa haver com `Esquemas de Reforçamento`. O programa permite você interagir com alguns esquemas. A medida que você emite respostas sobre um `Operando`, um gráfico de frequência acumulada vai sendo construído. Considero-o como um protótipo de um programa para o ensino de Esquemas de Reforço de maneira interativa. Você pode baixar o programa clicando por meio dos links abaixo:

- [Windows](https://github.com/cpicanco/stimulus_control/releases/download/v0.0.2.2/schedules_test_win.exe)
- [Debian](https://github.com/cpicanco/stimulus_control/releases/download/v0.0.2.2/schedules_test_deb)
- [Source (GPL 3)](https://github.com/cpicanco/stimulus_control/tree/master/tests/schedules)

Não é necessário instalação, basta executar o arquivo. Sinta-se encorajado a deixar comentários!

Até então, os seguintes esquemas foram implementados:

- **`EXT`**, extinção
    - não há consequência programada.

- **`FT x`**, tempo fixo (*fixed time*)
    - programa-se a apresentação e um consequência para o final de um intervalo de tempo `x`, independente da ocorrência de respostas.

- **`VT t d`**, tempo variável (*variable time*)
    - programa-se a apresentação e um consequência para o final de um intervalo de tempo `x`, independente da ocorrência respostas, onde:
      `x = t +- d`
    - sendo `t` a média de intervalos esperada.
    - sendo `d` um desvio em relação a média.

- **`CRF`**, reforçamento contínuo (*continuous reinforcement*)
    - programa-se a apresentação de uma consequência para cada resposta.

- **`FR x`**, razão fixa (*fixed ratio*)
    - programa-se a apresentação de uma consequência para `x` respostas.

- **`VR r d`**, razão variável (*variable ratio*)
    - programa-se a apresentação de uma consequência para `x` respostas onde:
      `x = r +- d`.
    - sendo `r` a média de respostas esperada.
    - sendo `d` um desvio em relação a média.

- **`FI x`**, intervalo fixo (*fixed interval*)
    - programa-se a apresentação de uma consequência para a primeira resposta após transcorrido um intervalo de tempo `x`.

- **`VI t d`**, intervalo variável (*variable interval*)
    - programa-se a apresentação de uma consequência para a primeira resposta após transcorrido um intervalo de tempo `x` onde:
      `x = t +- d`
    - sendo `t` a média de intervalos esperada.
    - sendo `d` um desvio em relação a média.

- **`DRH x t`**, reforçamento diferencial de taxas altas (differential reinforcement of high rates)
    - programa-se a apresentação de uma consequência para `x` respostas se, e apenas se, elas forem emitidas dentro de um intervalo de tempo `t`. Isto é, há o reinício da contagem de respostas ao final do tempo `t` sempre que o número de respostas for menor do que `x`.

- **`DRL t`**, reforçamento diferencial de taxas baixas (differential reinforcement of low rates)
    - programa-se a apresentação de uma consequência para uma resposta se, e somente se, ela tiver sido precedida por um intervalo de tempo `t` sem emissão dessa resposta.

E é isso! Faça bom proveito!

P.S.: Aproveito para deixar meus agradecimentos e dar crédito ao Dráusio Capobianco (desenvolvedor de grande parte do código), sem seu trabalho esse programa não existiria. Grato!