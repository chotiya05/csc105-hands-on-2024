import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";


const schema = z.object({
  number: z
    .string()
    .regex(/^\d+$/, "Expected number, received nan"),
  query: z.enum(["love", "like"], {
    errorMap: () => ({ message: "Select either 'love' or 'like'" }),
  }),
  size: z.enum(["small", "medium", "large"], {
    errorMap: () => ({ message: "Select a valid size" }),
  }),
});

function FavouritesPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate(`/fav-details?number=${data.number}&query=${data.query}&size=${data.size}`);
  };

  return (
    <div>
     
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 shadow-md rounded-md w-96">
          <h1 className="text-2xl font-bold text-center mb-4">Favourites Page</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium">Number:</label>
              <input
                {...register("number")}
                type="text"
                placeholder="Enter a number"
                className="border p-2 w-full rounded-md"
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Q:</label>
              <select {...register("query")} className="border p-2 w-full rounded-md">
                <option value="">Select</option>
                <option value="love">Love</option>
                <option value="like">Like</option>
              </select>
              {errors.query && (
                <p className="text-red-500 text-sm">{errors.query.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Size:</label>
              <select {...register("size")} className="border p-2 w-full rounded-md">
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && (
                <p className="text-red-500 text-sm">{errors.size.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FavouritesPage;
