import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const CompleteMessage = () => {
  
  return (
    <div className = "flex flex-col mt-[50px] items-center ">
      <Img src="/img/complete1.png"></Img>
      <div className = "flex flex-col text-center md:max-w-[75%]">
        <div className = "px-[10px]"> Thanks for making work a better place! 🎉 </div>
        <br/>
        <div>
          A little kindness and encouragement can go a long way in boosting someone&apos;s confidence and motivation!
          So, let&apos;s strive to make our peer reviews a highlight of the sprint with encouraging feedback. After
          all, we&apos;re all in this together and a positive work environment benefits us all.
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '3rem',
        }}
      >
          <ButtonBox
            style={{
              backgroundColor: 'transparent',
              border: '1px solid white',
              marginRight: '2rem',
            }}
          >
            View my messages
          </ButtonBox>
          <ButtonBox style={{ backgroundColor: '#FF6624' }} onClick={ () => window.location.href='/'}>Complete</ButtonBox>
      </div>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #57a9ff;
  border-color: white;

  @media screen and (max-width: 650px) {
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  text-align: center;
`;

const Img = styled.img`
  width: 300px;

  @media screen and (max-width: 650px) {
    width: 200px;
  }
`;

const ButtonBox = styled.button`
  color: white;
  font-size: 1em;
  width: 15rem;
  padding: 1em;
  border-radius: 5px;
  
  @media screen and (max-width: 650px) {
    width: 8rem;
  }
`;

export default CompleteMessage;
