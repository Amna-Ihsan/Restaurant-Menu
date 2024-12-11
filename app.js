// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./menu-item.jpg",
    desc: `Fluffy, golden buttermilk pancakes served with butter and maple syrup for a classic, comforting breakfast treat. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/Diner Double.jpg",
    desc: `A classic, juicy burger served on a soft bun with fresh toppings, paired with crispy golden fries for the perfect comfort food combo. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/godzilla milkshake.jpg",
    desc: `A monstrous milkshake made with creamy vanilla ice cream and topped with whipped cream, rainbow sprinkles, and a towering candy garnish, perfect for a fun and indulgent treat!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/Country Delight.jpg",
    desc: `A perfectly cooked egg served on toasted bread, creating a simple yet satisfying breakfast, with the option to add toppings like avocado, cheese, or crispy bacon. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/Egg Attack.jpg",
    desc: `A bold and flavorful dish featuring crispy fried eggs served over a bed of seasoned vegetables or spiced meat, drizzled with a tangy sauce for a savory, satisfying meal that packs a punch.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/Oreo Dream.jpg",
    desc: `A decadent dessert featuring a creamy blend of crushed Oreo cookies and rich vanilla ice cream, topped with whipped cream  and more Oreo crumbles for the ultimate indulgence.`,
  },
  {
    id: 7,
    title: "Avocado toast muffins",
    category: "breakfast",
    price: 8.99,
    img: "./images/Avocado toast muffins.jpg",
    desc: `Savory muffins topped with creamy mashed avocado, a sprinkle of sea salt, and a dash of red pepper flakes, offering a delicious twist on the classic avocado toast for a perfect breakfast or snack.`,
  },
  {
    id: 8,
    title: "Pesto Spinch penny",
    category: "lunch",
    price: 12.99,
    img: "./images/Pesto Spinach penny.webp",
    desc: `A vibrant dish featuring penne pasta tossed in a rich pesto sauce, complemented by fresh spinach for a light yet flavorful meal that's both satisfying and nutritious.`,
  },
  {
    id: 9,
    title: "avocado berry smoothie",
    category: "shakes",
    price: 16.99,
    img: "./images/avocado berry smoothie.webp",
    desc: `A refreshing and creamy smoothie blending ripe avocado, mixed berries, and a touch of honey, creating a perfect balance of sweet and creamy for a nutritious, energizing drink..`,
  },
  {
    id: 10,
    title: "beef steak",
    category: "dinner",
    price: 22.99,
    img: "./images/beef steak.jpg",
    desc: `A tender and juicy beef steak, perfectly seared to your preferred doneness, served with savory sides and drizzled with a rich, flavorful sauce for a classic and satisfying meal.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return ` <article class="menu-item">
           <img src="${item.img}"alt=${item.title} class="photo" />
           <div class="item-info">
             <header>
               <h4>${item.title}</h4>
               <h4 class="price">$${item.price}</h4>
             </header>
             <p class="item-text">
             ${item.desc}
             </p>
           </div>
         </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" 
      data-id="${category}">
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItems) {
        // console.log(menuItems.category);
        if (menuItems.category === category) {
          return menuItems;
        }
      });
      //  console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
