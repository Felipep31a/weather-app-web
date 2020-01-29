import React from 'react';

class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    componentDidCatch(err, info) {
        console.log(err);
    }


    render() {
        if (this.state.hasError) {
            return <div>Something is wrong</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;