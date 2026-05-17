/**
 * References:
 * Web Application: The Brake Shop SG (https://www.thebrakeshop.com.sg/)
 */

let inventory = [
  { id: 1, brand: "AP Racing", series: "CP9040", configuration: "4-Pot", rotorType: "2-piece slotted", price: 2800, stock: 5 },
  { id: 2, brand: "Brembo", series: "GT Systems", configuration: "6-Pot", rotorType: "Drilled", price: 4200, stock: 2 }
];

// 1. Adds a new brake kit object to the inventory array.
function addNewKit(id, brand, series, config, rotor, price, stock) {
  // If stock is less than 0, set it to 0.
  const validatedStock = stock < 0 ? 0 : stock;

  const newKit = {
    id: id,
    brand: brand,
    series: series,
    configuration: config,
    rotorType: rotor,
    price: price,
    stock: validatedStock 
  };

  inventory.push(newKit);
  return newKit;
}

// 2. Filters the array and returns all kits from a specific brake kit's brand name.
function findKitsByBrand(brandName) {
  return inventory.filter(kit => kit.brand.toLowerCase() === brandName.toLowerCase());
}

// 3. Adjusts the stock level after a sale or new shipment.
function updateInventory(id, quantityChange) {
  const kit = inventory.find(k => k.id === id);
  if (kit) {
    kit.stock += quantityChange;
    // Prevent stock from going below 0
    if (kit.stock < 0) {
      kit.stock = 0;
    }
    return kit;
  }
  return null; // Kit not found
}

// 4. Uses string methods to find brake kits containing specific series names.
function searchBySeries(keyword) {
  return inventory.filter(kit => kit.series.toLowerCase().includes(keyword.toLowerCase()));
}

// 5. Calculates the final price for an order, potentially applying a discount code.
function calculateTotal(id, quantity, discountCode) {
  const kit = inventory.find(k => k.id === id);
  if (!kit) {
    return "Kit not found";
  }

  if (kit.stock < quantity) {
    return "Insufficient stock";
  }

  let total = kit.price * quantity;

  // Apply a discount if a valid discount code is provided
  if (discountCode === "THEBRAKESHOP10") {
    total = total * 0.90; // 10% discount
  } else if (discountCode === "THEBRAKESHOP20") {
    total = total * 0.80; // 20% discount
  }

  return total;
}

// 6. Returns a list of all brake kits where the current stock is below a specific number.
function getLowStockAlert(threshold) {
  return inventory.filter(kit => kit.stock < threshold);
}

// Export the node module 
module.exports = {
  inventory,
  addNewKit,
  findKitsByBrand,
  updateInventory,
  searchBySeries,
  calculateTotal,
  getLowStockAlert
};
