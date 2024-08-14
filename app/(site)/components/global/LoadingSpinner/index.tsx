import React from 'react'

const LoadingSpinnerPage = () => {
  return (
		<div className="flex items-center justify-center min-h-[75dvh]">
			<div className="animate-spin rounded-full border-4 border-muted-foreground border-t-transparent h-12 w-12" />
		</div>
	);
}

export default LoadingSpinnerPage