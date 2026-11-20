import { cn } from '@/lib/utils';

export function Skeleton({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('skeleton-pulse rounded-md', className)}
      style={{
        backgroundColor: '#E2E8F0',
        ...style,
      }}
      {...props}
    />
  );
}
