import { PricingTable } from '@clerk/nextjs';
import React from 'react'

const PricingSection = () => {
    return (
        <div className="max-w-4xl">
            <div className="mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Simple Pricing</h2>
                <p className="text-xl text-stone-600 font-light">
                    Start for free. Upgrade to become a master chef.
                </p>
            </div>

            <div>
               {" "}
               <PricingTable
                  checkoutProps={{
                    appearance: {
                     elements: {
                       drawerRoot: {
                        zIndex: 2000,
                      },
                     },
                  },
                }}
                />
            </div>
        </div>
        
    );
};

export default PricingSection;