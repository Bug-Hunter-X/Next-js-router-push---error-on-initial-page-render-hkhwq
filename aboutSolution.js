```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
  const router = useRouter();

  useEffect(() => {
    // Only attempt navigation after the router is ready
    if (router.isReady) {
      router.push('/contact');
    }
  }, [router.isReady]);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```