```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // This will cause an error when navigating to the about page
  // because the router is not ready on the initial render
  router.push('/contact');

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```