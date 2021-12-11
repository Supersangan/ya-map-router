import React, { useState } from 'react';
import { IMenuItems } from '../../interfaces/menuItems';
import { Form } from './Form/Form';
import { List } from './List';

export function Menu() {
  const [items, setItems] = useState<IMenuItems>([]);

  return (
    <>
      <Form setItems={setItems} />

      <List items={items} setItems={setItems}/>
    </>
  );
}
