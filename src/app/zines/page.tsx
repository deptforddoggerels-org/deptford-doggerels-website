const zines = ['vol-1'];

export default function ZinesPage() {
  return (
    <div>
      <h1>All Zines</h1>
      <ul>
        {zines.map((vol) => (
          <li key={vol}>
            <a href={`/zines/${vol}`}>{vol.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}