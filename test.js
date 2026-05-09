const raceConcept = require('./xiuchen_BrakeKitManager.js');

console.log("--- Initial Inventory ---");
console.log(raceConcept.inventory);

console.log("\n--- Testing addNewKit ---");
const newKit = raceConcept.addNewKit(3, "StopTech", "Trophy Sport", "6-Pot", "2-piece slotted", 3500, 3);
console.log("Added:", newKit);

console.log("\n--- Testing findKitsByBrand ('Brembo') ---");
console.log(raceConcept.findKitsByBrand("Brembo"));

console.log("\n--- Testing searchBySeries ('CP9040') ---");
console.log(raceConcept.searchBySeries("CP9040"));

console.log("\n--- Testing updateInventory (Selling 2 AP Racing Kits) ---");
console.log(raceConcept.updateInventory(1, -2));

console.log("\n--- Testing calculateTotal (Buying 2 StopTech Kits with discount code THEBRAKESHOP10) ---");
console.log("Total price:", raceConcept.calculateTotal(3, 2, "THEBRAKESHOP10"));

console.log("\n--- Testing getLowStockAlert (Threshold: 3) ---");
console.log(raceConcept.getLowStockAlert(3));
