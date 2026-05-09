# Brake Kit Manager Module

A Node.js module that simulates a backend inventory management system for a high-performance brake kit catalog.

## Setup & Usage

To use this module, require the file in your application:

```javascript
const brakeManager = require('./xiuchen_BrakeKitManager.js');

// Example usage:
const bremboKits = brakeManager.findKitsByBrand("Brembo");
console.log(bremboKits);
```

## Functions

1. **`addNewKit(id, brand, series, config, rotor, price, stock)`**: Adds a new brake kit to the inventory.
2. **`findKitsByBrand(brandName)`**: Returns an array of kits matching the specified brand.
3. **`updateInventory(id, quantityChange)`**: Adjusts the stock level of a kit (use negative numbers for sales).
4. **`searchBySeries(keyword)`**: Finds brake kits containing the specific series keyword.
5. **`calculateTotal(id, quantity, discountCode)`**: Calculates final price. Accepts `"THEBRAKESHOP10"` (10% off) or `"THEBRAKESHOP20"` (20% off) as discount codes.
6. **`getLowStockAlert(threshold)`**: Returns kits where the stock is below the threshold.

## References
* **Web Application:** [The Brake Shop SG](https://www.thebrakeshop.com.sg/)

## AI Usage Declaration
I used AI to assist with generating ideas for the functions, the mock data array, and structuring the mock schema for the brake kits, as permitted by the assignment guidelines. I manually modified and implemented the code.
