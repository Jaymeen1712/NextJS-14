import paths from "@/app/path";
import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedList = topics.map((topic) => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));

  return <div className="flex flex-row gap-2 flex-wrap">{renderedList}</div>;
};

export default TopicList;
