#at-log
>The javascript annotation framework

##Javascript annotation type(not decorator type in ES6)
As we know,the Annotation type is not surport in javascript language.The at-js framework made it posible.
For example,use at-js, you can write code like this:

```js
'@logger';
var myLogger = {
    info:function(_msg){
        console.log(_msg);
    }
}
```