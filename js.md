Strict mode - is useful to write secure JS by notifying bad syntax into real-errors.

There are 8 data types in JavaScript:
1. Number
2. String
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
8. Object

Primitives are immutable
Objects are mutable by default

var have function scope
let and const have block scope

Symbol - it's a new data type introduced in the ES6 version of javascript. It's used to store an anonymous
and unique value.

null - non-existing or invalid value.

undefined - variable declared but not assigned.

BigInt - it can store large integers.

Scope is the area of code where a variable (or function) exists and is accessible.
1. Global scope ( In a browser, the window object is the global scope.)
2. Function (Local) scope
3. Block Scope

TDZ - is an action that occurs with variables declared using let and const keywords.

Hoisting - the action of moving all variable and function declarations to the top of the current scope.

Closure - allows access from the inner function to the outer function scope.
Closure - ichki funksiyadan tashqi funksiya doirasiga kirish imkonini beradi
The closure has three scope chains:
1. Own scope where variables defined between its curly brackets
2. Outer function's variables
3. Global variables

Lexical environment - javascript means that a variable defined outside a function can be accessible inside another function
defined after the variable declaration. But the opposite is not true; the variables defined inside a function 
will not be accessible outside that function.

Context - Context refers to the object on which the function is executed. If this keyword is used,
this keyword refers to the object on which the function is executed.
Context - bu funksiya bajariladigan ob'ektga ishora qiladi(this keywordi).
Agar this keyword bn ishlatilinsa bu so'z funksiya bajarilayotgan ob'ektga ishora qiladi.

Higher Order Function - takes as a parameter function or return function

Don't use Arrow Function for:
1. Object methods
2. prototypes
3. constructors
4. event handlers

IIFE - function that runs as soon as it's defined.

Object - is an non-primitive data-type that allows you to store multiple collections of data

Object.freeze - method prevents the object from changing its value.
object.hasOwnProperty(prop) - objectning key ekanligi yoki emasligi aniqlab beradi 
Object.entries - method returns a array of [key, value] pairs of a given object

get - to define a getter method to get the property value
set - to define a setter method to set the propery value

this - window, object, html element

Pure function - given the same input, it will always produce the same output. This has no side effects.

Currying - the transformation of the function of multiple arguments into several functions of a single
argument in sequence.

Recursion - is a proccess of calling itself. A function call itself repeatedly until it arrives at a result.

Deep Copy - means that all values of the new variable are copied and disconnected from the original variable.
examples: JSON.parse(JSON.stringify(obj)), lodash(_.cloneDeep)

Shallow Copy - means that certain values are still connected to the original variable.
examples: spread, Object.assign({}, obj), Object.freeze(), lodash(_.clone)

setTimeout - executes a function or specified piece of code when the timer expires.

setInterval - calls the function repeatedly with a set time delay between each call.

Rest operator - allows to represent an indefinite number of arguments as an array.

prototype - is a property of a function. It's the blueprint for creating objects by using that constructor
function with new keyword.
JavaScript-da har bir funktsiya va object default bo'yicha prototype ga ega.
Constructor funksiyani new keyword yordamidadan foydalangan holda object yaratish.

prototype chaining is used to build new types of objects based on existing ones.
It is similar to inheritance in a class based language.

__proto__ - is the actual object that is used in the lookup chain to resolve methods, etc
prototype is the object that is used to build __proto__ when you create an object with new
__proto__ - objectning ichki xossasi bo'lib, uning prototype ga ishora qiladi.

Promise - are JS objects that represent and eventual completion or failure of an asynchronous operation.
Promise may have one of 3 states:
1. Pending: initial state
2. Fulfilled: meaning that the operation was completed successfully
3. Rejected: meaning that the operation failed

Promise chaining - perform multiple asynchronous tasks one after the other

Promise.race() - method will return the promise instance which is firstly resolved or rejected

Promise.all() - is a promise that takes an array of promises as an input (an iterable),
and it gets resolved when all the promises get resolved or any one of them gets rejected
ya'ni barcha berilgan Promiselar resolve bo'lsagina barcha javoblarni qaytaradi.  

Callback - is a function that will be executed after another function gets executed.
Callback's are mainly used to manage asynchronous processes.
Callback - bu boshqa bir funksiyaga argument sifatida berilgan ikkinchi funksiya.

Callback hell - is an anti-pattern with multiple nested callbacks which makes code hard to read and debug
when dealling with asynchronous logic.

Callback function - is a function that is passed to another function with the expectation that
the other function will call it.

async - keyword with a function to represent that the function is an asynchronous function.
The async function returns a promise

await - keyword is used inside the async function to wait for the asynchronous operation.

try...catch - statement is used to handle the exceptions

Event Loop in JavaScript is said to be a constantly running process which keeps a tab on the call stack. 
Its main function is to check whether the call stack is empty or not. If the call stack turns out to be empty, 
the event loop proceeds to execute all the callbacks waiting in the task queue. Inside the task queue, 
the tasks are broadly classified into two categories, namely micro-tasks and macro-tasks.

Higher order function - is a function that takes another function(s) as an argument(s) or
returns a function to its callers.

Array - is an object that can store multiple values at once.

Generatorlar - funksiyalar iteratorlar bilan ishlashning yangi usulini taqdim etadi.
Generator yordamida siz funktsiyaning istalgan joyidan funksiya bajarilishini to'xtatishingiz va kodni 
to'xtatilgan holatdan bajarishni davom ettirishingiz mumkin.
- Generatorlar asinxron vazifalarni yozishda bizga toza kod yozish imkonini beradi.
- Generatorlar iteratorlarni amalga oshirishning osonroq usulini taqdim etadi.
- Generatorlar uning kodini faqat kerak bo'lganda bajaradilar.
- Generatorlar xotirada samarali.

Set - can store any value and the values will be unique

Map - can store any key type and allows keys of any type

WeakSet - can store only collections of object, and does not have size an object in weakSet can be garbage
collected if there is no other reference to it.
WeakSet - faqat ob'ektlar to'plamini saqlashi mumkin va o'lchamiga ega bo'lmagan weakSetdagi ob'ekt, 
agar unga boshqa havola bo'lmasa, axlat yig'ilishi mumkin.

WeakMap - can store only collections of key objects and does not have size, in this case, keys must be objects and
the values can be arbitrary values.
WeakMap - faqat asosiy object collectionlarni saqlashi mumkin va hajmi yo'q, bu holda kalitlar objectlar bo'lishi
kerak va qiymatlar ixtiyoriy qiymatlar bo'lishi mumkin.

Function difference
The arrow function has no arguments property
The constructor cannot be used in the arrow function

shift - remove first element
unshift - arrayning boshida element qo'shadi
pop - remove last element
push - arrayning oxiriga element qo'shadi
find - shartni 1-bajargan qiymatni qaytaradi.

/---------------------------------------------------------/

The object key must be unique.

shift, unshift, pop, push, sort, splice - mutable

throw - is keyword is used to create an error

preventDefault() - method cancels event default behavior(eventni default xatti-harakatlarini bekor qiladi)

constructor() method is called automatically when an object is initialized
