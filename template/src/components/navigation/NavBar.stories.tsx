import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBarComponent from './NavBar';

export default {
  title: 'Components',
  component: NavBarComponent,
} as ComponentMeta<typeof NavBarComponent>;

export const NavBar: ComponentStory<typeof NavBarComponent> = () => {
  return <NavBarComponent />;
};
