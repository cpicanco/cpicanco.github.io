---
layout: Post
title: 'Object Pascal e Análise do Comportamento'
tags: ['ciência', 'programação']
excerpt: 'Introdução ao desenvolvimento de interfaces gráficas com Lazarus e Free Pascal'
language: pt-BR
copyright: <!--Copyright (c) 2017 Carlos Rafael Fernandes Picanço.-->
---

O objetivo deste capítulo é de:

- Informar o leitor ou leitora sobre a existência de diferentes dialetos derivados do Pascal.
- Situar o leitor ou leitora sobre o dialeto utilizado neste guia.
- Apresentar um recorte da comunidade de desenvolvedores Pascal.
- Apresentar um recorte básico do dialeto Free Pascal.
- Introduzir aspectos básicos do ambiente de programação Lazarus e Free Pascal.
- Introduzir o desenvolvimento de aplicações visuais nesse ambiente por meio de exemplos.

Os exemplos foram pensados para uma audiência de analistas do comportamento,
especialmente aqueles lidando com participantes de pesquisa que devem interagir com uma interface gráfica.
Por meio desses exemplos, o leitor ou leitora será guiado à resolução de problemas recorrentes:

- Como apresentar estímulos (antecedentes e consequentes)?
- Como esperar por respostas?
- Como rastrear e registrar tempo e frequência de estímulos e respostas?

## Pré-requisitos

- Inglês: leitura e escrita instrumental.
- Conhecimento básico de informática: teclado e mouse.
- Conhecimento básico sobre o sistema operacional de escolha: como executar um programa?
- Conhecimento básico sobre interfaces gráficas comuns será necessário, por exemplo,
busca por controles visuais: o que são janelas, o que é um menu superior, etc. 

## Pascal - Breve histórico

A linguagem de programação Pascal,
como originalmente arquitetada pelo professor Niklaus Wirth
entre 1968 e 1971 (Jensen & Wirth, 1973)
tinha como objetivo servir ao ensino introdutório de programação estruturada em suas aulas.
Assim inicia a entrevista de Severance (2012) a Wirth.
Embora Wirth também tenha ajudado a montar o sistema
em grandes computadores de outras universidades, ele relata que
a popularização de dialetos originados do Pascal só viria na década de 80 com o advento do microcomputador,
de sistemas integrados de desenvolvimento e da redução de custo dos compiladores.

Quando comparado com linguagens como BASIC, Assembly, ALGOL e FORTRAN,
o Pascal de Wirth possuia um melhor balanço entre boa legibilidade,
modularidade e flexibilidade. Severance (2012), considera que a linguagem,
por ser estruturada, era muito mais adequada para
a construção de programas com qualidade de produção. 
Ainda assim, dando continuidade à entrevista, Wirth foi reconhecendo
demandas não contempladas pelo Pascal,
o que o levou a extendê-lo e reformulá-lo, criando outros dialetos derivados.

Mas aquela popularização ocorreria por meio de ainda outros dialetos, independentes,
com suas próprias extensões e melhorias. Esses outros dialetos, em alguns casos,
inclusive sendo adotados como dialeto padrão em cursos de introdução à programação.
Como consequência, algumas gerações naquele período (70-80) aprenderam
a pensar computacionalmente por meio de um dialeto derivado ou original.
É razoável considerar, portanto, que algumas gerações entraram no mercado de trabalho
tendo um ou outro como primeira liguagem de programação. 

## Pascal - Padronização e Diversificação comercial

Não por acaso, com tal mão de obra disponível,
bases de código milionárias foram escritas em dialetos do Pascal;
por exemplo, como os primeiros sistemas operacionais da Apple Computers Inc. (1985).
Por conta do crescente uso comercial de dialetos derivados do Pascal,
o dialeto original foi padronizado (ISO 7185:1983), revisado (ISO 7185:1990) e expandido (ISO 10206:1990)
com o objetivo de corrigir ambiguidades e assegurar a sua portabilidade.
Atualmente, compiladores como o GNU Pascal (versão 3.4.x) e o Free Pascal (versão 3.x.x) oferecem,
em algum nível, suporte a essas padronizações.

Uma linguagem sem ambiguidades e portável permite que um programa, uma vez escrito,
seja traduzido para a linguagem da máquina alvo independente do compilador utilizado.
A despeito dos esforços, e embora sejam desejáveis de um ponto de vista técnico e prático,
tais padronizações não figuram entre os dialetos mais populares derivados do Pascal.
Outros dialetos (como o Delphi Pascal, Apple Pascal e Free Pascal)
tornaram-se os "padrões de fato" no mercado.

## Object Pascal - Um dialeto extendido

