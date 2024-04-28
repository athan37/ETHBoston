import React from 'react';
import Home from '@/pages/home';
import About from '@/pages/about';
import Login from '@/pages/login';
// import Profile from '@/pages/profile';

const components = {
  'home': Home,
  'about': About,
  'login': Login,
  // 'profile' : Profile
};

export default function DynamicContent({ content }) {
  const ComponentToRender = components[content] || Home; // Default to Home if no matching component
  return <ComponentToRender />;
}