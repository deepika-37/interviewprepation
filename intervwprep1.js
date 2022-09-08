//1.what are the differences between var,letand const//

In JavaScript, it can declare a variable using 3 keywords that are var, let, and const. see the differences between the var, let, and const keywords.  the scope and other required concepts about each keyword.

var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 
Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. <script>
   example:
    var a = 10
        function f(){
            console.log(a)
        }
    f();
    console.log(a);
</script>