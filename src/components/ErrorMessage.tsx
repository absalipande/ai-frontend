import React from 'react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <p className='text-red-500'>{error}</p> : null;
};

export default ErrorMessage;
