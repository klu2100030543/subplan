import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { useSubscription } from '../context/SubscriptionContext';

export default function Payment() {
  const navigate = useNavigate();
  const { state, setPaymentCompleted } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect if not registered
  if (!state.isRegistered || !state.userRegistration) {
    navigate('/register');
    return null;
  }

  const handlePaymentComplete = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setPaymentCompleted(true);
      navigate('/thank-you');
    }, 2000);
  };

  const totalAmount = state.selectedPeriod ? state.selectedPeriod.price * state.selectedPeriod.months : 0;

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <Header />
      <ProgressBar />
      
      <div className="max-w-[1366px] mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <h2 className="text-[32px] font-normal text-black mb-16 font-['Inter']">
            <span>3. </span>
            <span className="font-bold">Ideapay</span>
          </h2>

          {/* Order Summary */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Plan:</span>
                <span>{state.selectedPlan?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Period:</span>
                <span>{state.selectedPeriod?.months} {state.selectedPeriod?.months === 1 ? 'Month' : 'Months'}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per month:</span>
                <span>₱{state.selectedPeriod?.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total Amount:</span>
                <span>₱{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex justify-center">
            <div className="w-full max-w-[658px] bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="payment" id="ideapay" defaultChecked />
                  <label htmlFor="ideapay" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Ideapay</div>
                    <div className="text-sm text-gray-600">Secure online payment gateway</div>
                  </label>
                </div>
                
                <button
                  onClick={handlePaymentComplete}
                  disabled={isProcessing}
                  className="w-full bg-[#7C79F9] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#6B68E8] transition-colors disabled:opacity-50"
                >
                  {isProcessing ? 'Processing Payment...' : `Pay ₱${totalAmount.toLocaleString()}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
