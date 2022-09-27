const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const category = [...categories].map((category) => {
  const child = category.firstElementChild;
  const lastChild = category.lastElementChild;
  console.log("Category:", child.textContent);
  console.log("Elements:", lastChild.children.length);
});
