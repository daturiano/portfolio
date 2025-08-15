import { cn } from '@/lib/utils';
import React from 'react';

export default function GridCard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 p-6 border border-[#292929] rounded-md bg-card',
        className
      )}
      {...props}
    />
  );
}
