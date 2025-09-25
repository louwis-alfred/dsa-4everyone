/* This function searches for an item in the grocery array and prints its index if found.
If the item is not found, it prints a message saying the item is not in the list. */
const grocery = ["Apple", "Coffee", "Sugar", "Soy sauce", "Milk"];

const search_item = (item) => {
  let found = false;
  for (let i = 0; i < grocery.length; i++) {
    if (item === grocery[i]) {
      console.log(`Found item: ${item} on index ${[i]}`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`${item} is not in the list`);
  }
};

search_item("Sugar");
