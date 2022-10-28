// This file maps to the index route (/)

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <span>{JSON.stringify(data, null, 1)}</span>;
}
