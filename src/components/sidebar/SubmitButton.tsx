import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const SubmitButton = ({
  onClick,
  remainingPixels,
}: {
  onClick: () => void;
  remainingPixels: number;
}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const submitImage = () => {
    onClick();
    setSeconds(30);
  };

  const isDisabled = seconds > 0;

  return (
    <Button onClick={submitImage} variant="outlined" disabled={isDisabled}>
      {isDisabled ? (
        `Submit more in ${seconds}s`
      ) : (
        <>
          submit
          <br />({remainingPixels} pixels remaining)
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
