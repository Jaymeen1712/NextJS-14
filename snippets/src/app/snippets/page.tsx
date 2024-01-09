import { db } from "@/db";
import Link from "next/link";
import React from "react";

const Snippets = async () => {
  const snippets = await db.snippet.findMany();

  return (
    <>
      {snippets.map(({ id, title, code }) => (
        <Link href={`snippets/${id}`} key={id}>
          <div className="my-10 border-neutral-700 rounded-md border-2 p-8">
            <div>
              <span className="font-bold">Title:</span> {title}
            </div>
            <div>
              <span className="font-bold">Code:</span> {code}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Snippets;


