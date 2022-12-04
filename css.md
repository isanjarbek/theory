:root represents the <html> element and is the same as the html selector.
:root can be useful for declaring global CSS variables:

margin - around the element, used for space on the outside

padding - inside the element, used to write a space from the inside

Box model - is a box that wraps around each HTML element. It consists of: margins, borders, padding, and actual content.

css selectors - are used to "find" (or select) the HTML elements you want to style.
We can divide CSS selectors into five categories:

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)

display: 'none' - removes the element from the layout flow.
does not take up space in the window, disappears completely. removes the item from the page

visibility: hidden - hides it but leaves the space.
opacity: 0 - simply disappears in the window but stays in place. It has a click event

pseudo-class is used to define a special state of an element. (hover, focus, active, )
pseudo-element is used to style specified parts of an element.(after, before, nth-child)

static - In HTML, each element initially has the same value.
relative - the element places itself relative to its current (normal) position.
fixed - the element is placed relative to the "viewport" (the part of our website that is visible to the user).
absolute - the element is positioned relative to its nearest positioned ancestor element
sticky - the element is placed depending on where the "scroll" is located. This value contains relative and fixed values


object-fit: cover
butun fon tasvirini element chegaralarida saqlaydi, shu bilan birga uning asl tomonlar nisbatini saqlaydi. \
Agar siz tasvirni buzilmasdan konteyner ichida markazlashtirmoqchi bo'lsangiz, bu foydali bo'ladi.

object-fit: contain
fon tasvirini asl tomonlar nisbatini saqlab qolgan holda erkin masshtablash imkonini beradi,
lekin agar kerak bo'lsa, uning qismlarini kesadi.

@minxin - you create resued style code(accepts parametr)

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
background-color: lighten($base-color, $i \* 5%);
  }
}

$sizes: 40px, 50px, 80px;
@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
