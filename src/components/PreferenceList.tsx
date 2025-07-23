import { UseFormRegister } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';

type PreferenceListProps = {
  formValues: Record<string, string>;
  register: UseFormRegister<any>;
};

const PreferenceList = ({ formValues, register }: PreferenceListProps) => {
  // console.log('PreferenceList rendered');
  const preferences = [
    'Daily Newsletters', 'Weekly Digest', 'Monthly Summary',
    'Product Announcements', 'Feature Updates', 'Beta Features',
    'Special Offers', 'Partner Deals', 'Exclusive Discounts',
    'Event Invitations', 'Webinar Notifications', 'Workshop Alerts',
    'Security Updates', 'System Maintenance', 'API Changes'
  ];

  const expensiveComputation = () => {
    // console.log('Running expensive computation in PreferenceList...');
    const start = Date.now();
    let result = 0;
    for (let i = 0; i < 500000; i++) {
      result += Math.random();
    }
    const duration = Date.now() - start;
    // console.log(`Computation took ${duration}ms`);
    return { result, duration };
  };

  const { result: computedValue, duration } = expensiveComputation();

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

      <div className="current-values mt-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">
          Current form values (from parent):
        </h4>
        <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
          {JSON.stringify(formValues, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default PreferenceList;