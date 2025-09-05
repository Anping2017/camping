export interface BusinessHours {
  monday: { open: string; close: string } | null;
  tuesday: { open: string; close: string } | null;
  wednesday: { open: string; close: string } | null;
  thursday: { open: string; close: string } | null;
  friday: { open: string; close: string } | null;
  saturday: { open: string; close: string } | null;
  sunday: { open: string; close: string } | null;
}

export interface ContactPerson {
  name: string;
  position: string;
  phone: string;
  email: string;
}

export interface BankAccount {
  accountName: string;
  accountNumber: string;
  bankName: string;
}

export interface Merchant {
  id: string;
  businessName: string;
  tradingName?: string;
  businessNumber: string; // NZ Business Number
  type: 'individual' | 'company' | 'partnership';
  description: string;
  logo?: string;
  website?: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    region: string;
    postcode: string;
  };
  businessHours: BusinessHours;
  contactPerson: ContactPerson;
  bankAccount: BankAccount;
  documents: {
    businessCertificate?: string;
    insurancePolicy?: string;
    otherDocuments?: string[];
  };
  campsites: string[]; // 关联的营地ID列表
  status: 'pending' | 'active' | 'suspended' | 'terminated';
  verificationStatus: 'unverified' | 'in_review' | 'verified' | 'rejected';
  commissionRate: number; // 佣金率
  createdAt: string;
  updatedAt: string;
}
