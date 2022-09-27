const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

for (const category of categories) {
  const child = category.firstElementChild;
  const lastChild = category.lastElementChild;
  console.log("Category:", child.textContent);
  console.log("Elements:", lastChild.children.length);
}
