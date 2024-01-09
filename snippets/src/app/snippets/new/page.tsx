"use client";
import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(actions.handleCreateSnippet, {
    message: "",
  });

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create a snippet</h2>

      <form action={action}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500 py-2 px-3"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="code"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500 py-2 px-3"
            placeholder="Enter code"
          />
        </div>

        <div>{formState?.message}</div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SnippetCreatePage;
