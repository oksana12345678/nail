import React from 'react';
import Section from '@/shared/components/Section/Section';
import Container from '@/shared/components/Container/Container';
import GalleryList from '@/modules/GalleryList/GalleryList';

const Gallery: React.FC = () => {
  return (
    <Section>
      <Container>
        <GalleryList />
      </Container>
    </Section>
  );
};

export default Gallery;
