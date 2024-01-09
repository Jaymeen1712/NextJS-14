import { db } from "@/db";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

const ShowSnippet = async (props: any) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <Link href={`/snippets/${snippet.id}/edit`}>
        <button className="border-neutral-800 border-2 p-2 rounded-md m-2">
          Edit
        </button>
      </Link>
      <div>Title: {snippet.title}</div>
      <div>Code: {snippet.code}</div>
    </>
  );
};

export default ShowSnippet;

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
};
