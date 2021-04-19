import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const dashboard = () => {
    const auth = useAuth();
    if(!auth.user) {
        return <Spinner />
    }
    return <EmptyState />;
};

export default dashboard;