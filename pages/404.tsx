import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page after 3 seconds
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [router]);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Redirecting to the homepage...</p>
        </div>
    );
};

export default Custom404;