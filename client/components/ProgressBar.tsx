import { useSubscription } from '../context/SubscriptionContext';

const steps = [
  { id: 'plans', label: 'Choose Plan', path: '/subscription-plans' },
  { id: 'period', label: 'Select Period', path: '/period-selection' },
  { id: 'register', label: 'Register', path: '/register' },
  { id: 'payment', label: 'Payment', path: '/payment' },
  { id: 'complete', label: 'Complete', path: '/thank-you' }
];

export function ProgressBar() {
  const { state } = useSubscription();

  const getCurrentStep = () => {
    if (state.paymentCompleted) return 4;
    if (state.isRegistered) return 3;
    if (state.selectedPeriod) return 2;
    if (state.selectedPlan) return 1;
    return 0;
  };

  const currentStep = getCurrentStep();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
              index <= currentStep 
                ? 'bg-[#7C79F9] text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {index + 1}
            </div>
            <span className={`ml-2 text-sm font-medium ${
              index <= currentStep ? 'text-[#7C79F9]' : 'text-gray-500'
            }`}>
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-4 ${
                index < currentStep ? 'bg-[#7C79F9]' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
