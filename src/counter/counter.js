// counter.js
export function Counter(userDetails) {
  const cyear = 2024;
  return (
    <div>
      <h1>{`${userDetails.fname} ${userDetails.lastname}`}</h1>
      <h2>{`This is current year ${cyear}`}</h2>
    </div>
  );
}
