# 📦 Inventory Management (Array of Objects)

A simple inventory manager built in **JavaScript** using arrays and objects.  
It supports adding, updating, finding, and removing products from the inventory.

---

## 🎯 Objective

- Maintain an `inventory` array of objects `{ name: string(lowercase), quantity: integer }`.
- Create the following functions:

| Function | Description |
|-----------|--------------|
| `findProductIndex(name)` | Finds the index of a product in `inventory` (case-insensitive). Returns `-1` if not found. |
| `addProduct(product)` | Adds a product to the inventory or updates its quantity. Logs messages accordingly. |
| `removeProduct(name, qty)` | Removes or reduces a product’s quantity. Handles missing or insufficient products properly. |

---

## 🧩 Function Behavior

### `addProduct(product)`
- If product already exists → updates quantity  
  **Logs:** `"flour quantity updated"`
- If product does not exist → adds it  
  **Logs:** `"flour added to inventory"`

### `removeProduct(name, qty)`
- If not found → **Logs:** `"flour not found"`
- If insufficient quantity → **Logs:** `"Not enough flour available, remaining pieces: 5"`
- If quantity reduced → **Logs:** `"Remaining flour pieces: 15"`
- If quantity reaches zero → product removed from inventory

---

## 🧪 Example Usage

```js
addProduct({ name: "FLOUR", quantity: 20 });
// flour added to inventory

addProduct({ name: "RICE", quantity: 5 });
// rice added to inventory

addProduct({ name: "FLOUR", quantity: 5 });
// flour quantity updated

removeProduct("FLOUR", 5);
// Remaining flour pieces: 20

removeProduct("FLOUR", 25);
// Not enough flour available, remaining pieces: 20

removeProduct("OIL", 2);
// oil not found
