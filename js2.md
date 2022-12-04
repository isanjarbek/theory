Referensial Transparency - JavaScript dasturidagi ifoda uning qiymati yoki dastur natijasini o'zgartirmasdan
bir xil qiymatga ega bo'lgan boshqa o'zgaruvchi bilan almashtirilishi mumkinligini ta'kidlaydi. 
Natijada, usullar hech qanday nojo'ya ta'sirlarsiz berilgan argument uchun har doim bir xil qiymatni qaytarishi kerak

script taglarning noto'g'ri joylashuvi web sahivaning yuklanishi sekinlashishiga, render jarayonini bloklashiga
olib keladi. blocklanmasligi uchun body tag dan so'ng ishlatish kerak.

module script lar bizga js ning import va export operatorlaridan foydalanishga imkon beradi.

async - browser script fileni renderdan alohida parallel ravishda yuklaydi. Kamchiligi ular yuklanib bo'lgandan
keyin ishga tushib ketadi bu render boshida ham, oxirida ham bo'lishi mumkin va multi script filelar bo'lsa
ular o'zaro bog'langan yoki tobe bo'lsa xatoliklar kelib chiqishi mumkin, ya'ni scriptlar bajaralish
ketma-ketligini ularni yuklanish vaqti belgilaydi. HTML dagi ketma-ketligi ahamiyatsiz bo'ladi.

defer - dom tayyor bo'lgandan keyin ishga tushadi. HTML dagi ketma-ketlik bo'yicha bajariladi.

async and defer faqat tashqi script filelarni yuklashda ishlatilinadi.

JS kodimiz ishga tushar ekan, interpretor kodimizni o'ngdan chapge, tepadan pastga qatorma-qator o'qiydi.

Stack - stored primitive values
Heap - the objects and functions you create are stored

Execution Context - uni quti deb tushunsak bo'ladi, bizni barcha kodlarimiz shu quti ichida ishlaydi.
E.C ichida 2 ta narsa mavjud. Variable environment and code. E.C 2 ta bosqichda yaraladi. memory creation, code

Call Stack - execution context qanday ketma-ketlikda ishlashini boshqarib turadi. E.C yaratish, o'chirish...
LIFO (oxirgi kiruvchi birinchi chiqish) tamoyili asosida ishlaydigan stek ma'lumotlar strukturasidan foydalanadi.

Single-threaded - JavaScript code is run, runs in one line at a time manner and there is no possibility of
running code in parallel.
Single-threaded - JavaScript kodi ishga tushiriladi, bir vaqtning o'zida bir qatorda ishlaydi va 
parallel ravishda kodni ishga tushirish imkoniyati yo'q chunki unda faqat bitta call stack mavjud.

Localstorage - it saves user data without expiring the storage period, this data is not deleted when user
closes the browser window.
Localstorage - foydalanuvchi ma'lumotlarini saqlash muddati tugamasdan saqlaydi, 
foydalanuvchi brauzerni yopganda bu ma'lumotlar o'chirilmaydi.

Sessionstorage - it is like local storage date expect it will delete all windows when browser windows closed
by a web user.
Sessionstorage - bu mahalliy saqlash sanasi, brauzer oynalari veb-foydalanuvchi tomonidan yopilganda, 
u barcha oynalarni o'chirib tashlaydi.

Cookies - are data, stored in small text files as name value pairs, on your computer. Once a cookie has been
set, all page requests that follow return the cookie name and value.

Cookie-fayllar - bu sizning kompyuteringizda nom qiymati juftlari sifatida kichik matnli fayllarda saqlanadigan 
ma'lumotlar. Cookie o'rnatilgandan so'ng, keyingi barcha sahifa so'rovlari cookie nomi va qiymatini qaytaradi.
Cookie-fayllar to'g'ridan-to'g'ri brauzerda saqlanadigan kichik ma'lumotlar qatoridir.
Cookie-fayllar odatda veb-server tomonidan Set-Cookie HTTP-sarlavhasi javobidan foydalanib o'rnatiladi. Keyin 
brauzer ularni avtomatik ravishda (deyarli) bir xil domenga yuborilgan har bir so'rovga Cookie HTTP sarlavhasi
yordamida qo'shadi. cookie-fayllarga document.cookie orqali kirish mumkin.

TypeScript - is a strongly types programming language that buildings on JavaScript giving you better
tooling at any type.

APIs mainly goal to share features and functionality with other system.

Event Bubbling - is the event starts from the target element to the top element.
Event Bubbling - bu hodisa hozirgi elementdan yuqori elementgacha boshlanadi. stopPropagation()

Event Capturing - is the event starts from top element to the target element. It's the opposite of
event bubbling, which starts from target element to the top element.
Event Capturing - bu hodisa yuqori elementdan target elementgacha boshlanadi.
Bu target elementdan yuqori elementgacha boshlanadigan hodisa bubbling qarama-qarshidir.

Event loop - is a single-threaded loop that monitors the call stack and checks if there is any work
to be done in the task queue. If the call stack is empty and there are callback functions in the task queue,
a function is dequeued and pushed onto the call stack to be executed.
Voqealar sikli - bu call stack ni kuzatuvchi va topshiriqlar qatorida bajarilishi kerak bo'lgan 
biron bir ish mavjudligini tekshiradigan bitta ipli tsikl. Agar qo'ng'iroqlar to'plami bo'sh bo'lsa va 
topshiriqlar qatorida qayta qo'ng'iroq qilish funksiyalari mavjud bo'lsa, funktsiya navbatdan chiqariladi 
va bajarilishi uchun qo'ng'iroqlar stekiga suriladi.

stack - (console.log)
microtask - (promise)
macrotask - (setTimeout, setInterval)

create - POST
read - GET
create or update - PUT
delete - DELETE
update - PATCH

Proksilash bizga objectlar un proksi object yaratish imkon beradi va ob'ektni o'rash, ob'ektga o'qish, kiritish, 
tekshirish va hokazo kabi turli operatsiyalarni intercept/override qilish uchun ishlatiladi. 
Proksilash bizga ob'ekt yoki funksiyani holatga qarab, vaziyatga mos tushadigan usuldan foydalanish imkonini beradi.

Blob "Binary Large Object" degan ma'noni anglatadi va bu baytlar bo'lagining noaniq ifodasidir.
Veb-brauzerlar Blob ma'lumotlarni saqlash uchun javobgar bo'lgan objectni amalga oshiradilar.

Immutable data uning tuzilishini yoki undagi ma'lumotlarni o'zgartira olmaydi.

Function composition - bu bir funksiyaning natijasi keyingi funktsiyaga o'tkaziladigan yondashuv bo'lib, 
u yakuniy natija uchun yakuniy funktsiya bajarilgunga qadar boshqasiga uzatiladi. Funksiya kompozitsiyalari 
istalgan miqdordagi funktsiyalardan iborat bo'lishi mumkin.
// compose = (fn1, fn2) => value => fn2(fn1(value))
