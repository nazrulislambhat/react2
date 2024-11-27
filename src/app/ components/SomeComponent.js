function SomeComponent() {
  const { data, loading, error } = useFetchData('https://api.example.com/data');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default SomeComponent;
