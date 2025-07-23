import { useRef } from 'react';
import { UseFormRegister, useWatch, Control } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  name: string;
  email: string;
  preferences: string[];
};

type PreferenceListProps = {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  allValues?: unknown;
};

const PreferenceList = ({ register, control, allValues }: PreferenceListProps) => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log('PreferenceList rendered', {
    renderCount: renderCount.current,
    allValues: !!allValues
  });
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

  const computationResult = expensiveComputation();
  console.log('PreferenceList expensive computation:', computationResult);

  const selectedPreferences = useWatch({ name: 'preferences', control, defaultValue: [] }) || [];
  const selectedCount = selectedPreferences.length;

  return (
    <div className="preference-list">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          Email Preferences ({selectedCount}/{preferences.length} selected)
        </h3>
        <div className="text-sm font-medium text-purple-600">
          PreferenceList renders: {renderCount.current}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto p-4 border rounded-lg">
        {preferences.map((pref) => (
          <div key={pref} className="flex items-center space-x-2">
            <Checkbox
              id={pref}
              value={pref}
              checked={selectedPreferences.includes(pref)}
              onCheckedChange={(checked) => {
                const currentValues = selectedPreferences || [];
                const newValues = checked
                  ? [...currentValues, pref]
                  : currentValues.filter((p: string) => p !== pref);
                register('preferences').onChange({
                  target: { name: 'preferences', value: newValues }
                });
              }}
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
          Selected preferences:
        </h4>
        <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
          {JSON.stringify(selectedPreferences, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default PreferenceList;