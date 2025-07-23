import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import PreferenceList from './PreferenceList';

type FormData = {
  name: string;
  email: string;
  preferences: string[];
};

const UserForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const [isTyping, setIsTyping] = useState(false);

  // console.log('UserForm rendered', errors);

  const allValues = useWatch({ control });
  // console.log('All form values:', allValues);

  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const onSubmit = (data: FormData) => {
    // console.log('Form submitted:', data);
    alert('Form submitted!');
    // console.log('Form submitted:', data);
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
    // console.log(`Form validation took ${duration}ms`);
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

      <PreferenceList formValues={formValues} register={register} />

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
      </div>
    </form>
  );
};

export default UserForm;