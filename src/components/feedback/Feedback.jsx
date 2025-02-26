"use client";

import { useState,useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toast } from "@/utilities/Toast";
import { getFeedbacks } from "@/actions/feedback";
import { useRouter } from "next/navigation";

function Feedback({ nameSectionRef }) {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isAnonymous: false,
      role: "Brand",
    },
  });

  const [toast, setToast] = useState({
    message: "",
    type: "success",
    show: false,
  });
  const [loading, setLoading] = useState(false);
  const isAnonymous = watch("isAnonymous");

  async function onSubmit(data) {
    setLoading(true);
    try {
      const { status, message } = await getFeedbacks({
        ...data,
      });

      if (status === "success") {
        reset(); // Reset the form only on successful submission
        router.push("/");
      } else {
        console.error(message || "Submission failed");
        setToast({
          message: "😥 Something went wrong, please try again later!",
          type: "error",
          show: true,
        });
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Review form section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-black to-black/90 min-[810px]:px-20 text-white p-8 inset-0 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-4 space-y-20">
            {/* Name Field with Anonymous Option */}
            <div ref={nameSectionRef} className="space-y-10">
              <div className="space-y-8">
                <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                  Your Name?
                </h2>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  type="text"
                  id="name"
                  disabled={isAnonymous}
                  className="mt-2 w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-300 font-normal max-w-3xl px-4"
                  placeholder={isAnonymous ? "Anonymous" : "Enter your name"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={isAnonymous}
                  onCheckedChange={(checked) => {
                    setValue("isAnonymous", checked);
                    setValue("name", checked ? "Anonymous" : "");
                  }}
                />
                <Label htmlFor="anonymous" className="text-sm text-gray-300">
                  Post anonymously
                </Label>
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                You Are?
              </h2>
              <RadioGroup
                defaultValue="Brand"
                onValueChange={(value) => setValue("role", value)}
                className="flex flex-wrap gap-4"
              >
                {["Brand", "Influencer", "Agency", "Manager"].map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <RadioGroupItem value={role} id={role} />
                    <Label htmlFor={role} className="text-gray-300 text-base">
                      {role}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Brand Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-x-2">
              <div className="space-y-8">
                <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                  Brand Name
                </h2>
                <input
                  {...register("brandName", {
                    // required: "Brand name is required",
                    minLength: {
                      value: 2,
                      message: "Brand name must be at least 2 characters",
                    },
                  })}
                  type="text"
                  id="brandName"
                  placeholder="Your brand name"
                  className="mt-2 w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-300 font-normal max-w-3xl px-4"
                />
                {errors.brandName && (
                  <p className="text-red-500 text-sm">
                    {errors.brandName.message}
                  </p>
                )}
              </div>

              {/* Social Media Handle */}
              <div className="space-y-8">
                <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                  Social Media Handel
                </h2>
                <input
                  {...register("socialMedia", {
                    // required: "Social media URL is required",
                  })}
                  type="url"
                  id="socialMedia"
                  className="mt-2 w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-300 font-normal max-w-3xl px-4"
                  placeholder="https://..."
                />
                {errors.socialMedia && (
                  <p className="text-red-500 text-sm">
                    {errors.socialMedia.message}
                  </p>
                )}
              </div>
            </div>

            {/* Review Text Area */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                Write your review:)
              </h2>
              <Textarea
                {...register("review", {
                  required: "Review is required",
                  minLength: {
                    value: 10,
                    message: "Review must be at least 10 characters",
                  },
                })}
                id="review"
                className="min-h-[150px] bg-transparent border border-white/20 focus:border-white/60 text-lg"
              />
              {errors.review && (
                <p className="text-red-500 text-sm">{errors.review.message}</p>
              )}
            </div>

            {/* Satisfaction Rating */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                How satisfied are you with Growwik Media?
              </h2>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={rating}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <input
                      {...register("satisfaction", {
                        // required: "Please rate your satisfaction",
                      })}
                      type="radio"
                      value={rating}
                      className="sr-only"
                    />
                    <span
                      className={`text-4xl ${
                        watch("satisfaction") == rating
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                    <span className="text-sm mt-1">{rating}</span>
                  </label>
                ))}
              </div>
              {errors.satisfaction && (
                <p className="text-red-500 text-sm">
                  {errors.satisfaction.message}
                </p>
              )}
            </div>

            {/* Met Expectations */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                Did we meet your expectations?
              </h2>
              <RadioGroup
                defaultValue="Yes"
                onValueChange={(value) => setValue("metExpectations", value)}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" id="expectation-yes" />
                  <Label
                    htmlFor="expectation-yes"
                    className="text-gray-300 text-base"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="expectation-no" />
                  <Label
                    htmlFor="expectation-no"
                    className="text-gray-300 text-base"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
              {errors.metExpectations && (
                <p className="text-red-500 text-sm">
                  {errors.metExpectations.message}
                </p>
              )}
            </div>

            {/* Communication Rating */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                How would you rate our communication and support?
              </h2>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={rating}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <input
                      {...register("communicationRating", {
                        // required: "Please rate our communication",
                      })}
                      type="radio"
                      value={rating}
                      className="sr-only"
                    />
                    <span
                      className={`text-4xl ${
                        watch("communicationRating") == rating
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                    <span className="text-sm mt-1">{rating}</span>
                  </label>
                ))}
              </div>
              {errors.communicationRating && (
                <p className="text-red-500 text-sm">
                  {errors.communicationRating.message}
                </p>
              )}
            </div>

            {/* Areas for Improvement */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                What do you think we can improve?
              </h2>
              <Textarea
                {...register("areasForImprovement")}
                id="areasForImprovement"
                className="min-h-[100px] bg-transparent border border-white/20 focus:border-white/60 text-lg"
                placeholder="Share your thoughts on how we can improve..."
              />
            </div>

            {/* Recommendation Likelihood */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                How likely are you to recommend Growwik Media? (1-10)
              </h2>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer border-2 transition-all ${
                      watch("recommendationLikelihood") == rating
                        ? "border-yellow-400 bg-yellow-400/20"
                        : "border-gray-600"
                    }`}
                  >
                    <input
                      {...register("recommendationLikelihood", {
                        // required:
                        //   "Please indicate how likely you are to recommend us",
                      })}
                      type="radio"
                      value={rating}
                      className="sr-only"
                    />
                    <span className="font-medium">{rating}</span>
                  </label>
                ))}
              </div>
              {errors.recommendationLikelihood && (
                <p className="text-red-500 text-sm">
                  {errors.recommendationLikelihood.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-8">
              <h2 className="max-[680px]:text-lg text-2xl font-medium tracking-wider">
                Please share your email id
              </h2>
              <div className="space-y-2">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-300 font-normal max-w-3xl px-4"
                />
                <p className="text-sm text-gray-400 italic">
                  (don&apos;t worry it doesn&apos;t show to others)
                </p>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-6 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-black mx-auto"></div>
              ) : (
                "Submit Review"
              )}
            </motion.button>
          </form>
          {toast.show && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast((prev) => ({ ...prev, show: false }))}
            />
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Feedback;
