import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useSubscription } from '../context/SubscriptionContext';

export default function ThankYou() {
  const navigate = useNavigate();
  const { state, resetSubscription } = useSubscription();

  // Redirect if payment not completed
  if (!state.paymentCompleted) {
    navigate('/subscription-plans');
    return null;
  }

  useEffect(() => {
    // Reset subscription after 5 seconds and redirect to home
    const timer = setTimeout(() => {
      resetSubscription();
      navigate('/subscription-plans');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, resetSubscription]);

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <Header />
      
      <div className="max-w-[1366px] mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Success Message */}
          <h1 className="text-[32px] font-bold text-[#1C8B63] mb-12 font-['Inter'] max-w-[952px] mx-auto">
            You have successfully Subscribed to BasicBros Marketplace!
          </h1>

          {/* Order Details */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">Order Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Plan:</span>
                <span>{state.selectedPlan?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Period:</span>
                <span>{state.selectedPeriod?.months} {state.selectedPeriod?.months === 1 ? 'Month' : 'Months'}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span>{state.userRegistration?.email}</span>
              </div>
            </div>
          </div>

          {/* Login Instructions */}
          <div className="mb-8">
            <p className="text-sm text-black font-['Inter']">
              Please{' '}
              <a href="#" className="text-[#1D31DD] underline">
                Login
              </a>{' '}
              to merchant office account to start your e-commerce business.
            </p>
          </div>

          {/* Tutorial Link */}
          <div>
            <a 
              href="#"
              className="text-sm text-black font-['Inter'] underline hover:text-gray-600 transition-colors"
            >
              View Tutorial Now on How to setup your Merchant Office
            </a>
          </div>

          {/* Auto-redirect notice */}
          <div className="mt-8 text-xs text-gray-500">
            You will be redirected to the subscription plans page in a few seconds...
          </div>
        </div>
      </div>
    </div>
  );
}
