function Rating({ rating }) {
  const a = "⭐";

  return (
    <div>
      {rating} {a.repeat(4)}
    </div>
  );
}

export default Rating;
