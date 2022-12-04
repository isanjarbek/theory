React - is an open source Javascript library for creating user interfaces.
It's declarative, efficient, and flexible, which allows us to create reusable UI components.

Props - are used to transfer data from the parent component to the child component.
we can reuse the component

State - is a built in React Object that is used create and manage data within our components.
It is used to store data.

render() - it is used to read props and state and return our JSX code to our app's root component.

Real DOM - updates are slow, you can update HTML directly. Creates a new DOM if the ele+ment updates.

Virtual DOM - is much faster and efficient. It updates the JSX if the element updated.

Portal - DOM ierarxiyasidan tashqarida boshqa yuqori darajadagi tree yaratish va ushbu componentni uning 
ichiga kiritish orqali child componentining elementini ko'rsatish imkonini beradi.
Modal, Tooltips

React.memo - bu pure function components va hooklarning render qilinishini optimallashtirish uchun foydalanishingiz mumkin
bo'lgan funksiya. 

React.memo-ga o'ralgan funksiya natijasi xotirada saqlanadi va agar u xuddi shu kiritish bilan qayta chaqirilsa,
keshlangan natijani qaytaradi. Childlarni render qilmasdan parentni update qilish

React Composition - not to create similar components and create reusable components anywhere.

React Lifecycle methods are series of events that happen from the birth of the react component to it is end.
Mounting - componentDidMount() this method is called when your component is mounted and ready.
Updating - componentDidUpdate() Immediately occurs when component update occurs.
Unmounting - componentWillUnmounting() is called just before the component is unmounted or destroyed

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
log those errors, and display a fallback UI instead of the component tree that crashed.

Prop drilling - is the process by which you pass data from one component of the React Component tree to another
by going through other components that do not need the data but only help in passing it around
Prop drilling is the act of passing props through multiple layers of components.

Prop drilling bu propslarni komponentlarning bir nechta layerlaridan o'tkazish harakati.

Higher Order Component (HOC) is a function that takes a component and returns a new component.
1. Code reuse, logic and bootstrap abstraction.
2. Render hijacking.
3. State abstraction and manipulation.
4. Props manipulation.

Controlled component - will save a lot of time and will ensure a cleaner code.

Uncontrolled component - don’t use any states on "input" elements or any event handler. 
This type of component doesn’t care about an input element’s real-time value changes.

Lazy load - yuklanishni kechiktirish, ya’ni kerak bo’lgan vaqtda yuklash.

Context - provides a way to pass data through the component tree without having to pass props down
manually at every level.

useState - is a hook that allows you to have state variables in functional components. You pass the initial state
to this function and it returns a variable with the current state value and another function to update this value
You can do many things with the useState hook

useEffect - is essentially replaces the componentDidMount lifecycle function from a class component, but useEffect
is used in a functional component.
useEffect is most commonly used to set a piece of state to that component, fetch data or setting events.

useEffect hook accepts 2 arguments
useEffect executes callback only if the dependencies have changed between renderings.
callback is the function containing the side-effect logic
dependencies is an array of dependencies

useLayoutEffect - DOM dan o'qish tartibi va sinxron tarzda qayta ko'rsatish uchun ishlatiladi.

useContext - share data without passing props

useMemo - is to memoize a calculation result between a function's calls and between renders.
useMemo - the hook is used in functional components to memoize expensive functions to that they are only called
when a set input changes rather than every render.

useCallback - is to memoize a callback itself(referential equality) between renders.

useRef - is used to store mutable values that do not require re-rendering when they are updated.

Styled Component - is a library for React and React Native to write and manage your CSS. They allow you to write
CSS in your JavaScript.

Every callback function should be memoized to prevent useless re-rendering of child components that use 
the callback function.

Flux - will help to keep the data undirectional in React.

it makes fetching, caching, synchronizing and updating server state in your React applications a breeze

