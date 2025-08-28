import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form 
        onSubmit={submitHandler} 
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Form</h2>
        
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            minLength={3}
            maxLength={15}
            placeholder="Enter Your name..."
            value={formData.firstName}
            onChange={changeHandler}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
         minLength={3}
         maxLength={15}
            placeholder="Enter Your Last  Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={changeHandler}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="Enter Your Address.."
            value={formData.streetAddress}
            onChange={changeHandler}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* City, State, Postal Code (grid layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={changeHandler}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={changeHandler}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={changeHandler}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Checkbox Section */}
        <fieldset className="border border-gray-200 rounded-lg p-4">
          <legend className="text-lg font-medium text-gray-800">By Email</legend>
          <div className="space-y-3 mt-2">
            <label className="flex items-start space-x-2">
              <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler} className="h-5 w-5 text-blue-600"/>
              <span><span className="font-medium">Comments</span><p className="text-sm text-gray-500">Get notified when someone posts a comment.</p></span>
            </label>

            <label className="flex items-start space-x-2">
              <input type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler} className="h-5 w-5 text-blue-600"/>
              <span><span className="font-medium">Candidates</span><p className="text-sm text-gray-500">Get notified when a candidate applies.</p></span>
            </label>

            <label className="flex items-start space-x-2">
              <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler} className="h-5 w-5 text-blue-600"/>
              <span><span className="font-medium">Offers</span><p className="text-sm text-gray-500">Get notified when a candidate accepts/rejects an offer.</p></span>
            </label>
          </div>
        </fieldset>

        {/* Radio Section */}
        <fieldset className="border border-gray-200 rounded-lg p-4">
          <legend className="text-lg font-medium text-gray-800">Push Notifications</legend>
          <p className="text-sm text-gray-500 mb-3">Delivered via SMS</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler} className="h-4 w-4 text-blue-600"/>
              <span>Everything</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler} className="h-4 w-4 text-blue-600"/>
              <span>Same as email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notifications" onChange={changeHandler} className="h-4 w-4 text-blue-600"/>
              <span>No Push Notifications</span>
            </label>
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
