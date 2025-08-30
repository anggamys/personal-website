import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-[#e8f1f2] dark:bg-[#202a2d] px-4">
                    <div className="max-w-md w-full bg-white dark:bg-[#303d40] rounded-lg shadow-lg p-8 text-center">
                        <div className="text-6xl mb-4">😵</div>
                        <h1 className="text-2xl font-bold text-[#16697a] dark:text-[#f7be16] mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-[#292929] dark:text-[#e8f1f2] mb-6">
                            We apologize for the inconvenience. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-[#f7be16] text-[#16697a] font-semibold rounded-lg hover:bg-[#f7be16]/90 transition-colors"
                        >
                            Refresh Page
                        </button>
                        {import.meta.env.DEV && (
                            <details className="mt-6 text-left">
                                <summary className="cursor-pointer text-[#489fb5] font-semibold">
                                    Error Details (Development)
                                </summary>
                                <pre className="mt-2 p-4 bg-[#f9fafb] dark:bg-[#202a2d] rounded text-xs text-[#292929] dark:text-[#e8f1f2] overflow-auto max-h-40">
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
