---
title: Hello World.
excerpt: markdown example
tags: ['web design', 'markdown']
language: en
pt: /2015/05/31/ola-mundo-exemplo-markdown.html
image: hello.jpg
copyright: <!--Copyright (c) 2015 Carlos Rafael Fernandes Picanço.-->
---

Post Writing is using GitHub Flavored Markdown and Emoji.

:smile:

___


**Headers**

```
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

___


**Bold** *Italic*

```
**Bold** *Italic*
```

___


**Lists**

```
- 1
   - 1.1
     - 1.1.1
       - 1.1.1.1
- Item 2
- Item 3
- Item 4

1. a
1. b
1. c
```
- 1
   - 1.1
     - 1.1.1
       - 1.1.1.1
- Item 2
- Item 3
- Item 4

1. a
1. b
1. c

___


**Blockquote**

```
> blockquote
```

> blockquote

___


**Fenced code highlight**

```
    ``` python
    # python
    def some_method(var='exemple'):
       if var:
          pass
       else:
          result
    ```

    ``` delphi
    // pascal
    procedure some_procedure( Value : string = 'text');
    begin
       ShowMessage(text);
    end;
    ```
```

``` python
# python
def some_method(var='exemple'):
   if var:
      pass
   else:
      result
```

``` delphi
// pascal
procedure some_procedure( Value : string = 'text');
begin
   ShowMessage(text);
end;
```
___


**Inline highlight**

```
`inline` 
```

Yes, `inline` highlight. 

___


**Tables**

```
| Table | Table |
| ----- | ----- |
| cell  | cell  |
```

| Table | Table |
| ----- | ----- |
| cell  | cell  |

___


**Links**

```
[www.google.com](http://www.google.com)
```

[www.google.com](http://www.google.com)


Html is used for responsive images:


```
<p><img class="img-responsive center-block" src="/media/fpe/fpe.jpeg" alt="Image" /></p>
```
<p><img class="img-responsive center-block" src="/media/fpe/fpe.jpeg" alt="Image" /></p>

You could use `![alt](http://link)` to link (unresponsive) images as well.

___


**Line Separator**

```
___
___

```
___
___


**Liquid and Front Matter specifics**

{% assign b = 5 %}

```
{{ "{% assign b = 5 " }}%}
{{ "{{ site.url " }}}}
{{ "{{ b " }}}}
```
{{ site.url }}
{{ b }}