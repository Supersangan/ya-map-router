import React from 'react';
import * as S from './styles';
import { ReactComponent as IconDelete } from './iconDelete.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface IItemProps {
  id: string;
  name: string;
  deleteItem: () => void;
}

export function Item({ id, name, deleteItem }: IItemProps) {
  const { setNodeRef, attributes, listeners, transition, transform } =
    useSortable({ id: id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function handlePointerDown(event: React.SyntheticEvent<HTMLButtonElement>): void {
    event?.stopPropagation();
  }

  return (
    <S.Root {...attributes} {...listeners} style={style} ref={setNodeRef} data-testid="list-item-root">
      <S.Name>{name}</S.Name>
      <S.DeleteButton onClick={deleteItem} onPointerDown={handlePointerDown} data-testid="list-item-delete">
        <IconDelete/>
      </S.DeleteButton>
    </S.Root>
  );
}
 