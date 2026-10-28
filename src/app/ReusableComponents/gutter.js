// Horizontal padding shared by the navbar and every section, so all content
// starts and ends on the same vertical lines as the navbar (logo on the left,
// "Contact Us" on the right). Change it here and everything moves together.
// Sections that use it should not add their own max-width container, or they
// would pull away from the navbar on wide screens.
export const GUTTER = "px-4 lg:px-24";

// The navbar floats as an island: it sits ISLAND_INSET in from the screen
// edges and has ISLAND_PAD inside. Inset + pad equals GUTTER (8 + 8 = 16px on
// phones, 72 + 24 = 96px on desktop), so the logo and "Contact Us" still line
// up with the page content. Keep the three in step if you change one.
export const ISLAND_INSET = "left-2 right-2 lg:left-18 lg:right-18";
export const ISLAND_PAD = "px-2 lg:px-6";
