'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