Ao longo das décadas de 70 e 80 houve uma popularização da chamada "programação orientada a objetos".
Surgia a necessidade de se extender a sintaxe do Pascal estruturado tornando-o mais permissivo ao novo estilo;
originava-se então o Object Pascal.
A orientação ao objeto tornava-se um modelo de referência para o planejamento e a programação de interfaces gráficas.
Foi nesse contexto que interfaces de desenvovimento integrado como o Turbo Pascal (Borland International Inc, 1984/1983 e sucessores, como o Delphi) e o Lazarus (lançado em 2001, ver [https://en.wikipedia.org/wiki/Lazarus_(IDE)](https://en.wikipedia.org/wiki/Lazarus_%28IDE%29)) surgiram.   

## Free Pascal e Lazarus - um ambiente de desenvolvimento integrado

Os exemplos neste guia foram escritos por meio do ambiente integrado de desenvolvimento Lazarus (versão 1.8RC4; Lazarus IDE, 2017)
e do compilador Free Pascal (Versão 3.0.4; Klämpfl et al, 2017).
O ambiente contém recursos que reduzem a barreira de entrada na complexa cadeia que é o desenvolvimento de aplicações compiladas.
Um compilador é um programa que traduz a sintaxe de alto nível (mais portável),
para uma linguagem de baixo nível (específica de uma máquina alvo).
O produto final é um arquivo nativamente executável e que não demanda instalação.

Compilador (Free Pascal) e interface (Lazarus) são distribuídos por meio de licenças livres (GPL).
Parte do ambiente também é licenciado (LGPL)
de maneira a permitir a distribuição de aplicações comerciais com código fonte privado.
O ambiente está disponível para sistemas operacionais como o OSX,
Windows e baseados no kernel Linux (Debian, Ubuntu)
e agrega uma grande comunidade de desenvolvedores independentes.
Os principais meios de informação e comunicação nesse ecossistema são:

- [A wiki](http://wiki.freepascal.org/): http://wiki.freepascal.org/
- [O fórum](http://forum.lazarus.freepascal.org/): http://forum.lazarus.freepascal.org/
- As listas de emails: 
  - [Lazarus](http://lists.lazarus.freepascal.org/mailman/listinfo/lazarus)
  - [Free Pascal](https://www.freepascal.org/maillist.var)
- Os sites oficiais:
  - [Pacotes](http://packages.lazarus-ide.org/): http://packages.lazarus-ide.org/
  - [Fundação](https://foundation.freepascal.org/): https://foundation.freepascal.org/
  - [Lazarus](http://lazarus-ide.org/): http://lazarus-ide.org/
  - [Free Pascal](https://www.freepascal.org/): https://www.freepascal.org/
- [O rastreador de bugs](http://bugs.freepascal.org/): http://bugs.freepascal.org/

Diversas coleções de unidades, componentes e pacotes reunidos nas chamadas "bibliotecas" já vem pré-instalados. Eles permitem a execução de tarefas gerais de programação:  
- Free Pascal Runtime Library (RTL).
- Free Pascal Component Library (FCL).
- Lazarus Component Library (LCL).

Outras coleções de terceiros também frequentemente utilizadas
estão reunidas por meio do pacote
"Gerenciador Online de Pacotes".
O pacote é distribuído juntamente com o Lazarus e
pode ser instalado por meio do menu "Pacotes",
opção "Instalar pacotes", item "OnlinePackageManager"
na lista à direita.

Ao explorar o ecossitema por meio de buscadores online,
seja em busca de ajuda, seja em busca de contribuições de terceiros,
utilize palavras-chave como "free pascal guide", "lazarus forum",
"component", "package", "componente", "pacote"
juntamente com os termos específicos de seu interesse.

## Free Pascal e Lazarus - Instalação e configuração do ambiente de desenvolvimento.

Baixe os arquivos de instalação correspondentes para o seu sistema no sítio de hospedagem oficial (https://sourceforge.net/projects/lazarus/files/):

- [GNU/Linux 64 bits](https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/Lazarus%201.8.0RC4/)
- [GNU/Linux 32 bits](https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20i386%20DEB/Lazarus%201.8.0RC4/)
- [Mac OS X 32bits](https://sourceforge.net/projects/lazarus/files/Lazarus%20Mac%20OS%20X%20i386/Lazarus%201.8.0RC4/)
- [Windows 64 bits](https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/Lazarus%201.8RC4/)
- [Windows 32 bits](https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2032%20bits/Lazarus%201.8RC4/)

Em seguida execute o instalador (ou instaladores, se Linux e OSX). Caso seja solicitado, forneça os privilégios de administrador do sistema operacional ao instalador. O processo de instalação e configuração mínima é automático.

Este guia fará referência aos nomes dos controles da interface Lazarus tal como traduzidos para o português brasileiro, portanto recomenda-se a escolha deste idioma ao longo da instalação. Opcionalmente, após a instalação, altere o idioma no menu superior Ferramentas->Opções da IDE->Ambiente->Geral->Idioma.

## Lazarus - criando e executando uma aplicação

<p>
<img class="img-responsive center-block"
       src="/media/blog/laz_fpc_ac_intro/Figure1.jpg"
       alt="Janelas Utilizadas neste guia." />
</p>

Figura 1. Janelas utilizadas neste guia. Legenda: 1, menu superior do lazarus; 2, inspetor de objetos; 3, editor de código; 4, janela principal da aplicação; 5, mensagens; 6, console.

Ao executar o Lazarus pela primeira vez (por meio do comando "startlazarus" em sistemas Linux), uma aplicação (programa com uma interface gráfica) é criada automaticamente. Execute a aplicação pressionando F9 (Executar). Essa aplicação padrão é uma janela (um formulário) flutuante com funcionalidades básicas como fechar, minimizar, maximizar, restaurar, mover, redimensionar, entre outras. Essa janela também já vem preparada para receber eventos como aqueles produzidos por mouse e teclado.

## Lazarus - encerrando uma aplicação

Para fechar a aplicação normalmente, utilize o comando correspondente na barra superior da janela. Para forçar o fechamento, selecione uma janela do Lazarus, por exemplo clicando sobre a janela "Editor de Código", e pressione CRTL+F2 (Parar). O primeiro método permite avaliar a ocorrência de erros na cadeia de eventos de encerramento da aplicação. O segundo não produz a cadeia normal de eventos de encerramento e permite a interrupção da aplicação (travada), especialmente quando erros lógicos produzem espera infinita.

## Lazarus - salvando o projeto de uma aplicação

Após fechar a aplicação, pressione CRTL+S e salve o projeto. Recomenda-se sempre renomear os nomes padrões para nomes que resumem a função do arquivo. O código fonte da aplicação padrão é composto por três arquivos principais. Dois arquivos (unit1.pas e unit1.lfm) compõe um "formulário" ou "janela" e o outro arquivo (project1.lpr) compõe um "projeto" ou "programa". Adicionalmente, um arquivo de configuração do projeto (project1.lpi) e arquivos de recursos auxiliares também serão automaticamente criados ao salvar. Apenas o arquivo "unit1.pas" será editado diretamente. Renomeie esse arquivo para "Forms.Main.pas". Renomeie o arquivo de configuração do projeto para "ProjetoPiloto.lpi" (o arquivo *.lpr será renomeado automaticamente). Como muitos arquivos estão envolvidos, recomenda-se reservar uma pasta para cada projeto.

## Lazarus - depurando uma aplicação

Um depurador (debugger) é um programa que auxilia na detecção e correção de erros. Ao executar a aplicação padrão por meio do lazarus (pressionando F9, por exemplo) informações que permitem melhor depuração são adicionadas ao executável. O depurador padrão utilizado é o GNU Debugger (GDB). Uma descrição detalhada de estratégias de depuração está fora do escopo do presente guia. Entretanto, recomenda-se explorar duas delas:

- Observação em tempo real do conteúdo de variáveis por meio do menu Exibir->Janelas de depuração->Observadores;
- Adição de ponto de parada (Break Point) em linhas de código permite execução linha a linha por meio dos controles "Passar dentro" (F7) e "Passar sobre" (F8);

Para os objetivos deste guia, estratégias básicas de depuração serão apresentadas na sessão de exemplos por meio da janela "Console". Para exibi-la, pressione CRTL+ALT+O. Ao executar uma aplicação por meio do Lazarus, essa janela é a saída padrão do texto escrito por meio do construto básico da saída (WriteLn) apresentado nas sessões seguintes. 

## Free Pascal - Sintaxe básica

Nos tópicos seguintes, sempre que possível, os elementos da linguagem Free Pascal serão apresentados de maneira auto-explicativa nos campos de código. Esta sessão foi planejada para ser um recurso de consulta e permitir a leitura corrida.

### Comentários

Textos comentados são ignorados pelo compilador e permitem a documentação do funcionamento e significado de trechos do código:

```
// Esta linha está comentada, pois inicia com duas barras.

{
  Este trecho também está comentado,
  pois está entre chaves simples.
}

Este trecho não está comentado, // mas este está.

Este não, { este sim } este não.

```

### Programa, Blocos, Início, Fim

Um programa pascal é um conjunto de blocos. Ele deve conter no mínimo um bloco de declaração de seu título e um bloco de comandos. Note que o ponto final demarca o final de um módulo. Outros comandos, blocos de comandos e declarações dentro de um módulo devem ser finalizados com ponto e vírgula: 


```
program ProjetoPiloto    // declara o identificador, o título do programa
;                        // finaliza o bloco de declaração do nome 
begin                    // inicia o bloco de comandos central
  WriteLn('Olá Mundo!'); // imprime o texto 'Olá Mundo!' no console
end.                     // finaliza o bloco de comandos central e o módulo
```

A linguagem não diferencia maiúsculas de minúsculas, portanto o seguinte programa é idêntico ao anterior:
```
PROGRAM projetopiloto;
BEGIN                   
  writeln('Olá Mundo!');               
END.                    
```

A linguagem não é sensível à identação (recuos, paragráfos, espaçamentos, etc.) por meio de caracteres não imprimíveis como o tab, espaço ou final de linha.
Isto significa que o seguinte programa também é idêntico ao anterior:
```
program projetopiloto;begin WriteLn('Olá Mundo!');end.                    
```
Embora idêntico, diferentes convenções de identação existem com o objetivo de melhorar a legibilidade do código. A linguagem permite que você crie sua própria convenção.

### Diretivas de compilação

Diretivas de compilação são instruções ao compilador (ao Free Pascal), não instruções do programa (neste contexto, o projeto piloto).
Elas podem incluir elementos, assim como mudar o significado de elementos sintáticos de um dialeto.
As seguintes diretivas especificam o dialeto utilizado neste guia.
Ele corresponde ao dialeto da aplicação padrão do Lazarus (a interface gráfica):   

```
// diretivas incluidas por padrão nos módulos criados pelo Lazarus
{$MODE ObjFPC}   // habilita a sintaxe de orientação ao objeto
{$H+}            // Torna o tipo String um apelido para o tipo AnsiString

// diretivas não incluidas por padrão nos arquivos, mas passadas por padrão pelo Lazarus ao compilador  
{$COPERATORS ON} // habilita os operadores +=, -=, *= e /=
{$GOTO ON}       // habilita as palavras-chave label e goto
{$INLINE ON}     // habilita a declaração de procedimentos inline
```

### Unidades 

Uma unidade é um módulo que permite o controle de sua visibilidade a outros módulos.
Ela possui, necessariamente, um bloco público, visível a outros módulos, e um bloco privado, invisível a outros módulos.

```
unit Unit1;          // unit1.pas

interface            // início do bloco público da unidade                

uses Unit2, Unit3;   // declara um bloco de uso com duas unidades

{
  As interfaces das unidades 2 e 3 são visíveis em toda a unidade 1,
  mas a interface da unidade 4 é visível apenas na implementação da unidade 1.
}

implementation       // final do bloco público e início do bloco privado da unidade

uses Unit4;          // a cláusula uses inicia um "bloco de uso" e permite usar outras unidade 

end.                 // final da unidade 
```
Um módulo (programa ou unidade) pode ver a interface, mas não a implementação, de unidades em um bloco de uso.
Se duas unidades diferentes declaram interfaces iguais, a interface da última unidade na lista é usada.

### Atribuição, Variáveis, Constantes e Tipos

Uma variável é um identificador associado a um espaço reservado na memória do computador.
Toda variável possui um tipo e precisa estar declarada em um bloco antes de ser usada. 
```
var                       // bloco de declaração
  b : boolean = true;     // declara b como boleano inicializando-o como true
  i : integer = -1;       // declara i como número inteiro inicializando-o como -1
  s : string  = 'Texto';  // declara s como texto inicializando-o como "Texto" 
begin
  WriteLn(b);             // converte o valor para texto e o mostra no console
  WriteLn(i);             // converte o valor para texto e o mostra no console
  WriteLn(s);             // mostra o texto no console
end. 
```

Diferentes valores de um mesmo tipo podem ser atribuidos a uma variável no bloco de comandos.
Constantes simples, diferentemente, podem ser declaradas, mas não podem receber atribuição de valores.

```
const                   // bloco de declaração de constantes
  tab = #9;             // declara uma constante com um caractere não imprimível (tab)
var          
  b : boolean;         // declara b como boleano  
  i : integer;         // declara i como inteiro
  s : string;          // declara s como texto 
begin
  b := false;          // atribui false à variável b
  i := 10;             // atribui 10 à variável i
  s := 'texto';        // atribui "texto" à variável s
  WriteLn(b, tab, i, tab, s);  // imprime as variáveis no console
  // tab := #32; não é possível
end. 
```

### Operadores

Operadores são símbolos reservados para operações comuns sobre variáveis (de tipos conhecidos).
Consulte o guia de referência da linguagem para informações detalhadas sobre todos os operadores suportados ( https://www.freepascal.org/docs-html/ref/refse84.html ):

```
var
  b : boolean = false;
  i : integer = 10;
  s : string  = 'texto';
begin
  // Operações Boleanas
  b := not B;          // inverte o valor de B (para true)
  b := not B;          // inverte o valor de B (para false)
  b := 10 > 9;         // dez é maior do que nove? true
  b := 10 < 9;         // dez é menor do que nove? false
  b := 10 = 9;         // dez é igual à nove? false
  b := 10 <> 9;        // dez é diferente de 9? true

  //  cuidado! a comparação entre texto diferencia maiúsculas e minúsculas
  b := s = 'texto';    // os textos são iguais? true
  b := s <> 'Texto';   // os textos são diferentes! true

  // Operações Aritméticas
  i := -i;             // inverte o sinal de i para negativo
  i := -i;             // inverte o sinal de i para positivo
  i := 10 + 10;        // soma entre dois inteiros
  i := 10 - 1;         // diferença entre dois inteiros
  i := 10 * 10;        // multiplicação entre dois inteiros
  i := 10 div 10;      // divisão entre dois inteiros
  i := 10 mod 3;       // resto da divisão entre dois inteiros

// Operações com texto
  s := 'texto'+'texto'+'texto';     // concatenar texto  
end.
```
### Condições

Programas frequentemente realizam operações condicionalmente. Condições podem ser declaradas por meio de dois tipos de estruturas:

```
var
  i : integer;
  s : string = 'a';
begin
  
  // a primeira permite testes boleanos e a bifurcação entre resultados verdadeiros e falsos 
  if True then
    begin 
      i := 1; // este comando será executado
    end
  else
    begin
      i := 0; // mas este não
    end;

  // a segunda permite testes sobre valores e texto e a bifurcação entre diversos resultados
  case i of
    0..1 : i := 0; // este comando será executado
    2..4 : i := 1; // este não
    5    : i := 2; // este não
  else
    i := -1;       // este seria se nenhum dos valores especificados fosse encontrado
  end;

  case s of
    'a'    : i := 0; // este comando será executado
    'b'    : i := 1; // mas este não
    'casa' : i := 2; // este também não
  else
    i := -1;         // e este não
  end;
end.
```

### Laços de repetição

Existem três tipos de laços de repetição. Dois deles permitem repetir um bloco de comandos "até que" ou "enquanto" uma condição for verdadeira. O outro permite repetir um bloco de acordo com um intervalo de valores:
```
var
  i : integer;
begin

  // repetir até que uma condição seja verdadeira:
  i := 100;
                   // este bloco será executado uma vez, 
  repeat           // pois a condição de saída é executada por último
    i := i + 1;    // <- bloco
  until i < 100;   // condição de saída


  // repetir enquanto uma condição for verdadeira:
  i := 100;
  while i < 100 do // a condição de saída é executada primeiro
    begin          // portanto este bloco não será executado
      i := i + 1;  // <- bloco
    end;
  
  i := 100;
  while i = 100 do // condição verdadeira, portanto
    i := i + 1;    // este bloco será executado uma vez

  // condições de saída customizadas podem ser criadas
  // combinando-as com o procedimento de saída de laço:
  i := 0;
  while True do       // execute
    begin
      WriteLn(i)      // escreva o valor de i no console
      i := i + 1;     // e incremente i
      if i > 4 then   // se i maior do que 4 (condição de saída) 
        Break;        // saia do laço
    end;
  // WriteLn produz -> 0, 1, 2, 3, 4

  // também é possível pular blocos de comando dentro do bloco de repetições
  i := 0;
  while True do     // execute
    begin
      if i < 4 then // se menor do que 4
      begin
        WriteLn(i);                       
        i := i + 1; // incremente 1
        Continue;   // e continue do início
      end;
                    // se 5 ou maior
      i := i + 1;   // incremente 2
      WriteLn(i);
      Break;        // procedimento de saída do laço
    end;
  // WriteLn produz, o número quatro foi pulado -> 0, 1, 2, 3, 5 


  // repetir de acordo com um intervalo, do menor para o maior:
  for i := 0 to 9 do
    begin
      WriteLn(i);  // 0, 1 .. 9
    end;

  // repetir de acordo com um intervalo, do maior para o menor:
  for i := 9 downto 0 do
    begin
      WriteLn(i); // 9, 8 .. 0
    end;
end.

```

### Vetores e Listas

Um vetor (array) é uma série de itens indexados. Cada item possui um índice (e um tipo). Por padrão o primeiro item de um vetor possui índice 0. Todo vetor necessita ser inicializado antes de ser usado:

```
const
  space = #32;
var
  // declara e inicializa um vetor estático
  names : array [0..4] of string = ('joao', 'maria', 'rafael', 'thais', 'laura'); 
  
  // declara uma variável de tipo igual ao do vetor
  name : string;

  // apenas inteiros podem servir como índice de vetores
  index : integer;
begin
  // existem tipos enumeráveis e tipos não enumeráveis

  // percorra os items de um vetor de tipo enumerável
  // com uma variável de mesmo tipo: 
  for name in names do
    WriteLn(name);

  // percorra os items de qualquer vetor por meio de seus índices:
  for index:= Low(names) to High(names) do
    begin
      WriteLn(index, space, names[index]);
    end; 
end.


```
Entretanto, em geral, não é recomendado usar um array de texto, mas sim uma lista de texto: 

```
// classes serão apresentadas com mais detalhes nas sessões seguintes
// mas frequentemente existem tipos de classes que são enumeráveis
// e se "comportam" como vetores
uses Classes; // torna o tipo TStringList, enumerável, visível

var
  names : TStringList; // declara um objeto de classe TStringList
  name : string;      
begin
  // pontos são utilizados para acessar o conteúdo dos objetos
  names := TStringList.Create;         // inicializa a lista
  
  // atribui um texto delimitado à lista
  names.DelimitedText := 'thais maria clara bárbara joana'; 
  names.Append('name');                // adiciona um item ao final da lista
  for name in names do WriteLn(name);  // percorre a lista
  names.Free;                          // libera a lista 
end.

```
Vetores podem ser declarados como dinâmicos, isto significa que o tamanho deles pode variar:

```
var
  numbers : array of integer; // declara um vetor dinâmico
  number : integer;
begin
  SetLength(numbers, 2);  // inicializa um vetor com 2 itens  
  // Length(numbers);     // retorna o tamanho de um vetor, neste caso igual a 2
  // High(numbers);       // retorna o maior índice de um vetor, neste caso igual a 1
  // Low(numbers);        // retorna o menor índice de um vetor, neste caso igual a 0
  numbers[0] := 100;      // atribui um valor ao primeiro item
  numbers[1] := 200;      // atribui um valor ao segundo item

  SetLength(numbers, Length(numbers)+1);  // expande o vetor, agora ele possui 3 itens
  numbers[2] := 300;

  SetLength(numbers, Length(numbers)-1);  // reduz um vetor, agora ele possui 2 itens

  for number in numbers do
    WriteLn(number);  
end.

```

### Procedimentos, Funções, Argumentos

Procedimentos e funções são estruturas que permitem a reutilização de blocos de comandos.
Todo procedimento ou função possui um identificador e uma assinatura com ou sem argumentos.
Procedimentos podem ser declarados de diferentes maneiras no contexto de uma unidade,
mas só é possível chamá-los de acordo com as regras de visibilidade da unidade:

```
{
  apenas a assinatura de procedimentos pode ser
  declarada na interface de uma unidade
}
interface 

{ procedimentos possuem ou não argumentos de entrada em sua assinatura }

// declara o identificador PublicCommand como um procedimento sem argumentos:
procedure PublicCommand;

// declara um procedimento com um argumento:
procedure AnotherPublicCommand(AString : string);

// declara um procedimento com dois argumentos:
procedure YetAnotherCommand(AString1 : string; AInteger : integer);


{
  procedimentos declarados na interface
  devem ser redeclarados na implementação
}
implementation

// procedimentos declarados apenas na implementação
// não podem ser vistos por outras unidades usando esta unidade 
procedure PrivateCommand;
begin

end;

procedure PublicCommand;
  procedure NestedCommand; 
  begin
    // procedimentos declarados dentro de procedimentos (aninhados ou locais)
    // são visíveis apenas em seu bloco de execução
  end;
begin
  NestedCommand;  // executa o comando aninhado deste procedimento
  PrivateCommand; // executa um comando privado da unidade
end;

procedure AnotherPublicCommand(AString: string);
  procedure NestedCommand;
  begin

  end;
begin
  NestedCommand;  // executa o comando aninhado deste procedimento
  PrivateCommand; // executa um comando privado da unidade
end;

procedure YetAnotherCommand(AString1: string; AString2: string);
const                // constantes podem ser locais
  LConst = 10; 
var                  // variáveis também podem ser locais
  LInteger : integer; 
  LBoolean : boolean;
  LString  : string;
  procedure LocalCommand; 
  begin

  end;
begin

end; 

end.    
```

Os argumentos de um procedimento podem receber prefixos que determinam como uma variável será passada ao procedimento:

```
// um argumento sem prefixos é uma cópia da variável de entrada,
// se uma cópia for modificada, a variável original permanece a mesma
procedure ValueParamenter(AValue : integer):

{...}

{ chamando o procedimento ValueParamenter }
var
 i : integer = 10;
begin
  ValueParamenter(i);
  // i = 10
end;

{...}

// o prefixo var permite alterar a variável original de entrada
procedure Inc(var AVariable: TOrdinal);

{...}

{ chamando o procedimento inc }
var
  VariableInput : integer = 0;      // inicializa i com o valor inicial 0
begin                   
  Inc(VariableInput);               // incrementa i
  // VariableInput = 1  
end;

{...}

// o prefixo out permite alterar a variável original,
// mas ignora seu valor inicial
procedure WriteStr(out OutputString: string; Args: Arguments);

{...}

{ chamando o procedimento WriteStr }
var
  OutputString : string;            // OutputString não possui um valor inicial 
  i : integer = 50;
begin
  WriteStr(OutputString, i);        // converte i para texto e inicializa Outputstring com '50'
  // OutputString = '50'
end;
          
{...}

// o prefixo const informa o compilador que a variável não será alterada
procedure ReadStr(const S: string; Args: Arguments);

{...}

{ chamando o procedimento ReadStr }
var
  ConstantInput : string = '10 20 Texto';
  i1, i2 : integer;
  s : string;
begin
  ReadStr(ConstantInput, i1, i2, s); // ConstantInput não deve ser alterado
  // ConstantInput = '10 20 Texto'  
  // i1 = 10
  // i2 = 20
  // s = 'Texto'
end;

{
  OBS: as funções Inc, WriteStr e ReadStr são funções da unidade System.
  Argumentos do tipo Arguments são exclusivos ao compilador e não podem ser redeclarados. 
}
```

Funções são exatamente como procedimentos, mas necessariamente retornam um resultado de um tipo específico. Use a variavél "Result", automaticamente declarada, para retornar o resultado:

```
// declara uma função sem argumentos que retorna um boleano:
function GetBoolean : Boolean;
begin
  Result := true;
end;

// declara uma função que retorna um texto:
function GetString : string;
begin
  Result := 'texto';
end;

// declara uma função que retorna um valor inteiro:
function GetInteger : integer;
begin
  Result := 0;
end;
```

Conversões entre tipos frequentemente são realizadas por meio de funções. Funções comuns estão localizadas na unidade "SysUtils".

```
uses SysUtils;          // unidade com funções de conversão

[...]

s := IntToStr(i);           // converte um inteiro para texto 
i := StrToInt(s);           // converte um texto para inteiro
i := StrToIntDef(s, 0);     // converte um texto para inteiro, em caso de erro retorna 0
b := StrToBoolDef(s, false) // converte um texto para boleano, em caso de erro retorna false

```

Frisa-se que argumentos do tipo Arguments (comuns na unidade System) são exclusivos do compilador e não podem ser redeclarados.
Se um número incerto de parâmetros de um mesmo tipo for necessário, use um vetor como argumento: 

```
procedure ManyStrings(AStrings : array of string);
var
  i : integer;
  s : string;
begin
  for i := Low(AStrings) to High(AStrings) do
  begin
    s := AStrings[i];
  end;
end;

{ chamando o procedimento ManyStrings }

begin
  ManyStrings(['texto1', 'texto2', 'texto3']);
  ManyStrings(['texto1', 'texto2']);
  ManyStrings(['texto1']);
end;
```

### Classes, Propriedades e Eventos

Variáveis, procedimentos e funções também permitem a construção de eventos,
propriedades e classes de objetos.
Eventos devem ser entendidos como um tipo de mensagem que
um objeto pode enviar ou receber de outros objetos.
O planejamento da arquitetura de eventos, propriedades e classes
está fora do escopo do presente guia. Para informações detalhadas sobre a arquitetura, procure por padrões de planejamento (*Design Patterns*) nas ferramentas de busca, eles são, frequentemente, independentes de linguagens.
Por hora, o objetivo é de compreender sua sintaxe
e como fazer uso de propriedades e eventos de classes existentes.

Sintaticamente, um evento é um tipo que contém a assinatura de um método. 

```             
// um evento de um objeto com um argumento
type TNotifyEvent = procedure(Sender : TObject) of object;

// "Sender" é o objeto que enviou a mensagem
```
Eventos podem ser declarados como variáveis de uma classe e acessados diretamente ou por meio de propriedades. No pascal orientado a objetos, todas as classes possuem os métodos da classe TObject. Em um jargão técnico, todas as classes herdam os métodos de um ancestral comum. A seguir a classe TMyForm é declarada tendo como ancestral a classe TForm. A classe TForm possui métodos que implementam as funcionalidades básicas de uma janela: 

```
type

  TMyForm = class(TForm)  
  private
    FNotifyEvent : TNotifyEvent;
    procedure SetSomeEvent(ANotifyEvent : FNotifyEvent);
    procedure EventNotification(Sender : TObject);
  public
    property NotifyEvent : TNotifyEvent read FNotifyEvent write SetNotifyEvent;
  end;
```

Existem dois operadores específicos para classes:
```
implementation

{...}

procedure TMyForm.EventNotification(Sender : TObject):
var
 Form : TMyForm;
begin
  // testa se Sender herda de TMyForm
  if Sender is TMyForm then      // se sim
    Form := Sender as TMyForm;   // o endereço de Sender como
                                 // TMyForm é atribuido ao Form
end.

```

## A aplicação padrão do Lazarus

### O formato dos arquivos

Diversos elementos da sintaxe básica podem ser identificados na aplicação padrão do Lazarus. Para abrir o arquivo de projeto da aplicação; clique sobre a janela Editor de Código, pressione CTRL+O e selecione o arquivo projetopiloto.lpr. Esse arquivo possui a seguinte estrutura:

``` 
program ProjetoPiloto;              // projetopiloto.lpr   

{$mode objfpc}{$H+}                 // diretivas de compilação 

uses                                // início do bloco de uso de unidades
  Interfaces,                       // uma interface específica para o sistema torna-se disponível 
  Forms,                            // torna a classe TForm visível
  Unit1                             // torna a variável Form1 visível  
;                                   // final do bloco de uso de unidades

{$R *.res}                          // inclui recursos auxiliares no arquivo executável

begin                                    // início do bloco de execução central do programa
  RequireDerivedFormResource:=true;      // produz um erro se uma janela for criada sem recursos 
  Application.Initialize;                // inicializa a interface, dentre outras coisas...
  Application.CreateForm(TForm1, Form1); // cria o componente TForm1 atribuindo o resultado à variável Form1
  Application.Run;                       // carrega a janela principal (Form1) e o laço (loop) de eventos
end.                                     // final do bloco de execução central do programa 

```

Para os objetivos do presente guia, o arquivo de projeto será gerenciado automaticamente pelo Lazarus. Em seguida abra o arquivo Forms.Main.pas, pois esse é o arquivo que será editado:

```
unit Forms.Main;                   // título da unidade

{$mode objfpc}{$H+}               // diretivas de compilação

interface                         // bloco público da unidade

uses                              // bloco de uso com sete unidades
  Classes,                        // classes e métodos para criação de objetos recorrentes 
  SysUtils,                       // classes e métodos para coversões entre tipos básicos 
  FileUtil,                       // classes e métodos para o manuseio de arquivos
  Forms,                          // classes e métodos para a criação de janelas
  Controls,                       // classes e métodos para a criação de controles visíveis
  Graphics,                       // classes e métodos para o manuseio de imagens
  Dialogs;                        // classes e métodos para a criação de caixas de mensagens

type                              // bloco de tipo
  TForm1 = class(TForm)           // declara uma nova classe de janela (customizável)
  private                         // campo privado da classe

  public                          // campo público da classe

  end;                            // final da declaração da classe

var                               // bloco de declaração de variáveis
  Form1: TForm1;                  // declara Form1 como o identificador da classe de janelas TForm1

implementation                    // campo privado da unidade

{$R *.lfm}                        // inclui recursos auxiliares no arquivo executável da aplicação

end.                              // final da unidade
```

Como customizar a classe TForm1 e adaptá-la às nossas necessidades?

## Exemplos

Os exemplos a seguir ilustram como resolver tarefas básicas relacionadas ao registro do comportamento e apresentação de eventos ambientais. Para isso, procedimentos e eventos simples serão implementados com o auxílio de recursos visuais da interface.

### Exemplo 1. Registro tabulado de frequência e tempo

Alguns computadores pessoais permitem registrar eventos na escala de nanosegundos. Mas a escala de tempo do comportamento ao olho nú é bem mais lenta, e registros muito bem detalhados podem ser obtidos com granularidade máxima na escala de milisegudos. A granularidade do sistema de registro é sua frequência de amostragem. A amostragem deve, também, ocorrer de forma monotônica, isto é, não devem haver saltos irregulares de tempo entre cada unidade de tempo registrada. 

Para obter um registro em milisegundos, implemente a unidade "Timestamps". Crie uma nova unidade por meio do menu superior Arquivo->Nova Unidade:

```
unit Timestamps;

{$mode objfpc}{$H+}

interface

// essa função pode ser chamada muitas vezes
// por isso a directiva "inline" é declarada ao final
function Miliseconds(FirstTickCount : Cardinal) : string; inline; 

implementation

uses SysUtils; 

// um registro cumulativo de tempo deve tomar 
// o primeiro registro como referência (FirstTickCount)

// o tipo cardinal só admite valores
// inteiros maiores ou iguais a zero 
function Miliseconds(FirstTickCount : Cardinal) : string;
begin
  // a função GeTickCount64 retorna um tempo monotônico em milisegundos
  // a função IntToStr converte o valor para texto
  Result := IntToStr(GetTickCount64 - FirstTickCount);  
end; 

end.
```

Registros de texto tabulados além de permitirem a inspeção visual por meio de editores de texto simples, também permitem a automação da leitura dos dados para posterior tratamento e análise. Registros tabulados também são simples de serem implementados com o free pascal:

```
unit TabDelimitedReport;

{$mode objfpc}{$H+}

interface

type

  { TTabDelimitedReport }

  TTabDelimitedReport = class
  private
    FFilename : string;
    FTextFile : TextFile;
    procedure SetFilename(AFilename: string);
  public
    procedure CloseFile;
    procedure NextFile;
    procedure WriteRow(Cols : array of string);
    property Filename : string read FFilename write SetFilename;
  end;

var
  Report : TTabDelimitedReport;       // variável pública

implementation

uses SysUtils, LazFileUtils; // torna visível funções para o manuseio de arquivos

procedure TTabDelimitedReport.WriteRow(Cols: array of string);
const
  TAB = #9;
var
  i : Integer;
  LastColumn : Integer;
begin
  LastColumn := High(Cols);
  for i := 0 to LastColumn do          // percorre todos os itens
    if i < LastColumn then             // se antes do último item
      Write(FTextFile, Cols[i]+TAB)    // escreve item e TAB        
    else               // se último escreve item e final de linha
      WriteLn(FTextFile, Cols[i]);  
  Flush(FTextFile);                    // salva as mudanças no disco rígido 
end;

procedure TTabDelimitedReport.SetFilename(AFilename: string);
var
  LFilePath, LExtension, LBasename: string;
  i : Integer;
begin
                     // retorna o caminho raiz do nome de arquivo
  LFilePath := ExtractFilePath(AFilename);

                     // retorna apenas o nome base do arquivo
                     // sem extenção e sem caminho
  LBasename := ExtractFileNameOnly(AFilename);

                     // retorna a extenção do nome do arquivo
  LExtension := ExtractFileExt(AFilename);

                     // caso a extenção seja vazia ou .exe
                     // a extenção torna-se '.txt' 
  case LExtension of
  '', '.exe' : LExtension:='.txt';
  end;

                      // nunca subscreva um arquivo já existente
                      // se o arquivo existir, incremente seu nome
  i := 0;
  while FileExists(AFilename) do
    begin
      Inc(i);
      AFilename := LFilePath+LBasename+'_data_'+Format('%.3d', [i])+LExtension;
    end;

                         // atribui um nome ao arquivo de texto
  AssignFile(FTextFile, AFilename);
  Rewrite(FTextFile);    // abre o arquivo de texto para escrita
  FFilename:=AFilename;  // salva o nome do arquivo para uso posterior
end;

procedure TTabDelimitedReport.NextFile;
begin
  SetFilename(FFilename);             // abre um novo arquivo
end;

procedure TTabDelimitedReport.CloseFile;
begin
  System.Close(FTextFile);            // fecha o arquivo de texto
end;

initialization // antes de executar o programa, crie (a memória do) objeto
  Report := TTabDelimitedReport.Create;

finalization   // após finalizar o programa, libere (a memória do) objeto
  Report.Free;

end.

```

Em seguida, selecione o arquivo Forms.Main.pas (correspondente a janela principal) e use as unidades Timestamps e TabDelimitedReport na cláusula privada de uso de unidades:

```
implementation                    // campo privado da unidade

{$R *.lfm}                        

// torna visível a variável do relatório (Report)
// e a função Miliseconds
uses TabDelimitedReport, Timestamps; 

end.   

```

Para criar um arquivo de texto e o cabeçalho ("Tempo Categoria Evento"), utilize o evento de criação da janela principal:

- Selecione o arquivo Forms.Mains.pas
- Selecione a janela principal (Aperte F12)
- Clique duas vezes sobre o fundo da janela principal
- O procedimento padrão OnCreate será declarado automaticamente
- implemente o procedimento:

```
procedure TForm1.FormCreate(Sender: TObject);
begin
  // use a variável pública da unidade TabDelimitedReport
  // a propriedade Filename permite criar e inicializar
  // o arquivo de texto do relatório
  Report.Filename := Application.ExeName;

  // Application refere-se à variável
  // da unidadde Forms. A propriedade ExeName
  // retorna o caminho completo do arquivo executável da aplicação
   
  // escreve o cabeçalho do programa
  Report.WriteRow(['Tempo', 'Categoria', 'Evento']);
end; 

```
Ao final do programa, é necessário fechar o arquivo de texto.
Para isso usaremos o evento de finalização da aplicação:

- Selecione Forms.Main.pas
- Alterne para a janela principal (Aperte F12)
- Clique sobre o fundo da janela principal 
- Selecione a janela Inspetor de Objetos (Aperte F11)
- Selecione a aba Eventos
- Clique duas vezes sobre o campo em branco do evento OnDestroy:
- O procedimento será declarado automaticamente:

```
procedure TForm1.FormDestroy(Sender: TObject);
begin
  // fecha o arquivo de texto
  Report.CloseFile;

  // para relembrar como o procedimento é implementado
  // segure a tecla CTRL e clique com o botão esquerdo sobre CloseFile
end;
```

Por meio de diversas chamadas ao procedimento WriteRow do objeto Report, um relatório em formato de texto simples com a seguinte estrutura é esperado:
```txt
Tempo Categoria Evento
 0000  estimulo     S1
 2000  resposta     R1
 2500  estimulo     C1
 5050  estimulo     S1
 5500  resposta     R2
 6000  resposta     R2
 6100  resposta     R2
 7000  resposta     R2
 9000  resposta     R1
 9500  estimulo     C1
```
Um relatório deve conter todas as informações de interesse. Nesse caso, duas respostas (R1 e R2) e dois estímulos (S1 e C1) devem ser registrados pelo programa. O programa está pronto para rastreá-los. Mas como detectar a ocorrência desses eventos?

### Exemplo 2. Rastreamento de estímulos e respostas

Rastreadores de função e forma
são requisitos para análises comportamentais que almejam alto poder preditivo.
Por ser multideterminado, o comportamento demanda a análise conjunta de múltiplas fontes de dados. Na presente ocasião, por questões didáticas, a ênfase será na forma. Ao interagir com uma interface gráfica, dois tipos de eventos serão de especial interesse: respostas ao teclado e respostas ao mouse. Adicionalmente, estímulos, como mudanças na visibilidade de componentes da interface, serão rastreados por meio um evento customizado. Crie uma nova unidade e implemente o evento da seguinte maneira:

```
unit Behavior.Events;

{$mode objfpc}{$H+}

interface

uses
  Classes;   // torna visível a classe TObject

type         // bloco de declaração de tipo
  // o procedimento recebe o nome de uma categoria, um evento
  // e o objeto que enviou a mensagem
  TBehavioralEvent = procedure(Sender: TObject; const Category: string; const Event:string) of object;

  // define as possíveis categorias como constantes simples
const
  BehavioralEvent = 'resposta';
  EnviromentEvent = 'estimulo';
  SystemEvent = 'virtual';

implementation

  // toda unidade precisa de um bloco de implementação
  // ainda que vazia

end.

```

A unidade com o evento comportamental deve ser usada em duas outras unidades. Primeiramente, a classe de estímulos TStimulus deve criada a partir da classe TImage. A classe TImage possui eventos de mouse e métodos para a apresentação de figuras. Crie uma nova unidade e implemente a classe TStimulus da seguinte maneira:

```
unit ExtCtrls.Stimulus;

{$mode objfpc}{$H+}

interface

uses
  ExtCtrls,        // torna visível a unidade TImage
  Behavior.Events; // torna visível o evento TBehavioralEvent

type

  { TStimulus }

  TStimulus = class(TImage) // cria a classe TStimulus a partir da casse TImage
  private
    FOnVisibilityChange: TBehavioralEvent;
    procedure SetOnVisibilityChange(AValue: TBehavioralEvent);
  protected
    // a directiva override
    // permite customizar o procedimento
    // SetVisible da classe TImage
    // este procedimento é usado
    // para detectar a mudança de visibilidade
    // dos estímulos
    procedure SetVisible(Value: Boolean); override;
  public
    // para declarar o evento comportamental
    // escreva:
    // property OnVisibilityChange : TBehavioralEvent;
    // e em seguida aperte CTRL+SHIFT+C
    // a propriedade será declarada automaticamente
    property OnVisibilityChange : TBehavioralEvent read FOnVisibilityChange write SetOnVisibilityChange;
  end;


implementation


{ TStimulus }


procedure TStimulus.SetOnVisibilityChange(AValue: TBehavioralEvent);
begin
  if FOnVisibilityChange=AValue then Exit;
  FOnVisibilityChange:=AValue;
end;

// implementação de eventos de estímulo 
procedure TStimulus.SetVisible(Value: Boolean);
begin
  // primeiramente é necessário 
  // chamar o procedimento SetVisible de TImage
  // isso é possível por meio do prefixo inherited
  inherited SetVisible(Value);
  // se um valor foi atribuido à propriedade então
  if Assigned(OnVisibilityChange) then   
    if Value then // se visível
      // dispara o evento da propriedade como "Show"
      OnVisibilityChange(Self, EnviromentEvent, 'Show') 
    else          // se invisível
      // dispara o evento da propriedade como "Hide"
      OnVisibilityChange(Self, EnviromentEvent, 'Hide');
end;

end.

```

Em seguida os estímulos devem ser criados, configurados e apresentados na janela principal da aplicação. Os eventos associados à janela também devem ser implementados e configurados. Implemente-os da seguinte maneira:

```
unit Forms.Main;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, StdCtrls,
  ExtCtrls.Stimulus; // torna visível a classe TStimulus

type

  { TForm1 }

  TForm1 = class(TForm)
    // declara um estímulo antecedente
    StimulusAntecedent : TStimulus;

    // declara um estímulo consequente 
    StimulusConsequent : TStimulus; 

    // declara o procedimento dos eventos de clique da janela
    procedure ComponentClick(Sender: TObject);  

    // declara o procedimento dos eventos de teclado da janela
    procedure ComponentKeyPress(Sender: TObject; var Key: char);

    // declara o procedimento de criação da janela
    procedure FormCreate(Sender: TObject);

    // declara o procedimento de destruição da janela
    procedure FormDestroy(Sender: TObject);

    // declara o procedimento de registro de respostas e estímulos
    procedure RecordBehavior(Sender: TObject; const Category:string;
      const EventSufix: string); inline;
  private
    // declara uma variável privada para o valor de início do registro
    FFirstTickcount : Cardinal;

    // declara um método de ajuda para a criação e configuração dos
    // estímulos
    procedure CreateStimulus(out AStimulus : TStimulus; AColor : TColor;
      ASize : integer = 300; ALeft : integer = 0; ATop: integer = 0);
  public

  end;

var
  Form1: TForm1;

implementation

// unidades usadas apenas na implementação
uses TabDelimitedReport, Timestamps, Behavior.Events; 

{$R *.lfm}

{ TForm1 }


procedure TForm1.FormCreate(Sender: TObject);
begin
  // cria o estímulo antecedente com cor preta
  CreateStimulus(StimulusAntecedent, clBlack,150,0,0);

  // cria o estímulo consequente com cor azul
  CreateStimulus(StimulusConsequent, clBlue,100,200,0);
  
  // os estímulos são rastreados pelos seus
  // respectivos nomes
  StimulusAntecedent.Name:='Preto';
  StimulusConsequent.Name:='Azul';

  // cabeçalho do relatório
  Report.Filename := Application.ExeName;
  Report.WriteRow(['Tempo', 'Categoria', 'Evento']);

  // valor de início do registro independente da hora local
  FFirstTickcount := GetTickCount64;

  // início de acordo com a data e hora local
  RecordBehavior(Sender, SystemEvent, 'inicio:'+DateTimeToStr(Now));

  // mostra o estímulo antecedente
  StimulusAntecedent.Show;
end;

procedure TForm1.FormDestroy(Sender: TObject);
begin
  // registra o final de acordo com a hora local
  RecordBehavior(Sender, SystemEvent, 'final:'+DateTimeToStr(Now));

  // finaliza o relatório
  Report.CloseFile;
end;

procedure TForm1.RecordBehavior(Sender: TObject; const Category: string;
  const EventSufix: string);
var
  SenderName: string;
begin
  // o rastreamento ocorre por meio
  // do nome dos objetos
  if Sender is TComponent then
    SenderName := TComponent(Sender).Name
  else
    SenderName := Sender.ClassName;
  
  // registra uma linha no relatório
  Report.WriteRow([
    Miliseconds(FFirstTickcount),
    Category,
    SenderName+#32+EventSufix
  ]);
end;

procedure TForm1.CreateStimulus(out AStimulus: TStimulus; AColor: TColor;
  ASize: integer; ALeft: integer; ATop: integer);
begin
  // note que AStimulus é um argumento de saída (out)

  // cria o estímulo na janela principal (self) 
  AStimulus := TStimulus.Create(Self);

  // define o tamanho do estímulo
  // Left e Top possuem origem no canto superior esquerdo do monitor:
  // Left pixel horizontal
  // Top pixel vertical
  AStimulus.SetBounds(ALeft, ATop, ASize, ASize);

  // define o tamanho da figura do estímulo
  AStimulus.Picture.Bitmap.SetSize(ASize, ASize);

  // define a cor da figura do estímulo
  AStimulus.Picture.Bitmap.Canvas.Brush.Color := AColor;

  // desenha um retângulo preenchido na figura com a cor definida
  AStimulus.Picture.Bitmap.Canvas.Rectangle(0,0, ASize, ASize);

  {****************** MUITO IMPORTANTE ********************}

  // não esqueça de definir aonde o estímulo será desenhado
  // isto é possível por meio da propriedade Parent
  // aqui definimos a janela principal (Self) como o
  // responsável por desenhar o estímulo


                  AStimulus.Parent := Self;


  {********************************************************}

  // define a visibilidade inicial do estímulo
  AStimulus.Hide;

  // atribui um valor às propriedades dos estímulos
  // o operador @ deve ser usado na frente do
  // procedimento correspondente ao evento
  // da propriedade
  // para relembrar a assinatura do evento
  // segure CTRL e clique com o botão esquerdo na
  // propriedade
  AStimulus.OnVisibilityChange:=@RecordBehavior;
  AStimulus.OnClick:=@ComponentClick;

  // também seria possível carregar uma figura 
  // por meio do nome do arquivo da figura
  // AStimulus.Picture.LoadFromFile(AFilename);
  // AStimulus.Stretch := True;
end;

// o que acontece quando um componente é clicado?
procedure TForm1.ComponentClick(Sender: TObject);
begin
  // registra o comportamento de clique
  RecordBehavior(Sender, BehavioralEvent, 'Click');
  
  // altera a visibilidade dos estímulos
  // de acordo com os estímulos clicados
  if Sender = StimulusAntecedent then
    begin
      StimulusAntecedent.Hide;
      StimulusConsequent.Show;
    end;
  if Sender = StimulusConsequent then
    begin
      StimulusConsequent.Hide;
      StimulusAntecedent.Show;
    end;
end;

// o que acontece quando uma tecla é pressionada
// tendo um componente em foco?
procedure TForm1.ComponentKeyPress(Sender: TObject; var Key: char);
const
  SpaceKey = #32;
  DeleteKey = #127;
var
  Event : string = '';
begin
  case Key of
    SpaceKey : Event := '<32>';
    DeleteKey: Event := '<127>';
    #0..#31  : Event := '<NA>';
  end;
  RecordBehavior(Sender, BehavioralEvent, Event);
end;


end.
``` 

Por fim, configure os eventos de clique (OnClick como ComponentClick) e teclado (OnKeyPress como ComponentKeyPress) da janela principal, execute a aplicação e confira os resultados. O código fonte dos exemplos apresentados e de outros exemplos podem ser conferidos no repositório:

- [https://github.com/cpicanco/free-pascal-prototypes](https://github.com/cpicanco/free-pascal-prototypes)

### Referências

{% include references.html %}