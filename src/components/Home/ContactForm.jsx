"use client";
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
    reset();
  };

  return (
    <div className="bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Let's Have Chat
        </h1>
        
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  YOUR NAME :
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Company Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  COMPANY NAME :
                </label>
                <input
                  {...register("company", { required: "Company name is required" })}
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors"
                  placeholder="Enter company name"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  EMAIL ADDRESS:
                </label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Contact Input */}
              <div className="space-y-2">
                <label className="text-white text-xl font-semibold block">
                  CONTACT DETAILS
                </label>
                <input
                  {...register("contact", { required: "Contact details are required" })}
                  type="tel"
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors"
                  placeholder="Enter contact number"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">{errors.contact.message}</p>
                )}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-white text-xl font-semibold block">
                YOUR MESSAGE:
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-white px-1 py-2 transition-colors resize-none h-24"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;