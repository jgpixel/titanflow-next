import { useState, useId } from 'react';

const pricingPlans = [
    {
        type: 'Free',
        cost: {
            monthly: {
                displayPrice: 0,
                billPrice: 0,
            },
            yearly: {
                displayPrice: 0,
                billPrice: 0,
            }
        },
        includedFeatures: [
            'Real-time flow snapshot',
            'Limited real-time institutional options flow',
            'Real-time flow push notifications (limit 1 custom alert)',
            'Delayed level & trending flow alerts',
            'Limited darkpool data'
        ],
        isHighlighted: false
    },
    {
        type: 'Community',
        cost: {
            monthly: {
                displayPrice: 25,
                billPrice: 29.99,
            },
            yearly: {
                displayPrice: 299,
                billPrice: 299.99,
            }
        },
        includedFeatures: [
            'Includes Free plan',
            'Real-time institutional options flow (full access)',
            'Real-time flow push notifications (limit 3 custom alerts)',
            'Single day historical search'
        ],
        isHighlighted: true
    },
    {
        type: 'Pro',
        cost: {
            monthly: {
                displayPrice: 41,
                billPrice: 49.99,
            },
            yearly: {
                displayPrice: 499,
                billPrice: 499.99,
            }
        },
        includedFeatures: [
            'Includes Community plan',
            'Unlimited real-time flow push notifications',
            'Real-time level & trending flow alerts',
            'Darkpool data (full access)',
            'In depth charting with darkpool levels',
            'Full feed customization',
            'Advanced historical search'
        ],
        isHighlighted: false
    }
];

export default function Pricing() {
    const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);

    return (
        <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-bold text-5xl mt-3 text-center'>Access Real-time Options Flow</h1>
            <div className='border border-sky-500 p-0 rounded my-12'>
                <button onClick={() => setIsMonthlyBilling(true)} className={`px-7 py-2 rounded-l-[2px] transition-colors ${isMonthlyBilling ? 'bg-sky-500' : 'hover:bg-sky-900 text-sky-500 rounded-l-[0.2rem]'}`}>Monthly</button>
                <button onClick={() => setIsMonthlyBilling(false)} className={`px-7 py-2 rounded-r-[2px] transition-colors ${!isMonthlyBilling ? 'bg-sky-500' : 'hover:bg-sky-900 text-sky-500 rounded-r-[0.2rem]'}`}>Yearly</button>
            </div>
            <ul className='list-none flex justify-between items-stretch w-full sm:flex-col sm:gap-y-8'>
                {
                    pricingPlans.map(({ type, cost, includedFeatures, isHighlighted }) => {
                        return (
                            <li key={useId()} className={`flex flex-col justify-start items-center w-30% border-[2px] ${isHighlighted ? 'border-sky-500' : 'border-zinc-800'} rounded-xl py-7 px-4 sm:w-full`}>
                                <h3 className='font-bold text-xl'>{type}</h3>
                                <h4 className='text-sky-500 font-bold text-5xl my-4'>{`$${isMonthlyBilling ? cost.monthly.displayPrice : cost.yearly.displayPrice}`}</h4>
                                <span className='text-zinc-500 text-sm mb-4'>{`$${isMonthlyBilling ? cost.monthly.billPrice : cost.yearly.billPrice} billed ${isMonthlyBilling ? 'monthly' : 'yearly'}`}</span>
                                <ul className='w-full flex flex-col justify-center items-center text-center'>
                                    {
                                        includedFeatures.map(feature => {
                                            return <li key={useId()} className='my-3'>{feature}</li>;
                                        })
                                    }
                                </ul>
                                <a href='https://titanflow.app.link/AxNjMh9Zcmb' target='_blank' className='text-sky-500 mt-auto'>Download</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}