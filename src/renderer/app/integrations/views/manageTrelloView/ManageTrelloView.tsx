import React, { FC } from 'react';
import { CenterContainer } from '../../../../ui/templates/centerContainer/CenterContainer';
import { TitleBar } from '../../../../ui/molecules/titleBar/TitleBar';
import { TrelloBoard } from '../../../../../shared/types/integrations/trello';
import { IntegrationOperations } from '../../../../../shared/types/integrations/integrations';
import { Center } from '@chakra-ui/react';
import { useIpcQuery } from '../../../../shared/ipc/useIpcQuery';
import { Alert } from '../../../../ui/molecules/alert/Alert';
import { Text } from '../../../../ui/atoms/text/Text';
import { useGetSetting } from '../../../settings/hooks/useGetSetting';
import { ManageTrelloForm } from '../../components/trello/ManageTrelloForm';
import { CloseWindowButton } from '../../../system/components/CloseWindowButton';
import { Loading } from '../../../../ui/atoms/loading/Loading';

export interface ManageTrelloViewProps {}

export const ManageTrelloView: FC<ManageTrelloViewProps> = () => {
  const { isLoading: settingLoading, data: trelloSettings } = useGetSetting(
    'trello'
  );

  const { data, isLoading: queryLoading } = useIpcQuery<never, TrelloBoard[]>(
    IntegrationOperations.GetTrelloBoards
  );

  const loading = queryLoading || settingLoading;

  return (
    <>
      <TitleBar
        actionOnClose="closeWindow"
        mb={6}
        pageTitle="Manage trello"
        position="relative"
      />
      <CenterContainer>
        {loading && (
          <Center h="100%">
            <Loading width="30px" height="30px" />
          </Center>
        )}
        {!data?.length && !queryLoading && (
          <Alert type="warning">
            <Text>No boards found.</Text>
          </Alert>
        )}
        {Boolean(data?.length) && !loading && (
          <ManageTrelloForm
            additionalButtons={(form) => (
              <CloseWindowButton isDirty={form.formState.isDirty} />
            )}
            boards={data!}
            trelloSettings={trelloSettings!}
          />
        )}
      </CenterContainer>
    </>
  );
};
