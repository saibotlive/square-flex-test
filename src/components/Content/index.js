import React, { useState } from 'react';
import {
  Container,
  Item,
  Image,
  Title,
  Body,
  LightBoxContainer,
  LightBoxBody,
  BodyStyle,
  LightBoxCloseBtn
} from './styles';
import useFetch from '../../hooks/useFetch';
import LightBox from '../LightBox';

const Content = () => {
  const data = useFetch('/api/getContent');
  const [lightbox, setLightBoxOpen] = useState({ item: null, isOpen: false });

  const handleLightBoxOpen = item => () => {
    setLightBoxOpen({ item, isOpen: true });
  };

  const handleLightBoxClose = () => {
    setLightBoxOpen({ item: null, isOpen: false });
  };

  return (
    <Container>
      {data.map(el => (
        <Item key={el.id} onClick={handleLightBoxOpen(el)}>
          <Image src={el.artwork} alt={el.title} />
          <Title>{el.title}</Title>
          <Body>{el.content}</Body>
        </Item>
      ))}
      {lightbox.isOpen && (
        <LightBox>
          <BodyStyle />
          <LightBoxContainer className="lightbox">
            <LightBoxBody>
              <div>
                <Image src={lightbox.item.artwork} alt={lightbox.item.title} />
              </div>
              <div />
              <Title>{lightbox.item.title}</Title>
              <Body>{lightbox.item.content}</Body>
            </LightBoxBody>
            <LightBoxCloseBtn className="close-btn" onClick={handleLightBoxClose} />
          </LightBoxContainer>
        </LightBox>
      )}
    </Container>
  );
};

export default Content;
