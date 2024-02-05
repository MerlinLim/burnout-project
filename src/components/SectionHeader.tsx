import React from 'react';
import Button from '@mui/material/Button';
import type { IconType } from 'react-icons';

interface SectionHeaderType {
    title: string;
    description?: string;
    buttonLabel?: string;
    buttonAction?: () => void;
    Icon?: IconType;
}

const SectionHeader = ({ Icon, title, description, buttonLabel, buttonAction }: SectionHeaderType) => {
  return (
    <>
      <div className = "">
        <div className = "flex text-xl items-end">
          {Icon && <Icon className="w-[34px] h-[34px] mr-1"/>}
          {title}
        </div>
        {buttonLabel && (
          <Button variant="contained" onClick={buttonAction}>
            {buttonLabel}
          </Button>
        )}
      </div>
      <div className = "py-0.5">{description}</div>
    </>
  );
};

export default SectionHeader;
