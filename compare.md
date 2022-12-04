scss vs sass

1. Uses braces {}
2. Uses semi-colons ;
3. Assignment sign is :
4. To create a mixin it uses the @mixin directive
5. To use mixin it precedes it with the @include directive
6. Files have the .scss extension.

Original Sass:

1. Syntax is similar to Ruby
2. No braces
3. No strict indentation
4. No semi-colons
5. Assignment sign is = instead of :
6. To create a mixin it uses the = sign
7. To use mixin it precedes it with the + sign
8. Files have the .sass extension.

React and Next
NextJs provides server side rendering (SSR)
ReactJs provides client side rendering (CSR)

primitive data types

1. contain a single value
2. stored in the stack
3. are immutable values.
4. values compared by value

reference data types

1. contain a multiple values or complex data
2. stored in the heap
3. objects are mutable by default
4. compare by reference not value

let and var difference

1. scope // let function scope, var global scope
2. hoisting // will only be hoisting var variables
3. creating global object // by creating var, the variable creates a property in the window object
4. redeclaration //

Arrow function

1. this keyword can't be used
2. arguments method can't be used
3. object methodi sifatida ishlatilganda: return this = window

FP
In functional programs, variables and functions are the main elements of the code,
OOP
while in object-oriented programs objects and methods are the key elements.

forEach

1. returns undefined
2. performs given operation on each element of the array map
3. returns new array with transformed elements, leaving back original array unchanged
4. performs given transformation on a copy of each elements.

slice

1. doesn't modify the orinal array(immutable)
2. returns the subset of original array
3. used pick the elements from array splice
4. modifies the original array(mutable)
5. returns the deleted element as array
6. used to insert or delete elements to array

return

1. Qiymatni qaytaradi va funktsiyani tugatadi.
2. Oddiy funktsiyalarda ham, generator funktsiyalarida ham mavjud.

yield

1. Qiymatni qaytaradi va funktsiyani to'xtatadi, lekin funktsiyani tugatmaydi.
2. Faqat generator funktsiyalarida mavjud.

Real DOM

1. Updates are slow
2. DOM manipulation is very expensive
3. you can update HTML directly
4. creates a new DOM if element updates

Virtual DOM

1. updates are fast
2. DOM manipulation is very easy
3. you can't directly update HTML
4. it updates the JSX if element update

Controlled

1. form data is handled by a React component.
2. usage of component State
3. it's possible to check whether the input is being modified

Uncontrolled

1. form data is handled by the DOM itself.
2. must use Refs

every vs some
every - hamma shart to'g'ri bo'lgandagina true, ask holda false qiymat qaytaradi.
some - 1 ta shart to'g'ri bo'lsa true, birorta ham shart bajarilmasa false qiymat qaytaradi.

replace vs push
router.replace dan foydalanganda, stekning yuqori qismini qayta yozishingiz mumkin
router.push dan foydalanilganda, u stekning yuqori qismiga yangi marshrut qo'shadi.

rest vs spread
rest - to'plash
spread - yoyish

Agar siz "push" dan foydalansangiz va keyin brauzerning orqaga tugmasini bossangiz,
u sizni hozir bo'lgan sahifaga qaytaradi, lekin "replace" dan foydalansangiz,
u sizni ikki sahifaga qaytaradi.

If you use push, and then hit the browser's back button, it will take you back to the page you are currently on,
but if you use replace it will take you two pages back.
