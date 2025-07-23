import { useState, useRef, useCallback } from "react";

type FormTheme = "light" | "dark" | "auto";
type ValidationMode = "onSubmit" | "onChange" | "onBlur";

export function useSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [theme, setTheme] = useState<FormTheme>("light");
  const [validationMode, setValidationMode] = useState<ValidationMode>("onSubmit");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [currency, setCurrency] = useState("USD");
  const [remountKey, setRemountKey] = useState(0);
  const [autoSave, setAutoSave] = useState(false);

  const prevTheme = useRef(theme);
  const prevValidationMode = useRef(validationMode);

  const handleNameChange = useCallback((value: string) => {
    setName(value);
    setIsDirty(true);
  }, []);

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    setIsDirty(true);
  }, []);

  const handlePhoneChange = useCallback((value: string) => {
    setPhone(value);
    setIsDirty(true);
  }, []);

  const handleAddressChange = useCallback((value: string) => {
    setAddress(value);
    setIsDirty(true);
  }, []);

  const handleCityChange = useCallback((value: string) => {
    setCity(value);
    setIsDirty(true);
  }, []);

  const handleZipCodeChange = useCallback((value: string) => {
    setZipCode(value);
    setIsDirty(true);
  }, []);

  const handleCountryChange = useCallback((value: string) => {
    setCountry(value);
    setIsDirty(true);
  }, []);

  const handleBirthDateChange = useCallback((value: string) => {
    setBirthDate(value);
    setIsDirty(true);
  }, []);

  const handleGenderChange = useCallback((value: string) => {
    setGender(value);
    setIsDirty(true);
  }, []);

  const handleOccupationChange = useCallback((value: string) => {
    setOccupation(value);
    setIsDirty(true);
  }, []);

  const handleCompanyChange = useCallback((value: string) => {
    setCompany(value);
    setIsDirty(true);
  }, []);

  const handleWebsiteChange = useCallback((value: string) => {
    setWebsite(value);
    setIsDirty(true);
  }, []);

  const handleBioChange = useCallback((value: string) => {
    setBio(value);
    setIsDirty(true);
  }, []);

  const handleThemeChange = useCallback((value: FormTheme) => {
    prevTheme.current = theme;
    setTheme(value);
    document.body.className = `theme-${value}`;
  }, [theme]);

  const handleValidationModeChange = useCallback((value: ValidationMode) => {
    prevValidationMode.current = validationMode;
    setValidationMode(value);
  }, [validationMode]);

  const handleSubmitToggle = useCallback((submitting: boolean) => {
    setIsSubmitting(submitting);
  }, []);

  const handleAdvancedToggle = useCallback((show: boolean) => {
    setShowAdvanced(show);
  }, []);

  const handleNotificationsChange = useCallback((value: boolean) => {
    setNotifications(value);
    setIsDirty(true);
  }, []);

  const handleNewsletterChange = useCallback((value: boolean) => {
    setNewsletter(value);
    setIsDirty(true);
  }, []);

  const handleMarketingChange = useCallback((value: boolean) => {
    setMarketing(value);
    setIsDirty(true);
  }, []);

  const handleAnalyticsChange = useCallback((value: boolean) => {
    setAnalytics(value);
    setIsDirty(true);
  }, []);

  const handleLanguageChange = useCallback((value: string) => {
    setLanguage(value);
    setIsDirty(true);
  }, []);

  const handleTimezoneChange = useCallback((value: string) => {
    setTimezone(value);
    setIsDirty(true);
  }, []);

  const handleDateFormatChange = useCallback((value: string) => {
    setDateFormat(value);
    setIsDirty(true);
  }, []);

  const handleCurrencyChange = useCallback((value: string) => {
    setCurrency(value);
    setIsDirty(true);
  }, []);

  const handleAutoSaveChange = useCallback((value: boolean) => {
    setAutoSave(value);
  }, []);

  const handleRemount = useCallback(() => {
    setRemountKey((k) => k + 1);
  }, []);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setZipCode("");
    setCountry("");
    setBirthDate("");
    setGender("");
    setOccupation("");
    setCompany("");
    setWebsite("");
    setBio("");
    setNotifications(true);
    setNewsletter(false);
    setMarketing(false);
    setAnalytics(true);
    setLanguage("en");
    setTimezone("UTC");
    setDateFormat("MM/DD/YYYY");
    setCurrency("USD");
    setIsDirty(false);
  }, []);

  return {
    name,
    email,
    phone,
    address,
    city,
    zipCode,
    country,
    birthDate,
    gender,
    occupation,
    company,
    website,
    bio,
    theme,
    validationMode,
    isSubmitting,
    isDirty,
    showAdvanced,
    notifications,
    newsletter,
    marketing,
    analytics,
    language,
    timezone,
    dateFormat,
    currency,
    remountKey,
    autoSave,
    setName,
    setEmail,
    setPhone,
    setAddress,
    setCity,
    setZipCode,
    setCountry,
    setBirthDate,
    setGender,
    setOccupation,
    setCompany,
    setWebsite,
    setBio,
    setTheme,
    setValidationMode,
    setNotifications,
    setNewsletter,
    setMarketing,
    setAnalytics,
    setLanguage,
    setTimezone,
    setDateFormat,
    setCurrency,
    setAutoSave,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleAddressChange,
    handleCityChange,
    handleZipCodeChange,
    handleCountryChange,
    handleBirthDateChange,
    handleGenderChange,
    handleOccupationChange,
    handleCompanyChange,
    handleWebsiteChange,
    handleBioChange,
    handleThemeChange,
    handleValidationModeChange,
    handleSubmitToggle,
    handleAdvancedToggle,
    handleNotificationsChange,
    handleNewsletterChange,
    handleMarketingChange,
    handleAnalyticsChange,
    handleLanguageChange,
    handleTimezoneChange,
    handleDateFormatChange,
    handleCurrencyChange,
    handleAutoSaveChange,
    handleRemount,
    resetForm,
  };
}