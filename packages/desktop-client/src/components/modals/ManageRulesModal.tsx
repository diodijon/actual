// @ts-strict-ignore
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { Modal, ModalCloseButton, ModalHeader } from '#components/common/Modal';
import { FeatureErrorFallback } from '#components/FeatureErrorFallback';
import { ManageRules } from '#components/ManageRules';
import type { Modal as ModalType } from '#modals/modalsSlice';

type ManageRulesModalProps = Extract<
  ModalType,
  { name: 'manage-rules' }
>['options'];

export function ManageRulesModal({ payeeId }: ManageRulesModalProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  return (
    <ErrorBoundary FallbackComponent={FeatureErrorFallback}>
      <Modal name="manage-rules" isLoading={loading}>
        {({ state }) => (
          <>
            <ModalHeader
              title={t('Rules')}
              rightContent={<ModalCloseButton onPress={() => state.close()} />}
            />
            <ManageRules isModal payeeId={payeeId} setLoading={setLoading} />
          </>
        )}
      </Modal>
    </ErrorBoundary>
  );
}
