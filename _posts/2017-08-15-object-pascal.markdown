---
layout: Post
title: 'Object Pascal e Análise do Comportamento'
tags: ['ciência', 'programação']
excerpt: 'Introdução ao Lazarus e ao Free Pascal para analistas do comportamento'
language: pt-BR
copyright: <!--Copyright (c) 2017 Carlos Rafael Fernandes Picanço.-->
---

O objetivo deste capítulo é de:

1. informar o leitor sobre a existência de diferentes dialetos derivados do Pascal
1. situar o leitor sobre o dialeto utilizado neste guia
1. apresentar um recorte da comunidade de desenvolvedores Pascal
1. apresentar um recorte básico do dialeto Free Pascal
1. introduzir aspectos básicos do ambiente de programação Lazarus e Free Pascal
1. introduzir o desenvolvimento de aplicações visuais nesse ambiente por meio de exemplos

Os exemplos foram pensados para uma audiência de analistas do comportamento,
especialmente aqueles lidando com participantes de pesquisa que devem interagir com uma interface gráfica.
Por meio desses exemplos, o leitor será guiado à resolução de problemas recorrentes:

- como apresentar estímulos (antecedentes e consequentes)?
- como esperar por respostas?
- como rastrear e registrar tempo e frequência de estímulos e respostas?

### Pré-requisitos

Inglês: leitura e escrita instrumental.

Conhecimento básico de informática: teclado e mouse.

Conhecimento básico sobre o sistema operacional de escolha: como executar um programa?

Conhecimento básico sobre interfaces gráficas comuns será necessário, por exemplo,
busca por controles visuais: o que são janelas, o que é um menu superior, etc. 

### Pascal - Primórdios

A linguagem de programação Pascal,
como originalmente arquitetada pelo professor Niklaus Wirth entre 1968 e 1971 (Jensen and Wirth, 1973)
tinha como objetivo servir ao ensino introdutório de programação estruturada em suas aulas.
Embora Wirth também tenha ajudado a montar o sistema em grandes computadores de outras universidades,
a popularização de dialetos originados do Pascal só viria na década de 80 com o advento do microcomputador,
de sistemas integrados de desenvolvimento e da redução de custo dos compiladores.

Quando comparado com linguagens como BASIC, Assembly, ALGOL e FORTRAN,
o Pascal de Wirth possuia um melhor balanço entre boa legibilidade, modularidade e flexibilidade.
Ainda assim, Wirth foi reconhecendo demandas não contempladas pelo Pascal,
o que o levou a extendê-lo e reformulá-lo, criando outros dialetos derivados.
Mas aquela popularização ocorreria por meio de outros dialetos independentes,
com suas próprias extensões e melhorias. Esses outros dialetos, em alguns casos,
inclusive sendo adotados como dialeto padrão em cursos de introdução à programação.
Como consequência, algumas gerações naquele periodo (70-80) aprenderam
a pensar computacionalmente por meio de um dialeto derivado ou original.
É rasoável considerar, portanto, que algumas gerações entraram no mercado de trabalho
tendo um ou outro como primeira liguagem de programação.

### Pascal - Padronização e Diversificação comercial

Não por acaso, com tal mão de obra disponível,
bases de código milionárias foram escritas em dialetos do Pascal;
por exemplo, como os primeiros sistemas operacionais da Apple Computers.
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

### Object Pascal - Um dialeto extendido

Ao longo das décadas de 70 e 80 houve uma popularização da chamada "programação orientada a objetos".
Surgia a necessidade de se extender a sintaxe do Pascal estruturado tornando-o mais permissivo ao novo estilo;
originava-se então o Object Pascal.
A orientação ao objeto tornava-se um modelo de referência para o planejamento e a programação de interfaces gráficas.
Foi nesse contexto que interfaces de desenvovimento integrado como o Turbo Pascal (Borland, 1983-1989) e sucessores,
como o Delphi (Borland, 1995) e o Lazarus (2001) surgiram.   

