import React, { useContext } from 'react';
import * as S from './styles';
import { IMenuItems } from '../../../interfaces/menuItems';
import { Item } from './Item';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { PlacemarksContext } from '../..';

export function List() {
  const { items, setItems } = useContext(PlacemarksContext);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function deleteItem(id: string): void {
    setItems(
      (items: IMenuItems): IMenuItems => items.filter((item) => item.id !== id)
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event; 

    if (active.id !== over?.id) {
      setItems((items: IMenuItems): IMenuItems => {
        const leftIndex = items.findIndex((item) => item.id === active.id);
        const rightIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, leftIndex, rightIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <S.List>
          {items.map((item) => (
            <S.Item key={item.id + 'qwe'}>
              <Item
                id={item.id}
                name={item.name}
                deleteItem={() => deleteItem(item.id)}
              />
            </S.Item>
          ))}
        </S.List>
      </SortableContext>
    </DndContext>
  );
}
