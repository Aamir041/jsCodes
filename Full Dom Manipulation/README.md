#                                         DOM MANIPULATION

1. ### `getElementById`
it is used to unique element from html document by using its `Id`

```html
<div id="div1">
    <p>Hello World</p>
</div>
``` 

```javascript
const div1 = document.getElementById("div1");
```
#


2. ### `getElementByClassName`
same as `getElementById` it is used to get an element  / multiple elements by their class name but in `getElementById` we can only select one element where as like class can be applied for one or  more element therefore we can select one or more with same class in the exact same order they are in html document
```html
<div class="class1">
    <p>Hello World</p>
</div>

<h1 class="class1">
    Hello World Again :)
</h1>
``` 

```javascript
const class1 = document.getElementByClassName("class1");
```

#

3. ### `getElementByTagName`
same as `getElementById` and `getElementByClassName` thery