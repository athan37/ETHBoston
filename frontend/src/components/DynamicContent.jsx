import React from 'react';
import Home from '@/pages/home';
import About from '@/pages/about';

const components = {
  'home': Home,
  'about': About,
};

export default function DynamicContent({ content }) {
  const ComponentToRender = components[content] || Home; // Default to Home if no matching component
  return <ComponentToRender />;
}