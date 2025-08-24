import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  savePercentage: number;
  features: string[];
  color: string;
}

export interface PeriodOption {
  id: string;
  months: number;
  price: number;
  originalPrice: number;
  renewalPrice: number;
  selected: boolean;
}

export interface UserRegistration {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface SubscriptionState {
  selectedPlan: SubscriptionPlan | null;
  selectedPeriod: PeriodOption | null;
  userRegistration: UserRegistration | null;
  isRegistered: boolean;
  paymentCompleted: boolean;
}

interface SubscriptionContextType {
  state: SubscriptionState;
  selectPlan: (plan: SubscriptionPlan) => void;
  selectPeriod: (period: PeriodOption) => void;
  updateUserRegistration: (registration: UserRegistration) => void;
  setRegistered: (isRegistered: boolean) => void;
  setPaymentCompleted: (completed: boolean) => void;
  resetSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const [state, setState] = useState<SubscriptionState>({
    selectedPlan: null,
    selectedPeriod: null,
    userRegistration: null,
    isRegistered: false,
    paymentCompleted: false,
  });

  const selectPlan = (plan: SubscriptionPlan) => {
    setState(prev => ({ ...prev, selectedPlan: plan }));
  };

  const selectPeriod = (period: PeriodOption) => {
    setState(prev => ({ ...prev, selectedPeriod: period }));
  };

  const updateUserRegistration = (registration: UserRegistration) => {
    setState(prev => ({ ...prev, userRegistration: registration }));
  };

  const setRegistered = (isRegistered: boolean) => {
    setState(prev => ({ ...prev, isRegistered }));
  };

  const setPaymentCompleted = (completed: boolean) => {
    setState(prev => ({ ...prev, paymentCompleted: completed }));
  };

  const resetSubscription = () => {
    setState({
      selectedPlan: null,
      selectedPeriod: null,
      userRegistration: null,
      isRegistered: false,
      paymentCompleted: false,
    });
  };

  const value: SubscriptionContextType = {
    state,
    selectPlan,
    selectPeriod,
    updateUserRegistration,
    setRegistered,
    setPaymentCompleted,
    resetSubscription,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
