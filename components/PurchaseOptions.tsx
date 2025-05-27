"use client";

import { useState } from "react";

export default function PurchaseOptions() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border border-gray-300 rounded-lg p-4 sticky top-4">
      <div className="mb-4">
        <div className="flex items-baseline mb-1">
          <span className="text-xs amazon-gray mr-1">$</span>
          <span className="text-2xl amazon-red">44</span>
          <span className="text-sm amazon-red">99</span>
        </div>
        <div className="text-xs amazon-gray mb-2">FREE Returns</div>
        
        <div className="text-sm mb-2">
          <span className="amazon-gray">FREE delivery</span>
          <span className="font-bold"> Wednesday, January 17</span>
        </div>
        <div className="amazon-blue text-sm mb-3 hover:amazon-red hover:underline cursor-pointer">
          Or fastest delivery <span className="font-bold">Tomorrow, January 16</span>. Order within <span className="text-green-700">2 hrs 45 mins</span>
        </div>
        
        <div className="flex items-center text-sm mb-4">
          <i className="fas fa-map-marker-alt amazon-gray mr-2"></i>
          <span>Deliver to <span className="font-bold">New York 10001</span></span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-green-700 text-lg font-bold mb-1">In Stock</div>
        <div className="text-sm amazon-gray">Ships from Amazon</div>
        <div className="text-sm amazon-gray">Sold by Hydro Flask</div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-bold block mb-2">Qty:</label>
        <select 
          className="border border-gray-300 rounded px-3 py-1 w-20"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2 mb-4">
        <button className="w-full bg-amazon-orange hover:bg-orange-500 amazon-navy font-bold py-2 px-4 rounded amazon-button">
          Add to Cart
        </button>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded amazon-button">
          Buy Now
        </button>
      </div>

      <div className="text-xs amazon-gray mb-4">
        <i className="fas fa-lock mr-1"></i>
        Secure transaction
      </div>

      <div className="border-t pt-4 space-y-2 text-sm">
        <div className="flex items-center amazon-blue hover:amazon-red cursor-pointer">
          <i className="fas fa-list mr-2"></i>
          Add to List
        </div>
        <div className="flex items-center amazon-blue hover:amazon-red cursor-pointer">
          <i className="fas fa-gift mr-2"></i>
          Add to Registry
        </div>
      </div>
    </div>
  );
}
