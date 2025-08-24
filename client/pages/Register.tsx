import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { useSubscription, UserRegistration } from '../context/SubscriptionContext';

export default function Register() {
  const navigate = useNavigate();
  const { state, updateUserRegistration, setRegistered } = useSubscription();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Redirect if no plan or period is selected
  if (!state.selectedPlan || !state.selectedPeriod) {
    navigate('/subscription-plans');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const registration: UserRegistration = {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      };
      
      updateUserRegistration(registration);
      setRegistered(true);
      navigate('/payment');
    }
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
            2. Register
          </h2>

          {/* Registration Form */}
          <div className="flex justify-center">
            <div className="w-[452px] bg-[#FFFCFC] p-8 rounded shadow">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Username Field */}
                <div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="UserName"
                    className={`w-full h-[42px] px-3 border rounded-md bg-[#EEEBEB] text-black placeholder-[#706A6A] font-['Inter'] text-base ${errors.username ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full h-[42px] px-3 border rounded-md bg-[#EEEBEB] text-black placeholder-[#706A6A] font-['Inter'] text-base ${errors.email ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className={`w-full h-[42px] px-3 border rounded-md bg-[#EEEBEB] text-black placeholder-[#706A6A] font-['Inter'] text-base ${errors.phone ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Password Field */}
                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`w-full h-[42px] px-3 border rounded-md bg-[#EEEBEB] text-black placeholder-[#706A6A] font-['Inter'] text-base ${errors.password ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* reCAPTCHA */}
                <div className="border border-black bg-[#F2F2F2] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[25px] h-[25px] border border-black/20 bg-[#F9F9F9] rounded"></div>
                    <span className="text-sm text-black font-['Inter']">I'm not a robot</span>
                  </div>
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2895ea1e3ee07457be4f823e86426f35924f5d75?width=140" 
                    alt="reCAPTCHA"
                    className="w-[70px] h-[42px]"
                  />
                </div>

                {/* Register Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="w-[197px] h-[44px] bg-[#7C79F9] text-white text-xl font-bold font-['Inter'] hover:bg-[#6B68E8] transition-colors"
                  >
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
