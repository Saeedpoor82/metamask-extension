import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AlignItems,
  BackgroundColor,
  Display,
  FlexDirection,
  JustifyContent,
  TextColor,
  TextVariant,
} from '../../../helpers/constants/design-system';
import {
  AvatarToken,
  AvatarTokenSize,
  Box,
  ButtonIcon,
  ButtonIconSize,
  IconName,
  Text,
} from '../../../components/component-library';
import { useI18nContext } from '../../../hooks/useI18nContext';
import { AssetType } from '../../../../shared/constants/transaction';
import { DEFAULT_ROUTE } from '../../../helpers/constants/routes';

const AssetHeader = ({
  image,
  showBalance,
  balance,
  fiatDisplay,
  optionsButton,
}: {
  type: AssetType;
  symbol: string;
  image: string;
  showBalance: boolean;
  balance: string;
  fiatDisplay: string;
  optionsButton: React.ReactNode;
}) => {
  const t = useI18nContext();
  const history = useHistory();

  return (
    <Box
      display={Display.Flex}
      backgroundColor={BackgroundColor.backgroundDefault}
      justifyContent={JustifyContent.spaceBetween}
      flexDirection={FlexDirection.Row}
      alignItems={AlignItems.center}
      padding={4}
      className={'asset-header'}
    >
      <ButtonIcon
        size={ButtonIconSize.Sm}
        ariaLabel={t('back')}
        iconName={IconName.ArrowLeft}
        onClick={() => history.push(DEFAULT_ROUTE)}
      />
      {showBalance && (
        <Box
          display={Display.Flex}
          flexDirection={FlexDirection.Column}
          alignItems={AlignItems.center}
        >
          <Text variant={TextVariant.bodyMdBold}>{fiatDisplay}</Text>
          <Box display={Display.Flex} alignItems={AlignItems.center} gap={2}>
            <AvatarToken src={image} size={AvatarTokenSize.Xs} />
            <Text
              variant={TextVariant.bodySm}
              color={TextColor.textAlternative}
            >
              {balance}
            </Text>
          </Box>
        </Box>
      )}
      {optionsButton}
    </Box>
  );
};

export default AssetHeader;