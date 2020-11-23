import { BaseIconProps, ColorIconMap } from './types';
import React, { FC, Fragment, useMemo } from 'react';
import { BoxProps, Image, useColorMode, useTheme } from '@chakra-ui/core';
import { Theme } from '../../../types/theme';

export interface ComposeIconParams<AdditionalProps extends object>
  extends BoxProps {
  iconMap: ColorIconMap;
  type: 'img' | 'svg';
  alt?: string;
  additionalProps?: (passedProps: AdditionalProps, theme: Theme) => BoxProps;
}

export const composeIcon = <Props extends BaseIconProps>(
  params: ComposeIconParams<Props>
): FC<Props> => (props) => {
  const theme = useTheme() as Theme;
  const themeColorMode = useColorMode();
  const colorMode = props.variant ?? themeColorMode ?? 'light';

  const additionalProps = useMemo(
    () => (params.additionalProps ? params.additionalProps(props, theme) : {}),
    [props, theme]
  );

  const icons = useMemo(() => Object.entries(params.iconMap), []);

  console.log({ icons, colorMode, alt: params.alt });

  return (
    <>
      {icons.map(([iconColor, icon]) => (
        <Fragment key={iconColor}>
          {params.type === 'img' && (
            <Image
              display={iconColor === colorMode ? 'block' : 'none'}
              width={props.width}
              height={props.height}
              src={icon}
              alt={params.alt!}
              {...(props as any)}
              {...(additionalProps as any)}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};
