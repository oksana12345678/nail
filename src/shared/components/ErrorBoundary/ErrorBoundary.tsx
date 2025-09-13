'use client';

import React, { Component, ReactNode } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';

interface ErrorBoundaryProps {
  children: ReactNode;
  t: (key: string) => string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <Container>
          <div>
            <h2>{t('errorTitle')}</h2>
            <p>{this.state.error?.message || t('errorMessage')}</p>
            <Button onClick={this.resetError}>{t('tryAgain')}</Button>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
