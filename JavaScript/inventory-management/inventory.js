// 1) Empty inventory array
let inventory = [];

// 2) Function to find the index of a product by name
function findProductIndex(name) {
  const key = name.toLowerCase();
  return inventory.findIndex(item => item.name === key);
}

// 3) Function to add or update a product in the inventory
//    Log formats (important for tests):
//    - "<name> quantity updated"
//    - "<name> added to inventory"
function addProduct(product) {
  const name = product.name.toLowerCase();
  const qty = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    // Product exists - update its quantity
    inventory[index].quantity += qty;
    console.log(name + " quantity updated");
  } else {
    // Product not found - add new product
    inventory.push({ name: name, quantity: qty });
    console.log(name + " added to inventory");
  }
}

// 4) Function to remove or reduce product quantity
//    Log formats (important for tests):
//    - "Remaining <name> pieces: <qty>"
//    - "Not enough <name> available, remaining pieces: <qty>"
//    - "<name> not found"
function removeProduct(name, qty) {
  const key = name.toLowerCase();
  const index = findProductIndex(key);

  if (index === -1) {
    console.log(key + " not found");
    return;
  }

  const product = inventory[index];

  if (product.quantity < qty) {
    console.log(`Not enough ${key} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= qty;

  if (product.quantity === 0) {
    // Remove product completely when quantity reaches zero
    inventory.splice(index, 1);
  } else {
    console.log(`Remaining ${key} pieces: ${product.quantity}`);
  }
}

// --- Example Tests (Optional) ---
// addProduct({ name: "FLOUR", quantity: 20 }); // flour added to inventory
// addProduct({ name: "FLOUR", quantity: 5 });  // flour quantity updated
// removeProduct("FLOUR", 5);                   // Remaining flour pieces: 20
// removeProduct("OIL", 2);                     // oil not found
