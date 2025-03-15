import { CheckIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { BASE_URL } from "./utils/Constants";
import { useEffect, useState } from "react";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceYearly: "₹1",
    description: "Affordable plan with limited features.",
    features: [
      "Can send only 5 connections per year",
      "Will get premium blue tick for a year",
      "Can chat for only 3 hours a day",
    ],
    featured: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#",
    priceYearly: "₹2",
    description: "Unlimited access with premium features.",
    features: [
      "Can send infinite requests per day",
      "Will get premium tick mark",
      "Can chat whole day",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const[isUserPremium,setIsUserPremium]=useState(false)

  useEffect(()=>{
    verifyPremiumUser()
  },[])

  const verifyPremiumUser=async()=>{
    const res=await axios.get(BASE_URL+"/premium/verify",{withCredentials:true})
    if(res.data.isPremium){
      setIsUserPremium(true)
    }

  }





  const handleButtonClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    //It should open razorpay paying dialog box
    const{amount,keyId,currency,notes,orderId}=order.data;
    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "DevMeet",
      description: "Connect With Other Developers",
      order_id: orderId, // This is the order_id created in the backend
      
      prefill: {
        name: notes.firstName+" "+notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler:verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return isUserPremium ?"You are Already a Member": (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
        Choose an affordable plan that fits your needs and enjoy premium
        benefits.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 text-white shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              className={classNames(
                tier.featured ? "text-indigo-400" : "text-indigo-600",
                "text-base font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold"
                )}
              >
                {tier.priceYearly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                /year
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base"
              )}
            >
              {tier.description}
            </p>
            <ul
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? "text-indigo-400" : "text-indigo-600",
                      "h-6 w-5"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleButtonClick(tier.name.toLowerCase())} // Pass tier.name as the type
              href={tier.href}
              className={classNames(
                tier.featured
                  ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 cursor-pointer"
                  : "text-indigo-600 ring-1 cursor-pointer ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
