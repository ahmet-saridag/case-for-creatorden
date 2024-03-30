import Card from "../components/Card";
import getInfluencerMockData from "./https";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between lg:px-24 lg:py-6 bg-gray-200">
      <Card />
    </main>
  );
}
