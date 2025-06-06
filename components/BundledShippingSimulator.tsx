"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ShippingOption {
  id: string;
  name: string;
  date: string;
  price: number;
  co2Savings?: string;
  bundleCount?: number;
  description: string;
}

interface BundledShippingSimulatorProps {
  onShippingSelect?: (option: ShippingOption) => void;
}

export default function BundledShippingSimulator({ onShippingSelect }: BundledShippingSimulatorProps) {
  const [selectedOption, setSelectedOption] = useState<string>("standard");
  const [neighboringOrders, setNeighboringOrders] = useState<number>(0);
  const [showBundleOption, setShowBundleOption] = useState(false);

  // Simulate neighboring orders check
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use a fixed simulation for consistent SSR/client rendering
      const simulatedOrders = 5; // Fixed number for demo
      setNeighboringOrders(simulatedOrders);
      setShowBundleOption(simulatedOrders >= 3);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getDeliveryDate = (daysFromNow: number) => {
    // Use fixed dates for consistent SSR/client rendering
    const dates = [
      "Tomorrow, January 8",
      "Friday, January 10", 
      "Monday, January 13"
    ];
    return dates[Math.min(daysFromNow - 1, dates.length - 1)] || "Next week";
  };

  const shippingOptions: ShippingOption[] = [
    {
      id: "express",
      name: "Express Delivery",
      date: getDeliveryDate(1),
      price: 9.99,
      description: "Fastest delivery available"
    },
    {
      id: "standard",
      name: "Standard Delivery",
      date: getDeliveryDate(3),
      price: 0,
      description: "Free standard shipping"
    },
    ...(showBundleOption ? [{
      id: "bundled",
      name: "Bundled Eco-Delivery",
      date: getDeliveryDate(5),
      price: 0,
      co2Savings: "65%",
      bundleCount: neighboringOrders,
      description: `Bundle with ${neighboringOrders} nearby orders`
    }] : [])
  ];

  const handleOptionSelect = (option: ShippingOption) => {
    setSelectedOption(option.id);
    onShippingSelect?.(option);
  };

  return (
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold mb-2">Choose your delivery</h3>
        <p className="text-sm text-gray-600">
          We're checking for nearby orders to offer eco-friendly bundled shipping...
        </p>
      </div>

      {!showBundleOption && neighboringOrders === 0 && (
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amazon-orange"></div>
          <span>Checking for bundling opportunities in your area...</span>
        </div>
      )}

      <div className="space-y-3">
        {shippingOptions.map((option) => (
          <Card 
            key={option.id}
            className={`p-4 cursor-pointer transition-all border-2 ${
              selectedOption === option.id 
                ? 'border-amazon-orange bg-orange-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="shipping"
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionSelect(option)}
                  className="text-amazon-orange"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{option.name}</span>
                    {option.co2Savings && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        🌱 -{option.co2Savings} CO₂
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                  <p className="text-sm font-medium text-green-700">
                    Get it by {option.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">
                  {option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}`}
                </div>
                {option.bundleCount && (
                  <div className="text-xs text-gray-500">
                    +{option.bundleCount} neighbors
                  </div>
                )}
              </div>
            </div>

            {option.id === "bundled" && selectedOption === "bundled" && (
              <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start space-x-3">
                  <div className="text-green-600 mt-1">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">
                      Great choice for the environment! 🌍
                    </h4>
                    <p className="text-sm text-green-700 mb-2">
                      By choosing bundled delivery, you're helping reduce carbon emissions 
                      by {option.co2Savings} compared to individual deliveries.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong>Your neighborhood:</strong>
                        <br />
                        {option.bundleCount} orders ready to bundle
                      </div>
                      <div>
                        <strong>Environmental impact:</strong>
                        <br />
                        Fewer delivery trucks on the road
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {showBundleOption && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 text-blue-800">
            <i className="fas fa-info-circle"></i>
            <span className="text-sm font-medium">
              Bundled shipping available in your area!
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1">
            We found {neighboringOrders} orders near you that can be delivered together. 
            This reduces packaging waste and carbon emissions while keeping delivery free.
          </p>
        </div>
      )}
    </div>
  );
}