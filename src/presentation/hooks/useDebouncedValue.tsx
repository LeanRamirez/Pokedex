import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function useDebouncedValue(
  input: string = '',
  time: number = 500,
) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
}
