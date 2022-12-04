Next.js Node.js server ilovalarini yaratish uchun React-ga asoslangan framework hisoblanadi.

Next.js sahifalarni statik generatsiyadan foydalangan holda oldindan koʻrsatadi, bu boshqa narsalar qatori
u sukut boʻyicha hech qanday maʼlumotni olmasligini bildiradi.

Server Side Rendering(SSR) - dasturning serverdagi HTML fayllarni mijoz uchun to'liq ko'rsatilgan
HTML sahifasiga aylantirish qobiliyati. Veb-brauzer serverdan ma'lumot olish uchun so'rov yuboradi,
u darhol mijozga to'liq ko'rsatilgan sahifani yuborish orqali javob beradi.

SSR(getServerSideProps) ning afzalliklari:
* SSR ilovalari sahifalarni tezroq yuklash imkonini beradi va foydalanuvchi tajribasini yaxshilaydi.(Performance)
* SSR ilovalari qidiruv tizimlari kontentni osongina indekslashi va skanerlashi mumkin. Bu SEO un idealdir.(SEO)
* Brauzerda emas, balki serverda ko'proq og'ir yuklarni ko'tarish orqali siz mijoz brauzerlari va 
qurilmalarini yengillashtirasiz. Natijada, SSR va SSG eski qurilmalari va internetga ulanishi sekinroq 
foydalanuvchilarga veb-ilovani ko'rishni osonlashtiradi.(Usability)

* sahifa ish vaqtida oldindan ko'rsatiladi
* getServerSideProps faqat server tomonida ishlaydi va hech qachon brauzerda ishlamaydi.
* getServerSideProps dan faqat so'rov vaqtida ma'lumotlarini olish kerak bo'lgan sahifani ko'rsatish kerak 
bo'lganda foydalanishingiz kerak.
* Sahifani to'g'ridan-to'g'ri so'raganingizda, getServerSideProps so'rov vaqtida ishlaydi va bu sahifa 
qaytarilgan "props" bilan oldindan ko'rsatiladi.
* next/link or next/router dan foydalanib boshqa sahifaga o'tishni so'raganingizda: 
Next.js getServerSideProps-ni ishga tushiradigan serverga API so‘rovini yuboradi.


SSG(getStaticProps) ning afzalliklari:
* sahifani yaratish vaqtida oldindan ko'rsatiladi
* ko'p qo'shimcha konfiguratsiyalarsiz CDN keshlash yordamida unumdorlikni oshirishingiz mumkin,
* Sizning statik sahifangiz har doim onlayn bo'ladi, hatto serveringiz yoki ma'lumotlar manbangiz ishlamay qolsa ham,
* Sizning sahifangiz server tomonidan ko'rsatilganidan ancha tezroq, chunki butun mantiq qurilish vaqtida bajarilgan
* sizning serveringiz faqat statik fayllarga xizmat qiladi, bu esa server yukini kamaytirishga yordam beradi,
* statik ravishda yaratilgan sahifangizni oldindan ko'rish rejimida ishga tushirishingiz mumkin; keyin sahifa so'rov vaqtida ko'rsatiladi.

SSG ning kamchiliklari:
* kiruvchi so'rovlarga kirish imkoni yo'qligi sababli siz so'rov sarlavhalarini, cookie fayllarini yoki URL so'rov parametrlarini o'qiy olmaysiz,
* kontentingizni saytni joylashtirish o'rtasida o'zgartirib bo'lmaydi

* getStaticProps har doim serverda ishlaydi va hech qachon mijozda emas.
* Agar sahifa mazmuni tashqi ma'lumotlarga bog'liq bo'lsa, faqat getStaticProps usulidan foydalaning.
* Agar sahifa paths tashqi ma'lumotlarga bog'liq bo'lsa - getStaticProps ga qo'shimcha ravishda 
getStaticPaths usulidan foydalaning.


getStaticPaths(Static Site Generation) - 
* Bu funksiya yaratish vaqtida oldindan koʻrsatiladigan sahifalar roʻyxatini yaratadi.
* getStaticPaths tomonidan belgilangan barcha yoʻllarni statik ravishda oldindan koʻrsatadi.
* getStaticPaths faqat ishlab chiqarishni qurish paytida ishlaydi, ish vaqtida chaqirilmaydi. 
* GetStaticPaths ichida yozilgan kodni ushbu vosita yordamida mijoz tomonidagi to'plamdan olib tashlashni 
tekshirishingiz mumkin.

fallback: false - any paths not returned by getStaticPaths will result in a 404 page.
fallback: true - the paths not been generated at build time will not result in a 404 page. Instead, Next.js will serve a fallback version
of the page on the page on the first request to such a paths


Sizga mukammal SEO va ishlash kerakmi? SSG
Sizga SEO va ma'lumotlaringizni tez-tez yangilash qobiliyati kerakmi? SSR.
Sizga tez-tez yangilanadigan ma'lumotlar kerakmi, lekin SEO va ishlash ustuvor emasmi? CSR.
Kontentni tez-tez yangilashni talab qiladigan minglab sahifalaringiz bormi? ISR.