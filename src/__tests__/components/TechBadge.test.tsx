import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechBadge } from '../../presentation/components/TechBadge';

describe('TechBadge', () => {
  it('should render the tech name', () => {
    render(<TechBadge name="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
