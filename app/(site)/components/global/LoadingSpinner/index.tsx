import React from 'react'

const LoadingSpinnerPage = () => {
  return (
		<div className="flex items-center justify-center min-h-[75dvh] bg-gradient-1">
			<div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-16 w-16 shadow-lg" />
		</div>
	);
}

export default LoadingSpinnerPage