React-da yangilanishlar qanday ishlaydi?
1. Birinchi yuklashda ReactDOM.render() Virtual DOM daraxti va haqiqiy DOM daraxtini yaratadi.
2. React Kuzatiladigan patternlar ishlaganda, har qanday hodisa (masalan, tugmani bosish, 
chap tugmani bosish, api javobi va h.k.) sodir bo'lganda, Virtual DOM daraxti tugunlariga propslar o'zgarishi 
haqida xabar beriladi, agar ushbu tugunda ishlatiladigan xususiyatlar yangilangan bo'lsa, tugun yangilanadi. 
3. React Virtual DOM-ni haqiqiy DOM bilan taqqoslaydi va haqiqiy DOM-ni yangilaydi.
Bu jarayon Reconciliation deb ataladi. React yarashtirishning Diffing algoritm texnikasidan foydalanadi.
4. Yangilangan haqiqiy DOM brauzerda qayta bo'yalgan.

VDOM - bu Real DOM ning virtual ko'rinishi
Virtual DOM ishlashni tezlashtiradi, chunki ishlov berishning o'zi kamroq vaqt ichida amalga oshiriladi. 
Buning sababi - o'zgartirilgan ma'lumotlarning miqdori - butun sahifani yangilash uchun vaqtni behuda 
sarflashdan ko'ra, siz uni kichik elementlarga va o'zaro ta'sirlarga bo'lishingiz mumkin.

SPA - yangi sahifalarni toʻliq yuklashning standart usulidan foydalanmaydigan veb-ilovadir. U veb-brauzer bilan 
o'zaro aloqada bo'lish orqali veb-serverdan yangi ma'lumotlarni oladi va joriy veb-sahifani yangilaydi. 
SPA veb-saytni birinchi marta ochganingizda yuklangan sahifaga ega. Yangi sahifalarga oʻtmaydi.
SPA saytlari UI UX uchun juda yaxshi, ammo ular SEO da eng yaxshisi emas, bu reyting bilan bog'liq muammolarni keltirib chiqaradi.

## REDUX
Redux - is a popular open-source JS library for managing and centralizing application state.

store - hamma reducer va state larni o'z ichiga oladi va Providerga prop sifatida beriladi.

dispatch() - bu storega state larni jo'natish va statelarni o'zgartirish uchun ishlatilinadi.

Selectors - store state qiymatidan ma'lum ma'lumotlar qismlarini qanday chiqarishni biladigan funktsiyalar.

Reducer is a function where the first argument is the current state of the world and the second is something 
that happened. Somewhere inside of the function, we figure out what the new state of the world ought to be based on whatever happened.

Reducer - bu funksiya bo'lib, unda birinchi argument initial state, ikkinchisi esa sodir bo'lgan narsadir(action). 
Funktsiyaning bir joyida biz nima sodir bo'lishidan qat'i nazar, yangi holati qanday bo'lishi kerakligini aniqlaymiz.

combineReducers - har bir reducerning holatini kalitlari ostida joylashtiradi va yagona objectga to'playdi

Action - bu stateni o'zgartirish niyatini ifodalovchi object.
Action store ga ma'lumotlarni olishning yagona yo'li. Har qanday maʼlumotlar, xoh UI hodisalari, tarmoq 
qoʻngʻiroqlari yoki WebSockets kabi boshqa manbalardan boʻladimi, oxir-oqibat action sifatida yuborilishi kerak.
Action bajarilayotgan harakat turini ko'rsatuvchi turdagi maydonga(type) ega bo'lishi kerak. Turlar constants 
sifatida belgilanishi va boshqa moduldan import qilinishi mumkin. Symboldan ko'ra, stringdan foydalanish yaxshidir, 
chunki satrlarni ketma-ketlashtirish mumkin.

payload - action objectida nima sodir bo'lganligi haqida qo'shimcha ma'lumotga ega bo'lgan field.

Middleware - used to configure the "dispatch" function

<!-- qanday holatlarda callback funclarni memoize qilish kerak  -->
Redux Persist kutubxonasi yordamida ishlab chiquvchilar Redux store ni doimiy xotirada, masalan, 
mahalliy xotirada saqlashlari mumkin. Shu sababli, brauzerni yangilagandan keyin ham sayt holati saqlanib qoladi.

RTK Query-ning asosiy xususiyati uning keshlangan ma'lumotlarni boshqarishdir. 
Serverdan ma'lumotlar olinganda, RTK so'rovi Redux do'konida ma'lumotlarni "kesh" sifatida saqlaydi. 
Xuddi shu ma'lumotlar uchun qo'shimcha so'rov bajarilganda, RTK so'rovi serverga qo'shimcha so'rov 
yuborish o'rniga mavjud keshlangan ma'lumotlarni taqdim etadi.