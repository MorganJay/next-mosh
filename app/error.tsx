'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  console.log({ error });

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
