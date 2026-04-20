import React from 'react';
import type { CSSProperties } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { styles } from '@actual-app/components/styles';
import { theme } from '@actual-app/components/theme';

import { ToBudgetMenu } from '#components/budget/envelope/budgetsummary/ToBudgetMenu';
import { Modal, ModalCloseButton, ModalHeader } from '#components/common/Modal';
import { FeatureErrorFallback } from '#components/FeatureErrorFallback';
import type { Modal as ModalType } from '#modals/modalsSlice';

type EnvelopeToBudgetMenuModalProps = Extract<
  ModalType,
  { name: 'envelope-summary-to-budget-menu' }
>['options'];

export function EnvelopeToBudgetMenuModal({
  onTransfer,
  onCover,
  onHoldBuffer,
  onResetHoldBuffer,
  onBudgetAction,
  month,
}: EnvelopeToBudgetMenuModalProps) {
  const defaultMenuItemStyle: CSSProperties = {
    ...styles.mobileMenuItem,
    color: theme.menuItemText,
    borderRadius: 0,
    borderTop: `1px solid ${theme.pillBorder}`,
  };

  return (
    <ErrorBoundary FallbackComponent={FeatureErrorFallback}>
      <Modal name="envelope-summary-to-budget-menu">
        {({ state }) => (
          <>
            <ModalHeader
              showLogo
              rightContent={<ModalCloseButton onPress={() => state.close()} />}
            />
            <ToBudgetMenu
              getItemStyle={() => defaultMenuItemStyle}
              onTransfer={onTransfer}
              onCover={onCover}
              onHoldBuffer={onHoldBuffer}
              onResetHoldBuffer={onResetHoldBuffer}
              onBudgetAction={onBudgetAction}
              month={month}
            />
          </>
        )}
      </Modal>
    </ErrorBoundary>
  );
}
