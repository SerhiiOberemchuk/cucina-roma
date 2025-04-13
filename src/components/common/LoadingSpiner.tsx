"use client";

function LoadingSpiner() {
  return (
    <div className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center bg-black/50">
      <span className="loader"></span>
    </div>
  );
}

export default LoadingSpiner;
