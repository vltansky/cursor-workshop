import { useForm, useFormState } from 'react-hook-form';
import { memo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  name: string;
  email: string;
  preferences: string[];
};

// Solution: Memoized PreferenceList component
const PreferenceList = memo<{ register: any }>(({ register }) => {
  console.log('PreferenceList rendered');
  
  const preferences = [
    'Daily Newsletters', 'Weekly Digest', 'Monthly Summary',
    'Product Announcements', 'Feature Updates', 'Beta Features',
    'Special Offers', 'Partner Deals', 'Exclusive Discounts',
    'Event Invitations', 'Webinar Notifications', 'Workshop Alerts',
    'Security Updates', 'System Maintenance', 'API Changes',
    'Community Updates', 'Forum Digest', 'User Stories',
    'Tips & Tricks', 'Best Practices', 'Case Studies',
    'Industry News', 'Market Trends', 'Research Reports',
    'Birthday Greetings', 'Anniversary Messages', 'Holiday Wishes',
    'Survey Invitations', 'Feedback Requests', 'Product Reviews'
  ];

  return (
    <div className="preference-list">
      <h3 className="text-lg font-semibold mb-4">Email Preferences ({preferences.length} options)</h3>
      
      <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto p-4 border rounded-lg">
        {preferences.map((pref) => (
          <div key={pref} className="flex items-center space-x-2">
            <Checkbox
              id={pref}
              value={pref}
              {...register('preferences')}
            />
            <label
              htmlFor={pref}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {pref}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});

PreferenceList.displayName = 'PreferenceList';

const UserForm = () => {
  const { register, handleSubmit, control } = useForm<FormData>();
  
  // Solution: Use useFormState to subscribe only to errors
  const { errors } = useFormState({ control, name: ['name', 'email'] });
  
  console.log('UserForm rendered');
  
  // Solution: Removed useWatch and formValues state

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-form">
      <h2>User Registration Form</h2>
      
      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      {/* Solution: No props passed to PreferenceList */}
      <PreferenceList register={register} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;