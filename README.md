# Next.js router.push() Error on Initial Page Render

This repository demonstrates a common error in Next.js applications where using `router.push()` within the component's main function leads to an error.  The issue arises because the `router` object is not yet fully initialized during the initial render.

## Problem

The `about.js` file contains a `router.push('/contact')` call within the main component function. This attempts to redirect to the '/contact' page before the router is ready. This results in an error.

## Solution

The `aboutSolution.js` provides a solution using `useEffect` and `router.isReady`.  This ensures that `router.push()` is only called after the router is fully initialized.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit the `/about` page. Observe the error.
6. Navigate to the `aboutSolution.js` and run it to see the solution