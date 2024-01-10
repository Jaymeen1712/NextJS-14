import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top posts</h1>
      </div>
      <div className="border shadow py-3 px-2 space-y-4">
        <TopicCreateForm />
        <TopicList />
      </div>
    </div>
  );
}
