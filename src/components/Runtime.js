function Runtime({ runtime }) {
  return (
    <div>
      🧭 Runtime: {Math.floor(runtime / 60)} H {runtime % 60} Min
    </div>
  );
}

export default Runtime;
