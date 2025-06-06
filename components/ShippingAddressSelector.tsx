"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ShippingAddress {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

interface ShippingAddressSelectorProps {
  onAddressSelect?: (address: ShippingAddress) => void;
}

export default function ShippingAddressSelector({ onAddressSelect }: ShippingAddressSelectorProps) {
  const [selectedAddress, setSelectedAddress] = useState<string>("default");

  // Simulated user addresses
  const addresses: ShippingAddress[] = [
    {
      id: "default",
      name: "John Smith",
      street: "123 Main Street, Apt 4B",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      isDefault: true
    },
    {
      id: "work",
      name: "John Smith (Work)",
      street: "456 Business Ave, Suite 200",
      city: "Seattle", 
      state: "WA",
      zip: "98102",
      isDefault: false
    }
  ];

  const handleAddressSelect = (address: ShippingAddress) => {
    setSelectedAddress(address.id);
    onAddressSelect?.(address);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Deliver to</h3>
      
      <div className="space-y-3">
        {addresses.map((address) => (
          <Card 
            key={address.id}
            className={`p-4 cursor-pointer transition-all border-2 ${
              selectedAddress === address.id 
                ? 'border-amazon-orange bg-orange-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleAddressSelect(address)}
          >
            <div className="flex items-start space-x-3">
              <input
                type="radio"
                name="address"
                checked={selectedAddress === address.id}
                onChange={() => handleAddressSelect(address)}
                className="mt-1 text-amazon-orange"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{address.name}</span>
                  {address.isDefault && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  <div>{address.street}</div>
                  <div>{address.city}, {address.state} {address.zip}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full text-amazon-blue border-amazon-blue hover:bg-blue-50">
        <i className="fas fa-plus mr-2"></i>
        Add a new address
      </Button>
    </div>
  );
}