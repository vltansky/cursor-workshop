import { useState, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import PreferenceList from './PreferenceList';
import { useSettings } from '../hooks/useSettings';

type FormData = {
  name: string;
  email: string;
  preferences: string[];
};

const UserForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const [isTyping, setIsTyping] = useState(false);
  const renderCount = useRef(0);
  renderCount.current += 1;

  // console.log('UserForm rendered', errors);

  const allValues = useWatch({ control });
  // console.log('All form values:', allValues);

  const [formValues, setFormValues] = useState<Record<string, string>>({});
  
  const settings = useSettings();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert(`Form submitted! Selected ${data.preferences?.length || 0} preferences`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

    setTimeout(() => {
      setIsTyping(false);
    }, 50);
  };

  const expensiveFormValidation = () => {
    const start = Date.now();
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.random();
    }
    const duration = Date.now() - start;
    console.log(`Form validation took ${duration}ms`, { renderCount: renderCount.current });
    return result > 50000;
  };

  const isValid = expensiveFormValidation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-form space-y-6">
      {/* Performance indicators */}
      <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="text-sm">
          <span className="font-medium">Status:
            <span className={`ml-1 font-bold ${isTyping ? 'text-orange-600' : 'text-green-600'}`}>
              {isTyping ? 'Processing...' : 'Ready'}
            </span>
          </span>
        </div>
        <div className="text-sm font-medium text-blue-600">
          UserForm renders: {renderCount.current}
        </div>
      </div>

      <h2 className="text-2xl font-bold">User Registration Form</h2>

      <div className="form-field">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-3 py-2 border rounded-md transition-all ${
            isTyping ? 'border-orange-400 bg-orange-50 typing-indicator' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('name', { required: 'Name is required' })}
          onChange={(e) => {
            register('name').onChange(e);
            handleInputChange(e);
          }}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="error mt-1">{errors.name.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-3 py-2 border rounded-md transition-all ${
            isTyping ? 'border-orange-400 bg-orange-50 typing-indicator' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          onChange={(e) => {
            register('email').onChange(e);
            handleInputChange(e);
          }}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="error mt-1">{errors.email.message}</p>}
      </div>

      <PreferenceList
        register={register}
        control={control}
        allValues={allValues}
      />

      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-md font-medium transition-all ${
          isValid
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!isValid || isTyping}
      >
        {isTyping ? 'Processing...' : 'Submit Registration'}
      </button>

      <div className="debug-info p-4 bg-gray-100 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Debug Info (Remove in production)</h4>
        <pre className="text-xs overflow-x-auto">
          {JSON.stringify(allValues, null, 2)}
        </pre>
        <p className="text-xs text-gray-600 mt-2">
          Form validation result: {isValid ? '✅ Valid' : '❌ Invalid'}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Settings dirty: {settings.isDirty ? '✅ Dirty' : '❌ Clean'}
        </p>
        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-600">Settings Theme: {settings.theme}</p>
          <p className="text-xs text-gray-600">Validation Mode: {settings.validationMode}</p>
          <p className="text-xs text-gray-600">Auto Save: {settings.autoSave ? 'On' : 'Off'}</p>
          <p className="text-xs text-gray-600">Advanced: {settings.showAdvanced ? 'Shown' : 'Hidden'}</p>
        </div>
      </div>

      <div className="settings-panel p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-700 mb-2">Form Settings (useSettings Hook Demo)</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Theme</label>
            <select 
              value={settings.theme} 
              onChange={(e) => settings.handleThemeChange(e.target.value as any)}
              className="w-full px-2 py-1 border border-blue-300 rounded text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Validation</label>
            <select 
              value={settings.validationMode} 
              onChange={(e) => settings.handleValidationModeChange(e.target.value as any)}
              className="w-full px-2 py-1 border border-blue-300 rounded text-sm"
            >
              <option value="onSubmit">On Submit</option>
              <option value="onChange">On Change</option>
              <option value="onBlur">On Blur</option>
            </select>
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              checked={settings.autoSave} 
              onChange={(e) => settings.handleAutoSaveChange(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-blue-700">Auto Save</label>
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              checked={settings.showAdvanced} 
              onChange={(e) => settings.handleAdvancedToggle(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-blue-700">Show Advanced</label>
          </div>
        </div>
        <div className="mt-4 space-x-2">
          <button 
            type="button" 
            onClick={settings.resetForm}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Reset Settings
          </button>
          <button 
            type="button" 
            onClick={settings.handleRemount}
            className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
          >
            Remount (Key: {settings.remountKey})
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;