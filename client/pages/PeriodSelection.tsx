import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { useSubscription, PeriodOption } from '../context/SubscriptionContext';

export default function PeriodSelection() {
  const navigate = useNavigate();
  const { state, selectPeriod } = useSubscription();

  // Redirect if no plan is selected
  if (!state.selectedPlan) {
    navigate('/subscription-plans');
    return null;
  }

  const periods: PeriodOption[] = [
    {
      id: '1-month',
      months: 1,
      price: state.selectedPlan.price,
      originalPrice: state.selectedPlan.price,
      renewalPrice: state.selectedPlan.price,
      selected: false
    },
    {
      id: '12-months',
      months: 12,
      price: Math.round(state.selectedPlan.price * 0.87), // 13% discount
      originalPrice: state.selectedPlan.price,
      renewalPrice: Math.round(state.selectedPlan.price * 0.93), // 7% discount
      selected: false
    },
    {
      id: '24-months',
      months: 24,
      price: Math.round(state.selectedPlan.price * 0.67), // 33% discount
      originalPrice: state.selectedPlan.price,
      renewalPrice: Math.round(state.selectedPlan.price * 0.6), // 40% discount
      selected: false
    },
    {
      id: '48-months',
      months: 48,
      price: Math.round(state.selectedPlan.price * 0.6), // 40% discount
      originalPrice: state.selectedPlan.price,
      renewalPrice: Math.round(state.selectedPlan.price * 0.53), // 47% discount
      selected: false
    }
  ];

  const handlePeriodSelect = (period: PeriodOption) => {
    selectPeriod(period);
    navigate('/register');
  };

      return (
      <div className="min-h-screen bg-[#F3F3F3]">
        <Header />
        <ProgressBar />
        
        <div className="max-w-[1366px] mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-[36px] font-bold text-black text-center mb-16 font-['Inter']">
          You're almost there! Complete your order
        </h1>

        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <h2 className="text-[32px] font-bold text-black mb-8 font-['Inter']">
            1. Choose a period
          </h2>

          {/* Selected Plan */}
          <p className="text-black mb-12 font-['Inter']">
            <span className="text-base">Selected plan: </span>
            <span className="text-xl font-bold">{state.selectedPlan.name}</span>
          </p>

          {/* Period Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {periods.map((period) => (
              <div 
                key={period.id}
                onClick={() => handlePeriodSelect(period)}
                className="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-[216px] p-4 relative hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[18px] h-[18px] border-2 border-[#1D31DD] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#1D31DD] rounded-full"></div>
                  </div>
                  <span className="text-[15px] text-black font-['Inter']">{period.months} {period.months === 1 ? 'MONTH' : 'MONTHS'}</span>
                </div>

                <div className="text-center mb-4">
                  {period.price < period.originalPrice && (
                    <div className="text-sm text-[#868484] text-center font-['Inter'] mb-1 line-through">
                      ₱{period.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-[32px] text-black font-['Inter'] mb-2">
                    <span>₱</span>{period.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-black font-['Inter']">PHP / month</div>
                </div>

                <div className="text-sm text-[#868484] text-center font-['Inter'] leading-tight">
                  Plan renews at ₱{period.renewalPrice.toLocaleString()}/mo<br />
                  on {new Date(Date.now() + period.months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
