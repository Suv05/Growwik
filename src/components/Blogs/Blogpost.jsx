"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from 'lucide-react';

function Blogpost() {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black/90 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="px-6 py-8">
            <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Create a New Blog Post
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Label
                  htmlFor="title"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Blog Title
                </Label>
                <Input
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  placeholder="Enter your blog title"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label
                  htmlFor="description"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  rows={4}
                  placeholder="Describe your blog post"
                />
                {errors.description && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label
                  htmlFor="link"
                  className="text-lg font-semibold text-yellow-300 mb-2 block"
                >
                  Blog Link
                </Label>
                <Input
                  id="link"
                  type="url"
                  {...register("link", { required: "Link is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  placeholder="https://yourblog.com/post"
                />
                {errors.link && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.link.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white/5 border-2 border-white/10 border-dashed rounded-md appearance-none cursor-pointer hover:border-yellow-500 focus:outline-none"
                >
                  <span className="flex items-center space-x-2">
                    <Upload className="w-6 h-6 text-yellow-300" />
                    <span className="font-medium text-white">
                      Click to upload image
                    </span>
                  </span>
                  <span className="mt-2 text-sm text-yellow-200">
                    Maximum upload size: 4MB
                  </span>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("image", { required: "Image is required" })}
                    onChange={handleImageChange}
                  />
                </Label>
                {errors.image && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
                {imagePreview && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full h-auto rounded-md shadow-lg"
                    />
                  </motion.div>
                )}
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full"
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Create Post
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default Blogpost;

