import { IoCheckmark } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useSubscription, SubscriptionPlan } from '../context/SubscriptionContext';

export default function SubscriptionPlans() {
  const navigate = useNavigate();
  const { selectPlan } = useSubscription();

  const plans: SubscriptionPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Ideal solution for starters',
      price: 0,
      savePercentage: 100,
      features: ['3 Months Free'],
      color: '#3747D7'
    },
    {
      id: 'standard',
      name: 'Standard',
      description: 'Perfect package for business',
      price: 1500,
      savePercentage: 40,
      features: ['Renewable', 'Store List Visibility'],
      color: '#F44912'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Business Optimized',
      price: 2500,
      savePercentage: 20,
      features: ['Homepage Store Featured', 'Avail premium features'],
      color: '#3747D7'
    }
  ];

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    selectPlan(plan);
    navigate('/period-selection');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1366px] mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-black text-center mb-8 lg:mb-16">
          Choose Your Subscription Plan
        </h1>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-16">
          {plans.map((plan) => (
            <div key={plan.id} className="w-full max-w-[275px] mx-auto">
              <div className="h-[353px] border border-[#DBEAEF] rounded-[19px] p-6 relative bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-2xl font-normal text-black text-center mb-4 font-['Inter']">{plan.name}</h3>
                <p className="text-sm text-black text-center mb-6 font-['Inter']">{plan.description}</p>
                
                {/* Save Badge */}
                <div className="flex justify-center mb-4">
                  <div className={`bg-[rgba(${plan.color === '#3747D7' ? '15,59,216' : '219,75,29'},0.24)] rounded-[14px] px-3 py-1`}>
                    <span className={`text-xs font-['Inter'] ${plan.color === '#3747D7' ? 'text-[#0C15F3]' : 'text-[#F3360C]'}`}>
                      SAVE {plan.savePercentage}%
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-base font-['Inter']">₱</span>
                  <span className="text-[32px] font-['Inter']">{plan.price.toLocaleString()}</span>
                  <span className="text-sm font-['Inter']">/mo</span>
                </div>

                {/* Button */}
                <div className="flex justify-center mb-8">
                  <button 
                    onClick={() => handlePlanSelect(plan)}
                    className="w-[159px] h-[41px] text-white text-[15px] font-bold rounded-sm font-['Inter'] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: plan.color }}
                  >
                    Add to cart
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <IoCheckmark className="w-4 h-4 text-[#61EE1F]" />
                      <span className="text-sm text-black font-['Inter']">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
