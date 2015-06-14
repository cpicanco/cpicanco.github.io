---
layout: "Post"
title: Hello World.
excerpt: markdown example
tags: ['web design', 'markdown']
published: true
language: en
pt: /2015/05/31/ola-mundo-exemplo-markdown.html
image: hello.jpg
copyright: <!--Copyright (c) 2015 Carlos Rafael Fernandes Picanço.-->
---

Post Writing is using Github Flavored Markdown and Emoji.

:smile:

___
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
___


**Bold** *Italic*

```
**Bold** *Italic*
```

___
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
___



**Blockquote**

```
> blockquote
```

> blockquote


___
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
___

**Inline highlight**

```
`inline` 
```

Yes, `inline` highlight. 

___
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
___


**Links**

```
[www.google.com](http://www.google.com)
```

[www.google.com](http://www.google.com)


Html is used for responsive images:

```
<p><img class="img-responsive center-block" src="http://rafael.picanco.nom.br/media/fpe/fpe.jpeg" alt="Image" /></p>
```
<p><img class="img-responsive center-block" src="http://rafael.picanco.nom.br/media/fpe/fpe.jpeg" alt="Image" /></p>

You could use `![alt](http://link)` to link (unresponsive) images as well.

___
___


**Line Separator**

```
___


```
___