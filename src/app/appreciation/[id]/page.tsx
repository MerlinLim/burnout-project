'use client'
import React, { useEffect, useState } from 'react'
import SendMessage from '../components/SendMessage';
import { memberData } from '@/data/member-data';
import CompleteMessage from '../components/CompleteMessage';

enum AppreciationFlowState {
    APPRECIATION_START,
    APPRECIATION_SEND_MESSAGE,
    APPRECIATION_CONFIRMATION,
    APPRECIATION_DONE,
}

const AppreciationPage = ({ params }: { params: { id: number } }) => {
    const { id } = params;

    const [appreciationFlowState, setAppreciationFlowState] = useState(AppreciationFlowState.APPRECIATION_SEND_MESSAGE);

    const handleComplete = () => {
      setAppreciationFlowState(AppreciationFlowState.APPRECIATION_DONE);
    }

    useEffect( () => {
      window.scrollTo(0, 0);
    }, [appreciationFlowState])

    switch (appreciationFlowState) {
        case AppreciationFlowState.APPRECIATION_SEND_MESSAGE: {
          return (
            <div>
              <SendMessage key={`${id}`} memberData={memberData[id-1]} handleComplete={handleComplete} />
            </div>
          );
        }
    
        case AppreciationFlowState.APPRECIATION_DONE: {
          return (
            <div>
              <CompleteMessage />
            </div>
          );
        }
      }
}

export default AppreciationPage