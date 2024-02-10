
import React from 'react';

export interface WithLoggingProps {
    logMessage: string;
}

export const withLogging = <P extends object>(Component: React.ComponentType<P>, componentName: string) => {
    class WithLogging extends React.Component<P & WithLoggingProps> {
        
        componentDidMount() {
            console.log(`${this.props.logMessage} ${componentName}`);
        }

        render() {
            // Pass through any additional props
            return <Component {...this.props} />;
        }
    }

    return WithLogging;
};