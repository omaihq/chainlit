import { cn } from '@/lib/utils';
import { ChainlitContext, useConfig } from '@/react-client';
import { useContext } from 'react';

import { useTheme } from './ThemeProvider';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  const { variant } = useTheme();
  const { config } = useConfig();
  const apiClient = useContext(ChainlitContext);

  return (
    <img
      src={apiClient.getLogoEndpoint(variant, config?.ui?.logo_file_url)}
      alt="logo"
      className={cn('logo', className)}
    />
  );
};