### Free Pascal e Lazarus - um ambiente de desenvolvimento integrado

Os exemplos neste guia foram escritos por meio do ambiente integrado de desenvolvimento Lazarus (versão 1.8RC4)
e do compilador Free Pascal (versão 3.0.4).
O ambiente contém recursos que reduzem a barreira de entrada na complexa cadeia que é o desenvolvimento de aplicações compiladas.
Um compilador é um programa que traduz a sintaxe de alto nível (mais portável),
para uma linguagem de baixo nível (específica de uma máquina alvo).
O produto final é um arquivo nativamente executável e que não demanda instalação.
Compilador e interface são distribuidos por meio de licenças livres (GPL).
Parte do ambiente também é licenciado (LGPL)
de maneira a permitir a distribuição de aplicações comerciais com código fonte privado.
O ambiente está disponível para sistemas operacionais como o OSX,
Windows e baseados no kernel Linux (Debian, Ubuntu)
e agrega uma grande comunidade de desenvolvedores independentes.
Os principais meios de informação e comunicação nesse ecossistema são:

 - A wiki: [http://wiki.freepascal.org/]
 - O fórum: [http://forum.lazarus.freepascal.org/]
 - As listas de emails:
   - Lazarus: [http://forum.lazarus.freepascal.org/index.php/page,Mail_list_information.html]
   - Free Pascal: [https://www.freepascal.org/maillist.var]
 - Os sites oficiais:
   - Pacotes: [http://packages.lazarus-ide.org/]
   - Fundação: [https://foundation.freepascal.org/]
   - Lazarus: [http://lazarus-ide.org/]
   - Free Pascal: [https://www.freepascal.org/]
 - O rastreador de bugs: [http://bugs.freepascal.org/]

Diversas coleções de unidades, componentes e pacotes reunidos nas chamadas "bibliotecas" já vem pré-instalados. Eles permitem a execução de tarefas gerais de programação:  
   - Free Pascal Runtime Library (RTL).
   - Free Pascal Component Library (FCL).
   - Lazarus Component Library (LCL).

O pacote "Gerenciador Online de Pacotes" reúne outras coleções de unidades,
componentes e pacotes mais frequentemente utilizados.
O pacote é distribuido juntamente com o Lazarus e pode ser instalado por meio do menu "Pacotes",
opção "Instalar pacotes", item "OnlinePackageManager" na lista à direita.

Ao explorar o ecossitema por meio de buscadores online,
seja em busca de ajuda, seja em busca de contribuições de terceiros,
utilize palavras-chave como "free pascal guide", "lazarus forum",
"component", "package", "componente", "pacote"
juntamente com os termos específicos de seu interesse.

### Free Pascal e Lazarus - Instalação e configuração do ambiente de desenvolvimento.

Baixe os arquivos de instalação correspondentes para o seu sistema no sítio de hospedagem oficial:

- GNU/Linux 64 bits: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20amd64%20DEB/Lazarus%201.8.0RC4/]
- GNU/Linux 32 bits: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Linux%20i386%20DEB/Lazarus%201.8.0RC4/]
- Mac OS X 32bits: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Mac%20OS%20X%20i386/Lazarus%201.8.0RC4/]
- Windows 64 bits: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2064%20bits/Lazarus%201.8RC4/]
- Windows 32 bits: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Windows%2032%20bits/Lazarus%201.8RC4/]

Em seguida execute o instalador (ou instaladores, se Linux e OSX). Caso seja solicitado, forneça os privilégios de administrador do sistema operacional ao instalador. O processo de instalação e configuração mínima é automático.

Este guia fará referência aos nomes dos controles da interface Lazarus tal como traduzidos para o português brasileiro, portanto recomenda-se a escolha deste idioma ao longo da instalação. Opcionalmente, após a instalação, altere o idioma no menu superior Ferramentas->Opções da IDE->Ambiente->Geral->Idioma.

### Lazarus - criando e executando uma aplicação

Ao executar o Lazarus pela primeira vez (por meio do comando "startlazarus" em sistemas Linux), uma aplicação (programa com uma interface gráfica) é criada automaticamente. Execute a aplicação pressionando F9 (Executar). Essas aplicação padrão é uma janela (um formulário) flutuante com funcionalidades básicas como fechar, minimizar, maximizar, restaurar, mover, redimensionar, entre outras. Essa janela também já vem preparada para receber eventos como aqueles produzidos por mouse e teclado.

### Lazarus - encerrando uma aplicação

Para fechar a aplicação normalmente, utilize o comando correspondente na barra superior da janela. Para forçar o fechamento, selecione uma janela do Lazarus, por exemplo clicando sobre a janela "Editor de Código", e pressione CRTL+F2 (Parar). O primeiro método permite avaliar a ocorrência de erros na cadeia de eventos de encerramento da aplicação. O segundo não produz a cadeia normal de eventos de encerramento e permite a interrupção da aplicação (travada), especialmente quando erros lógicos produzem espera infinita.

### Lazarus - salvando o projeto de uma aplicação

Após fechar a aplicação, pressione CRTL+S e salve o projeto. Recomenda-se sempre renomear os nomes padrões para nomes que resumem a função do arquivo. O código fonte da aplicação padrão é composto por três arquivos principais. Dois arquivos (unit1.pas e unit1.lfm) compõe um "formulário" ou "janela" e o outro arquivo (project1.lpr) compõe um "projeto" ou "programa". Adicionalmente, um arquivo de configuração do projeto (project1.lpi) e arquivos de recursos auxiliares também serão automaticamente criados ao salvar. Apenas o arquivo "unit1.pas" será editado diretamente. Renomeie esse arquivo para "Forms.Main.pas". Renomeie o arquivo de configuração do projeto para "ProjetoPiloto.lpi" (o arquivo *.lpr será renomeado automaticamente). Como muitos arquivos estão envolvidos, recomenda-se reservar uma pasta para cada projeto.

### Lazarus - depurando uma aplicação

Um depurador (debugger) é um programa que auxilia na detecção e correção de erros. Ao executar a aplicação padrão por meio do lazarus (F9) informações que permitem melhor depuração são adicionadas ao executável. O depurador padrão utilizado é o GNU Debugger (GDB). Uma descrição detalhada de estratégias de depuração está fora do escopo do presente guia. Entretanto, recomenda-se explorar duas delas:

- Observação em tempo real do conteúdo de variáveis por meio do menu Exibir->Janelas de depuração->Observadores;
- Adição de ponto de parada (Break Point) em linhas de código permite execução linha a linha por meio dos controles "Passar dentro" (F7) e "Passar sobre" (F8);

Para os objetivos deste guia, estratégias básicas de depuração serão apresentadas na sessão de exemplos por meio da janela "Console". Para exibi-la, pressione CRTL+ALT+O. Ao executar uma aplicação por meio do Lazarus, essa janela é a saída padrão do texto escrito por meio dos construtos básicos apresentar nas sessões seguintes. 

### Free Pascal - Sintaxe básica

Nos tópicos seguintes, sempre que possível, os elementos da linguagem Free Pascal serão apresentados de maneira auto-explicativa nos campos de código. Esta sessão foi planejada para ser um recurso de consulta e permitir a leitura corrida.

#### Comentários

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

#### Programa, Blocos, Inicio, Fim

Um programa pascal é um conjunto de blocos. Ele deve conter no mínimo um bloco de declaração de seu título e um bloco de comandos:


```
program ProjetoPiloto  // declara o identificador, o título do programa
;                      // finaliza o bloco de declaração do nome 
begin                  // inicia o bloco de comandos central
end.                   // finaliza o bloco de comandos central e o módulo
```

O ponto final demarca o final de um módulo. Outros comandos, blocos de comandos e declarações dentro de um módulo devem ser finalizados com ponto e vírgula: 
```
begin                 // inicia um bloco de comandos
  Command1;           // comando 1
  Command2;           // comando 2
end;                  // finaliza o último bloco de comandos
```

A linguagem não diferencia maiúsculas de minúsculas, portanto o seguinte programa é idêntico ao anterior:

```
PROGRAM projetopiloto;
BEGIN                   
               
END.                    
```

A linguagem não é sensível à identação (recuos, paragráfos, espaçamentos, etc.) por meio de caracteres não imprimíveis como o tab, espaço ou final de linha.
O seguinte programa também é idêntico ao anterior:

```
program projetopiloto;begin end.                    
```

Embora idêntico, diferentes convenções de identação existem com o objetivo de melhorar a legibilidade do código. A linguagem permite que você crie sua própria convenção.

#### Diretivas de compilação

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

#### Unidades 

Uma unidade é um módulo que permite o controle de sua visibilidade a outros módulos.
Ela possui, necessariamente, um bloco público, visível a outros módulos, e um bloco privado, invisível a outros módulos.

```
unit Unit1;          // form.main.pas

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

#### Atribuição, Variáveis, Constantes e Tipos

Uma variável é um identificador associado a um espaço reservado na memória do computador.
Toda variável possui um tipo e precisa estar declarada em um bloco antes de ser usada. 
```
var                       // bloco de declaração
  b : boolean = true;     // declara b como boleano inicializando-o como true
  i : integer = -1;       // declara i como número inteiro inicializando-o com0 -1
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

#### Operadores

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
#### Condições

Programas frequentemente realizam operações condicionalmente. Condições podem ser declaradas por meio de dois tipos de estruturas:

```
var
  i : integer;
  s : string = 'a';
begin
  
  // a primeira permite testes boleanos e a bifurcação entre resultados verdadeiros e falsos 
  if True then
    begin 
      i := 1;
    end
  else
    begin
      i := 0;
    end;

  // a segunda permite testes sobre valores e texto e a bifurcação entre diversos resultados
  case i of
    0..1 : i := 0;
    2..4 : i := 1;
    5    : i := 2
  else
    i := -1;
  end;

  case s of
    'a'    : i := 0;
    'b'    : i := 1;
    'casa' : i := 2;
  else
    i := -1;
  end;
end.
```

#### Laços de repetição

Existem três tipos de laços de repetição. Dois deles permitem repetir um bloco de comandos até que ou enquanto uma condição for verdadeira. O outro permite repetir um bloco de acordo com um intervalo de valores:
```
var
  i : integer;
begin

  // repetir até que uma condição seja verdadeira:
  i := 100;
                   // este bloco será executado uma vez, 
  repeat           // pois a condição de saída é executada por último
    i := i + 1;    
  until i < 100;   // condição de saída


  // repetir enquanto uma condição for verdadeira:
  i := 100;
  while i < 100 do // a condição de saída é executada primeiro
    begin          // portanto este bloco não será executado
      i := i + 1;  
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
  // i = 0, 1, 2, 3, 5

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
  // i = 0, 1, 2, 3, 5 


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

#### Vetores e Listas

Um vetor (array) é uma série de itens indexados. Cada item possui um índice (e um tipo). Por padrão o primeiro item de um vetor possui índice 0. Toda lista necessita ser inicializada antes de ser usada:

```
const
  space = #32;
var
  names : array [0..4] of string = ('joao', 'maria', 'rafael', 'thais', 'laura'); // declara e inicializa um vetor estático
  index : integer;
  name : string;
begin
  // É possível percorrer os items um vetor por meio de uma variável enumerável de mesmo tipo: 
  for name in names do
    WriteLn(name);

  // É possível percorrer os items de qualquer vetor por meio de seus índices:
  for index:= Low(names) to High(names) do
    begin
      WriteLn(index, space, names[index]);
    end; 
end.


```
Entretanto, não é recomendado usar um array de texto para tarefas gerais, mas sim uma lista de texto: 

```
var
  names : TStringList;
  name : string;
begin
  names := TStringList.Create;                              // inicializa a lista
  names.DelimitedText := 'thais maria clara bárbara joana'; // atribui um texto delimitado à lista
  names.Append('name');                                     // adiciona um item ao final da lista
  for name in names do WriteLn(name);                       // percorre a lista
  names.Free;                                               // libera a lista  
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

#### Procedimentos, Funções, Argumentos

Procedimentos e funções são estruturas que permitem a reutilização de blocos de comandos.
Todo procedimento ou função possui um identificador e uma assinatura com ou sem argumentos.
Procedimentos podem ser declarados de diferentes maneiras no contexto de uma unidade,
mas só é possível chamá-los de acordo com as regras de contexto e após sua declaração:

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

#### Classes, Propriedades e Eventos

Variáveis, procedimentos e funções também permitem a construção de eventos, propriedades e classes de objetos.
Eventos devem ser entendidos como mensagens que um objeto pode enviar ou receber de outros objetos.
O planejamento da arquitetura de eventos, propriedades e classes está fora do escopo do presente guia. 
Por hora, o objetivo é de compreender sua sintaxe e como fazer uso de propriedades e eventos de classes existentes.

Sintaticamente, um evento é um tipo que contém a assinatura de um método. 

```             
// um evento de um objeto com um argumento
type TNotifyEvent = procedure(Sender : TObject) of object;

// "Sender" é o objeto enviou o evento
```
Eventos podem ser declarados como variáveis de uma classe e acessados por meio de propriedades. No pascal orientado a objetos, todas as classes possuem os métodos da classe TObject. Em um jargão técnico, todas as classes herdam os métodos de um ancestral comum. A seguir a classe TMyForm é declarada tendo como ancestral a classe TForm. A classe TForm possui métodos que implementam as funcionalidades básicas de uma janela: 

```
type

  TNotifyEvent = procedure(Sender : TObject) of object;

  TMyForm = class(TForm)
  private
    FNotifyEvent : TNotifyEvent;
    procedure SetSomeEvent(ANotifyEvent : FNotifyEvent);
  public
    property NotifyEvent : TNotifyEvent read FNotifyEvent write SetNotifyEvent;
  end;
```

### A aplicação padrão do Lazarus

#### O formato dos arquivos

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

Em seguida abra o arquivo Form.Main.pas:

```
unit Form.Main;                   // título da unidade

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
A tarefas agora é customizar a classe TForm1.

TODO:

#### Customizando o evento de criação da janela principal da aplicação

- Selecione a janela Editor de Código
- Selecione o arquivo Form.Main.pas 
- Selecione a janela principal (Aperte F12)
- Clique duas vezes sobre o fundo da janela principal
- O procedimento padrão OnCreate será declarado automaticamente

#### Criando objetos em tempo de execução

- Object := TObject.Create;

#### Adicionar componente não visual na janela principal 

- Selecionar TTimer na Aba System
- Clicar sobre o fundo da jenela principal

#### Adicionar componente visual na janela principal

- Selecionar TShape na aba Additional
- Clicar sobre o fundo da janela principal

#### Configurar propriedades de componentes

- Selecionar componente na janela principal
- Selecionar janela Inspetor de Objetos (Aperte F11)
- Selecionar propriedade
- Alterar valor da propriedade

### Registrando a frequência e o tempo de eventos

- Início := GetTickCount64;
- Evento := Início - GetTickCount64;
- cabeçalho, rodapé, tabulação -> WriteLn

#### Controlando a visibilidade de componentes visuais

- Show
- Hide

#### Construindo a lógica de apresentação dos eventos

- operante livre
- S - R - C